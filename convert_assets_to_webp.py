#!/usr/bin/env python3
"""
Convierte imágenes en assets/ a WebP (calidad 80%), actualiza referencias
en HTML/JS y elimina los .png/.jpg originales para reducir peso en producción.
"""
from __future__ import annotations

import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent
ASSETS_DIR = ROOT / "assets"
QUALITY = 80
SOURCE_EXTS = {".png", ".jpg", ".jpeg"}
REF_PATTERN = re.compile(
    r"(assets/[^'\"\\)\\s]+)\.(png|jpe?g)",
    re.IGNORECASE,
)


def human_size(num: int | float) -> str:
    num = float(num)
    for unit in ("B", "KB", "MB", "GB"):
        if num < 1024:
            return f"{num:.1f} {unit}"
        num /= 1024
    return f"{num:.1f} TB"


def folder_size(path: Path) -> int:
    return sum(f.stat().st_size for f in path.rglob("*") if f.is_file())


def discover_code_files() -> list[Path]:
    files: list[Path] = []
    for pattern in ("*.html", "*.js"):
        files.extend(sorted(ROOT.glob(pattern)))
    return files


def convert_images() -> tuple[int, int, list[Path]]:
    try:
        from PIL import Image
    except ImportError:
        print("Falta Pillow. Ejecuta: pip install -r requirements-convert.txt")
        sys.exit(1)

    if not ASSETS_DIR.is_dir():
        print(f"No existe la carpeta: {ASSETS_DIR}")
        sys.exit(1)

    converted = 0
    errors = 0
    bytes_before = 0
    bytes_after = 0
    sources_ok: list[Path] = []

    files = sorted(
        p
        for p in ASSETS_DIR.rglob("*")
        if p.is_file() and p.suffix.lower() in SOURCE_EXTS
    )

    print(f"Encontradas {len(files)} imágenes .png/.jpg en assets/\n")

    for src in files:
        dst = src.with_suffix(".webp")
        try:
            before = src.stat().st_size
            with Image.open(src) as img:
                if img.mode in ("RGBA", "LA") or (
                    img.mode == "P" and "transparency" in img.info
                ):
                    img = img.convert("RGBA")
                elif img.mode != "RGB":
                    img = img.convert("RGB")
                img.save(dst, "WEBP", quality=QUALITY, method=6)

            after = dst.stat().st_size
            bytes_before += before
            bytes_after += after
            converted += 1
            sources_ok.append(src)
            pct = (1 - after / before) * 100 if before else 0
            print(
                f"  OK  {src.relative_to(ROOT)} -> {dst.name}  "
                f"({human_size(before)} -> {human_size(after)}, -{pct:.0f}%)"
            )
        except Exception as exc:
            errors += 1
            print(f"  ERR {src.relative_to(ROOT)}: {exc}")

    print()
    if converted:
        total_pct = (1 - bytes_after / bytes_before) * 100 if bytes_before else 0
        print(
            f"Convertidas: {converted} | Errores: {errors} | "
            f"Total: {human_size(bytes_before)} -> {human_size(bytes_after)} (-{total_pct:.0f}%)"
        )
    return converted, errors, sources_ok


def update_references(files: list[Path]) -> int:
    total = 0
    for path in files:
        if not path.is_file():
            continue
        text = path.read_text(encoding="utf-8")
        new_text, count = REF_PATTERN.subn(r"\1.webp", text)
        if count:
            path.write_text(new_text, encoding="utf-8")
            print(f"  {path.name}: {count} referencias actualizadas")
            total += count
        else:
            print(f"  {path.name}: sin cambios")
    return total


def delete_originals(sources_ok: list[Path]) -> tuple[int, int, int]:
    deleted = 0
    skipped = 0
    bytes_freed = 0

    all_sources = sorted(
        p
        for p in ASSETS_DIR.rglob("*")
        if p.is_file() and p.suffix.lower() in SOURCE_EXTS
    )

    print(f"\nEliminando {len(all_sources)} archivos originales...\n")

    for src in all_sources:
        webp = src.with_suffix(".webp")
        if not webp.is_file():
            print(f"  SKIP {src.relative_to(ROOT)} (sin .webp correspondiente)")
            skipped += 1
            continue
        try:
            size = src.stat().st_size
            src.unlink()
            deleted += 1
            bytes_freed += size
            print(f"  DEL {src.relative_to(ROOT)}")
        except Exception as exc:
            print(f"  ERR {src.relative_to(ROOT)}: {exc}")
            skipped += 1

    return deleted, skipped, bytes_freed


def main() -> None:
    size_before = folder_size(ASSETS_DIR)
    print(f"Tamaño inicial de assets/: {human_size(size_before)}\n")

    print("=== Paso 1: Conversión a WebP (calidad 80%) ===\n")
    converted, errors, _ = convert_images()
    if errors:
        print(f"\nAVISO: {errors} archivo(s) con error. No se eliminarán originales fallidos.")

    code_files = discover_code_files()
    print(f"\n=== Paso 2: Actualizar referencias en {len(code_files)} archivo(s) ===\n")
    refs = update_references(code_files)

    print("\n=== Paso 3: Eliminar .png/.jpg originales ===")
    deleted, skipped, bytes_freed = delete_originals([])

    size_after = folder_size(ASSETS_DIR)
    saved = size_before - size_after

    print(f"\n{'=' * 50}")
    print(f"Referencias actualizadas: {refs}")
    print(f"Imágenes convertidas:     {converted}")
    print(f"Originales eliminados:    {deleted} (omitidos: {skipped})")
    print(f"Espacio liberado:         {human_size(bytes_freed)}")
    print(f"assets/ antes:            {human_size(size_before)}")
    print(f"assets/ después:          {human_size(size_after)}")
    print(f"Ahorro total en assets/:  {human_size(saved)} (-{(saved / size_before * 100) if size_before else 0:.0f}%)")
    print("Listo. Carpeta lista para producción.")


if __name__ == "__main__":
    main()
