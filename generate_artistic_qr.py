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
from PIL import Image, ImageDraw, ImageEnhance, ImageFont, ImageOps, ImageStat

ROOT = Path(__file__).resolve().parent
ASSETS = ROOT / "assets"
OUT_DIR = ROOT / "output"
URL = "https://alanmgd181203.github.io/CICIP/"
MODULE_PX = 48
ERROR_LEVEL = qrcode.constants.ERROR_CORRECT_M
BORDER = 4
BLANCO_PURO = (255, 255, 255)
TEXTO_MARCA = "CICIP"
TEXTO_LEYENDA = "Un artista de sombras en las sombras, en busca del destello"
TEXTO_MARCA_COLOR = (28, 28, 32)
TEXTO_LEYENDA_COLOR = (72, 72, 78)
TRACKING_MARCA = 0.18
PDF_ANCHO_MM = 90
PDF_ALTO_MM = 60
PDF_MARGEN_MM = 2
PDF_DPI = 300

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


def obtener_fuente_elegante(tamano: int, cursiva: bool = False) -> ImageFont.FreeTypeFont | ImageFont.ImageFont:
    if cursiva:
        candidatos = [
            Path("C:/Windows/Fonts/GARAIT.TTF"),
            Path("C:/Windows/Fonts/georgiai.ttf"),
            Path("C:/Windows/Fonts/timesi.ttf"),
            Path("C:/Windows/Fonts/GARA.TTF"),
        ]
    else:
        candidatos = [
            Path("C:/Windows/Fonts/GARA.TTF"),
            Path("C:/Windows/Fonts/BASKVILL.TTF"),
            Path("C:/Windows/Fonts/georgiab.ttf"),
            Path("C:/Windows/Fonts/timesbd.ttf"),
            Path("/System/Library/Fonts/Supplemental/Georgia Bold.ttf"),
            Path("/usr/share/fonts/truetype/liberation/LiberationSerif-Bold.ttf"),
        ]
    for ruta in candidatos:
        if ruta.is_file():
            return ImageFont.truetype(str(ruta), tamano)
    return ImageFont.load_default()


def medir_texto_con_tracking(
    draw: ImageDraw.ImageDraw,
    texto: str,
    fuente: ImageFont.FreeTypeFont | ImageFont.ImageFont,
    tracking_px: float,
) -> tuple[int, int]:
    if not texto:
        return 0, 0
    ancho = 0
    alto = 0
    for indice, caracter in enumerate(texto):
        caja = draw.textbbox((0, 0), caracter, font=fuente)
        ancho += caja[2] - caja[0]
        alto = max(alto, caja[3] - caja[1])
        if indice < len(texto) - 1:
            ancho += tracking_px
    return ancho, alto


def dibujar_texto_con_tracking(
    draw: ImageDraw.ImageDraw,
    origen_x: int,
    origen_y: int,
    texto: str,
    fuente: ImageFont.FreeTypeFont | ImageFont.ImageFont,
    color: tuple[int, int, int],
    tracking_px: float,
) -> None:
    x = origen_x
    for indice, caracter in enumerate(texto):
        draw.text((x, origen_y), caracter, font=fuente, fill=color)
        caja = draw.textbbox((0, 0), caracter, font=fuente)
        x += caja[2] - caja[0]
        if indice < len(texto) - 1:
            x += tracking_px


def agregar_titulo_cicip(mosaico: Image.Image) -> Image.Image:
    qr_ancho, qr_alto = mosaico.size
    borde_inferior_px = BORDER * MODULE_PX
    borde_lateral_px = BORDER * MODULE_PX
    margen_superior = max(int(qr_ancho * 0.07), 44)
    margen_inferior_titulo = max(int(qr_ancho * 0.028), 18)
    margen_leyenda = max(int(qr_ancho * 0.002), 2)
    margen_pie = max(int(qr_ancho * 0.012), 8)
    margen_leyenda_lateral = max(int(qr_ancho * 0.012), 14)
    tamano_fuente = max(int(qr_ancho * 0.118), 52)
    tamano_leyenda = max(int(qr_ancho * 0.012), 11)
    fuente = obtener_fuente_elegante(tamano_fuente)
    fuente_leyenda = obtener_fuente_elegante(tamano_leyenda, cursiva=True)
    texto = TEXTO_MARCA.upper()

    medida = Image.new("RGB", (1, 1), BLANCO_PURO)
    draw_medida = ImageDraw.Draw(medida)
    tracking_px = tamano_fuente * TRACKING_MARCA
    texto_ancho, texto_alto = medir_texto_con_tracking(draw_medida, texto, fuente, tracking_px)
    caja_leyenda = draw_medida.textbbox((0, 0), TEXTO_LEYENDA, font=fuente_leyenda)
    leyenda_alto = caja_leyenda[3] - caja_leyenda[1]

    encabezado_alto = margen_superior + texto_alto + margen_inferior_titulo
    base_cuadros_y = encabezado_alto + qr_alto - borde_inferior_px
    leyenda_y = base_cuadros_y + margen_leyenda
    pie_alto = max(margen_pie, leyenda_y + leyenda_alto + margen_pie - (encabezado_alto + qr_alto))
    lienzo_alto = encabezado_alto + qr_alto + pie_alto
    lienzo = Image.new("RGB", (qr_ancho, lienzo_alto), BLANCO_PURO)
    lienzo.paste(mosaico, (0, encabezado_alto))

    draw = ImageDraw.Draw(lienzo)
    texto_x = (qr_ancho - texto_ancho) // 2
    texto_y = margen_superior
    dibujar_texto_con_tracking(draw, texto_x, texto_y, texto, fuente, TEXTO_MARCA_COLOR, tracking_px)

    leyenda_ancho = caja_leyenda[2] - caja_leyenda[0]
    leyenda_x = qr_ancho - borde_lateral_px - margen_leyenda_lateral - leyenda_ancho
    draw.text((leyenda_x, leyenda_y), TEXTO_LEYENDA, font=fuente_leyenda, fill=TEXTO_LEYENDA_COLOR)
    return lienzo


def mm_a_px(mm: float, dpi: int = PDF_DPI) -> int:
    return max(1, round(mm / 25.4 * dpi))


def exportar_pdf_impresion(imagen: Image.Image, ruta: Path) -> None:
    """PDF 90x60 mm (ancho x alto), listo para imprenta a 300 DPI."""
    ancho_pag = mm_a_px(PDF_ANCHO_MM)
    alto_pag = mm_a_px(PDF_ALTO_MM)
    margen = mm_a_px(PDF_MARGEN_MM)
    area_w = ancho_pag - 2 * margen
    area_h = alto_pag - 2 * margen

    arte = imagen.convert("RGB")
    escala = min(area_w / arte.width, area_h / arte.height)
    nuevo_w = max(1, round(arte.width * escala))
    nuevo_h = max(1, round(arte.height * escala))
    arte = arte.resize((nuevo_w, nuevo_h), Image.Resampling.LANCZOS)

    pagina = Image.new("RGB", (ancho_pag, alto_pag), BLANCO_PURO)
    pagina.paste(arte, ((ancho_pag - nuevo_w) // 2, (alto_pag - nuevo_h) // 2))
    pagina.save(ruta, "PDF", resolution=PDF_DPI)


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
    resultado = agregar_titulo_cicip(mosaico)

    out_png = OUT_DIR / "qr-artistico-cicip.png"
    out_webp = OUT_DIR / "qr-artistico-cicip.webp"
    out_pdf = OUT_DIR / "qr-artistico-cicip-90x60mm.pdf"
    out_map = OUT_DIR / "qr-artistico-mapa.json"
    out_report = OUT_DIR / "qr-artistico-reporte.txt"

    resultado.save(out_png, optimize=True)
    resultado.save(out_webp, quality=92, method=6)
    exportar_pdf_impresion(resultado, out_pdf)

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
    print(f"  PDF:      {out_pdf} ({PDF_ANCHO_MM}x{PDF_ALTO_MM} mm @ {PDF_DPI} DPI)")
    print(f"  Mapa:     {out_map}")
    print(f"  Reporte:  {out_report}")
    print(f"\n  Imagenes unicas en celdas negras: {unicas}/{total_assets}")
    print(f"  Tamano QR: {mosaico.size[0]}x{mosaico.size[1]} px")
    print(f"  Tamano final: {resultado.size[0]}x{resultado.size[1]} px (con titulo y leyenda)")


if __name__ == "__main__":
    main()
