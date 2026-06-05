#!/usr/bin/env python3
"""
Genera un codigo QR artistico para CICIP: solo los modulos NEGROS llevan imagen.
Los modulos blancos permanecen blanco puro (mejor legibilidad para escaneo).
"""
from __future__ import annotations

import json
import sys
from pathlib import Path

import qrcode
from PIL import Image, ImageEnhance, ImageOps, ImageStat

ROOT = Path(__file__).resolve().parent
ASSETS = ROOT / "assets"
OUT_DIR = ROOT / "output"
URL = "https://cicip.netlify.app/"
MODULE_PX = 48
ERROR_LEVEL = qrcode.constants.ERROR_CORRECT_M
BORDER = 4
BLANCO_PURO = (255, 255, 255)

PRIORITY_NAMES = [
    "Planta Conjunto.webp",
    "planta-edificios.webp",
    "edificio1.webp",
    "edificio2.webp",
    "edificio3.webp",
    "imagen-portada.webp",
] + [f"imagen-{i}.webp" for i in range(31)]


def analizar_matriz_qr() -> dict:
    qr = qrcode.QRCode(
        version=None,
        error_correction=ERROR_LEVEL,
        box_size=1,
        border=BORDER,
    )
    qr.add_data(URL)
    qr.make(fit=True)
    img = qr.make_image(fill_color="black", back_color="white").convert("L")
    w, h = img.size
    px = img.load()
    negros = blancos = 0
    for y in range(h):
        for x in range(w):
            if px[x, y] < 128:
                negros += 1
            else:
                blancos += 1
    return {
        "url": URL,
        "version": qr.version,
        "matrix_px": f"{w}x{h}",
        "modulos_totales": w * h,
        "modulos_negros": negros,
        "modulos_blancos": blancos,
        "mask": img,
    }


def luminancia(ruta: Path) -> float:
    with Image.open(ruta) as img:
        gray = ImageOps.fit(img.convert("L"), (64, 64), Image.Resampling.LANCZOS)
        return ImageStat.Stat(gray).mean[0]


def cargar_assets() -> list[dict]:
    archivos = sorted(ASSETS.glob("*.webp"))
    if not archivos:
        print(f"No hay .webp en {ASSETS}")
        sys.exit(1)

    datos = [{"path": p, "name": p.name, "luminance": luminancia(p)} for p in archivos]
    datos.sort(key=lambda d: d["luminance"])
    return datos


def prioridad_orden(pool: list[dict]) -> list[dict]:
    por_nombre = {d["name"]: d for d in pool}
    ordenados: list[dict] = []
    vistos: set[str] = set()
    for nombre in PRIORITY_NAMES:
        if nombre in por_nombre and nombre not in vistos:
            ordenados.append(por_nombre[nombre])
            vistos.add(nombre)
    for d in pool:
        if d["name"] not in vistos:
            ordenados.append(d)
            vistos.add(d["name"])
    return ordenados


def expandir_pool(pool: list[dict], cantidad: int) -> list[dict]:
    orden = prioridad_orden(pool)
    resultado: list[dict] = []
    ciclo = 0
    while len(resultado) < cantidad:
        if ciclo == 0:
            for item in orden:
                if len(resultado) >= cantidad:
                    break
                resultado.append(item)
        else:
            for item in prioridad_orden(pool):
                if len(resultado) >= cantidad:
                    break
                resultado.append(item)
            for item in orden:
                if len(resultado) >= cantidad:
                    break
                resultado.append(item)
        ciclo += 1
    return resultado[:cantidad]


def renderizar_celda_oscura(entry: dict) -> Image.Image:
    with Image.open(entry["path"]) as src:
        celda = ImageOps.fit(src.convert("RGB"), (MODULE_PX, MODULE_PX), Image.Resampling.LANCZOS)
    celda = ImageEnhance.Brightness(celda).enhance(0.5)
    celda = ImageEnhance.Contrast(celda).enhance(1.15)
    return celda


def generar_mosaico(info: dict, assets: list[dict]) -> Image.Image:
    mask = info["mask"]
    w, h = mask.size
    px = mask.load()

    pool_negro = expandir_pool(assets, info["modulos_negros"])
    canvas = Image.new("RGB", (w * MODULE_PX, h * MODULE_PX), BLANCO_PURO)
    mapa: list[dict] = []
    i_neg = 0

    for y in range(h):
        for x in range(w):
            es_negro = px[x, y] < 128
            if es_negro:
                entry = pool_negro[i_neg]
                i_neg += 1
                celda = renderizar_celda_oscura(entry)
                canvas.paste(celda, (x * MODULE_PX, y * MODULE_PX))
                mapa.append({
                    "x": x,
                    "y": y,
                    "tipo": "negro",
                    "imagen": entry["name"],
                    "luminancia": round(entry["luminance"], 2),
                })
            else:
                mapa.append({
                    "x": x,
                    "y": y,
                    "tipo": "blanco",
                    "imagen": None,
                    "luminancia": None,
                })

    info["mapa"] = mapa
    return canvas


def contar_uso(mapa: list[dict]) -> dict[str, int]:
    uso: dict[str, int] = {}
    for m in mapa:
        if m["imagen"]:
            uso[m["imagen"]] = uso.get(m["imagen"], 0) + 1
    return dict(sorted(uso.items(), key=lambda x: -x[1]))


def main() -> None:
    OUT_DIR.mkdir(exist_ok=True)

    print("=== Analisis de matriz QR ===\n")
    info = analizar_matriz_qr()
    print(f"  URL:              {info['url']}")
    print(f"  Version QR:       {info['version']}")
    print(f"  Matriz (con borde): {info['matrix_px']}")
    print(f"  Modulos totales:  {info['modulos_totales']}")
    print(f"  Modulos negros:   {info['modulos_negros']}  -> imagenes del proyecto")
    print(f"  Modulos blancos:  {info['modulos_blancos']}  -> blanco puro")

    assets = cargar_assets()
    total_assets = len(assets)
    print(f"\n=== Assets ({total_assets} imagenes) ===\n")
    print(f"  Solo se usan en celdas negras (mas oscuras primero)")
    print(f"  Repeticiones necesarias: {max(0, info['modulos_negros'] - total_assets)}")

    print("\n=== Generando mosaico ===\n")
    mosaico = generar_mosaico(info, assets)

    out_png = OUT_DIR / "qr-artistico-cicip.png"
    out_webp = OUT_DIR / "qr-artistico-cicip.webp"
    out_map = OUT_DIR / "qr-artistico-mapa.json"
    out_report = OUT_DIR / "qr-artistico-reporte.txt"

    mosaico.save(out_png, optimize=True)
    mosaico.save(out_webp, quality=92, method=6)

    uso = contar_uso(info["mapa"])
    unicas = len(uso)
    repetidas = sum(1 for c in uso.values() if c > 1)

    with open(out_map, "w", encoding="utf-8") as f:
        json.dump(
            {
                "url": URL,
                "matriz": info["matrix_px"],
                "modulos": info["modulos_totales"],
                "celdas": info["mapa"],
            },
            f,
            ensure_ascii=False,
            indent=2,
        )

    reporte = [
        "QR ARTISTICO — PROYECTO CICIP",
        "=" * 40,
        f"URL codificada: {URL}",
        f"Matriz: {info['matrix_px']} ({info['modulos_totales']} modulos)",
        f"Negros con imagen: {info['modulos_negros']}",
        f"Blancos (sin imagen): {info['modulos_blancos']}",
        f"Assets en catalogo: {total_assets}",
        f"Assets distintos en celdas negras: {unicas}",
        f"Assets con repeticion: {repetidas}",
        "",
        "Top 15 imagenes mas repetidas:",
    ]
    for nombre, cnt in list(uso.items())[:15]:
        reporte.append(f"  {cnt:3d}x  {nombre}")

    out_report.write_text("\n".join(reporte), encoding="utf-8")

    print(f"  Guardado: {out_png}")
    print(f"  Guardado: {out_webp}")
    print(f"  Mapa:     {out_map}")
    print(f"  Reporte:  {out_report}")
    print(f"\n  Imagenes unicas en celdas negras: {unicas}/{total_assets}")
    print(f"  Tamano final: {mosaico.size[0]}x{mosaico.size[1]} px")


if __name__ == "__main__":
    main()
