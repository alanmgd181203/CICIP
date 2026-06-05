/* ═════════ EDIFICIO 1 ═════════ */
const navsEdificio1 = `
    <!-- NAV E4: Análisis Territorial → Archivo -->
    <div id="nav-territorial-a-archivo" class="nav-escena-4"
         style="display:none; position:absolute; top:0; left:0; width:100%; height:100%; z-index:30; cursor:pointer;
                background-color:rgba(120,120,120,0.45); border: 2px solid rgba(200,200,200,0.7);
                clip-path:polygon(26.52% 99.80%, 16.90% 86.65%, 75.50% 92.16%, 75.09% 99.86%);"
         onclick="saltoLateral('assets/imagen-0.webp', 'Archivo', 'nav-territorial-a-archivo', 'nav-archivo-a-territorial camara-archivo1-67')"
         onmouseenter="mostrarInfo('Ir a Archivo')"
         onmouseleave="ocultarInfo()">
      <div class="etiqueta-navegacion" style="top:94.62%; left:48.50%;">Archivo</div>
    </div>


    <!-- NAV E4: Archivo → Análisis Territorial -->
    <div id="nav-archivo-a-territorial" class="nav-escena-4"
         style="display:none; position:absolute; top:0; left:0; width:100%; height:100%; z-index:30; cursor:pointer;
                background-color:rgba(120,120,120,0.45); border: 2px solid rgba(200,200,200,0.7);
                clip-path:polygon(64.90% 0.02%, 64.52% 18.97%, 11.43% 22.95%, 10.72% -0.11%);"
         onclick="saltoLateral('assets/imagen-1.webp', 'Análisis Territorial', 'nav-archivo-a-territorial', 'nav-territorial-a-archivo nav-territorial-a-limpieza camara-territorial1-65 camara-territorial1-66')"
         onmouseenter="mostrarInfo('Ir a Análisis Territorial')"
         onmouseleave="ocultarInfo()">
      <div class="etiqueta-navegacion" style="top:10.46%; left:37.89%;">Análisis Territorial</div>
    </div>


    <!-- NAV E4: Análisis Territorial → Cuarto de Limpieza y Almacén -->
    <div id="nav-territorial-a-limpieza" class="nav-escena-4"
         style="display:none; position:absolute; top:0; left:0; width:100%; height:100%; z-index:30; cursor:pointer;
                background-color:rgba(120,120,120,0.45); border: 2px solid rgba(200,200,200,0.7);
                clip-path:polygon(79.47% -0.01%, 79.88% 6.85%, 14.08% 15.84%, 13.58% -0.01%);"
         onclick="saltoLateral('assets/imagen-2.webp', 'Cuarto de Limpieza y Almacén', 'nav-territorial-a-limpieza', 'nav-limpieza-a-vestibulo nav-limpieza-a-areacomun nav-limpieza-a-territorial')"
         onmouseenter="mostrarInfo('Ir a Cuarto de Limpieza y Almacén')"
         onmouseleave="ocultarInfo()">
      <div class="etiqueta-navegacion" style="top:5.67%; left:46.75%;">Cuarto de Limpieza</div>
    </div>


    <!-- NAV E4: Cuarto de Limpieza → Análisis Territorial -->
    <div id="nav-limpieza-a-territorial" class="nav-escena-4"
         style="display:none; position:absolute; top:0; left:0; width:100%; height:100%; z-index:30; cursor:pointer;
                background-color:rgba(120,120,120,0.45); border: 2px solid rgba(200,200,200,0.7);
                clip-path:polygon(79.10% 99.86%, 79.92% 87.16%, 24.70% 79.80%, 25.02% 99.80%);"
         onclick="saltoLateral('assets/imagen-1.webp', 'Análisis Territorial', 'nav-limpieza-a-territorial', 'nav-territorial-a-archivo nav-territorial-a-limpieza camara-territorial1-65 camara-territorial1-66')"
         onmouseenter="mostrarInfo('Ir a Análisis Territorial')"
         onmouseleave="ocultarInfo()">
      <div class="etiqueta-navegacion" style="top:91.66%; left:52.19%;">Análisis Territorial</div>
    </div>


    <!-- NAV E4: Cuarto de Limpieza → Área Común y Descanso -->
    <div id="nav-limpieza-a-areacomun" class="nav-escena-4"
         style="display:none; position:absolute; top:0; left:0; width:100%; height:100%; z-index:30; cursor:pointer;
                background-color:rgba(120,120,120,0.45); border: 2px solid rgba(200,200,200,0.7);
                clip-path:polygon(79.33% -0.12%, 79.78% 10.22%, 99.92% 8.53%, 99.88% 0.05%);"
         onclick="saltoLateral('assets/imagen-5.webp', 'Área Común y Descanso', 'nav-limpieza-a-areacomun', 'nav-areacomun-a-cocineta nav-areacomun-a-cantera nav-areacomun-a-vestibulo camara-areacomun1-58 camara-areacomun1-59 camara-areacomun1-62')"
         onmouseenter="mostrarInfo('Ir a Área Común y Descanso')"
         onmouseleave="ocultarInfo()">
      <div class="etiqueta-navegacion" style="top:4.67%; left:89.73%;">Área Común</div>
    </div>


    <!-- NAV E4: Cuarto de Limpieza → Vestíbulo/Pasillos -->
    <div id="nav-limpieza-a-vestibulo" class="nav-escena-4"
         style="display:none; position:absolute; top:0; left:0; width:100%; height:100%; z-index:30; cursor:pointer;
                background-color:rgba(120,120,120,0.45); border: 2px solid rgba(200,200,200,0.7);
                clip-path:polygon(35.45% 0.05%, 23.06% 15.28%, 55.77% 14.43%, 55.63% 33.93%, 77.96% 33.09%, 79.01% 67.48%, 79.56% 82.25%, 99.73% 52.56%, 99.88% 8.59%, 79.60% 10.95%, 79.24% 0.11%);"
         onclick="saltoLateral('assets/edificio1.webp', 'Vestíbulo/Pasillos', 'nav-limpieza-a-vestibulo', 'camara-vestibulo1-13 camara-vestibulo1-14 camara-vestibulo1-15 camara-vestibulo1-16 camara-vestibulo1-16-5 camara-vestibulo1-31 camara-vestibulo1-32 camara-vestibulo1-33 camara-vestibulo1-43 camara-vestibulo1-54 camara-vestibulo1-57 camara-vestibulo1-64')"
         onmouseenter="mostrarInfo('Ir a Vestíbulo/Pasillos')"
         onmouseleave="ocultarInfo()">
      <div class="etiqueta-navegacion" style="top:25.13%; left:68.52%;">Vestíbulo / Pasillos</div>
    </div>


    <!-- NAV E4: Área Común → Cocineta -->
    <div id="nav-areacomun-a-cocineta" class="nav-escena-4"
         style="display:none; position:absolute; top:0; left:0; width:100%; height:100%; z-index:30; cursor:pointer;
                background-color:rgba(120,120,120,0.45); border: 2px solid rgba(200,200,200,0.7);
                clip-path:polygon(28.05% 48.52%, 27.34% 77.45%, 5.96% 76.77%);"
         onclick="saltoLateral('assets/imagen-4.webp', 'Cocineta', 'nav-areacomun-a-cocineta', 'nav-cocineta-a-areacomun nav-cocineta-a-vestibulo camara-cocineta1-60 camara-cocineta1-61')"
         onmouseenter="mostrarInfo('Ir a Cocineta')"
         onmouseleave="ocultarInfo()">
      <div class="etiqueta-navegacion" style="top:67.58%; left:20.45%;">Cocineta</div>
    </div>


    <!-- NAV E4: Área Común → Lab Cantera -->
    <div id="nav-areacomun-a-cantera" class="nav-escena-4"
         style="display:none; position:absolute; top:0; left:0; width:100%; height:100%; z-index:30; cursor:pointer;
                background-color:rgba(120,120,120,0.45); border: 2px solid rgba(200,200,200,0.7);
                clip-path:polygon(61.24% 6.74%, 94.27% 7.02%, 97.53% 91.96%, 61.91% 92.23%);"
         onclick="saltoLateral('assets/imagen-6.webp', 'Lab Cantera', 'nav-areacomun-a-cantera', 'nav-cantera-a-areacomun nav-cantera-a-pruebas nav-cantera-a-sanitarios nav-cantera-a-vestibulo camara-cantera1-55 camara-cantera1-56')"
         onmouseenter="mostrarInfo('Ir a Lab Cantera')"
         onmouseleave="ocultarInfo()">
      <div class="etiqueta-navegacion" style="top:49.49%; left:78.74%;">Lab Cantera</div>
    </div>


    <!-- NAV E4: Área Común → Vestíbulo/Pasillos -->
    <div id="nav-areacomun-a-vestibulo" class="nav-escena-4"
         style="display:none; position:absolute; top:0; left:0; width:100%; height:100%; z-index:30; cursor:pointer;
                background-color:rgba(120,120,120,0.45); border: 2px solid rgba(200,200,200,0.7);
                clip-path:polygon(5.84% 76.58%, 27.19% 77.13%, 26.97% 90.02%, 61.80% 93.20%, 96.85% 91.40%, 99.55% 91.68%, 99.55% 100.13%, 15.73% 99.85%, 16.18% 88.21%, 0.22% 87.24%, 0.22% 83.92%);"
         onclick="saltoLateral('assets/edificio1.webp', 'Vestíbulo/Pasillos', 'nav-areacomun-a-vestibulo', 'camara-vestibulo1-13 camara-vestibulo1-14 camara-vestibulo1-15 camara-vestibulo1-16 camara-vestibulo1-16-5 camara-vestibulo1-31 camara-vestibulo1-32 camara-vestibulo1-33 camara-vestibulo1-43 camara-vestibulo1-54 camara-vestibulo1-57 camara-vestibulo1-64')"
         onmouseenter="mostrarInfo('Ir a Vestíbulo/Pasillos')"
         onmouseleave="ocultarInfo()">
      <div class="etiqueta-navegacion" style="top:89.03%; left:40.83%;">Vestíbulo / Pasillos</div>
    </div>


    <!-- NAV E4: Cocineta → Área Común y Descanso -->
    <div id="nav-cocineta-a-areacomun" class="nav-escena-4"
         style="display:none; position:absolute; top:0; left:0; width:100%; height:100%; z-index:30; cursor:pointer;
                background-color:rgba(120,120,120,0.45); border: 2px solid rgba(200,200,200,0.7);
                clip-path:polygon(78.65% -0.18%, 69.78% 10.07%, 71.01% 85.03%, 99.55% 87.38%, 99.66% 0.09%);"
         onclick="saltoLateral('assets/imagen-5.webp', 'Área Común y Descanso', 'nav-cocineta-a-areacomun', 'nav-areacomun-a-cocineta nav-areacomun-a-cantera nav-areacomun-a-vestibulo camara-areacomun1-58 camara-areacomun1-59 camara-areacomun1-62')"
         onmouseenter="mostrarInfo('Ir a Área Común y Descanso')"
         onmouseleave="ocultarInfo()">
      <div class="etiqueta-navegacion" style="top:36.48%; left:83.73%;">Área Común</div>
    </div>


    <!-- NAV E4: Cocineta → Vestíbulo/Pasillos -->
    <div id="nav-cocineta-a-vestibulo" class="nav-escena-4"
         style="display:none; position:absolute; top:0; left:0; width:100%; height:100%; z-index:30; cursor:pointer;
                background-color:rgba(120,120,120,0.45); border: 2px solid rgba(200,200,200,0.7);
                clip-path:polygon(29.21% 60.78%, 70.56% 61.33%, 71.24% 84.89%, 99.44% 87.38%, 99.44% 99.58%, 46.74% 99.85%, 46.97% 82.67%, 12.47% 81.84%);"
         onclick="saltoLateral('assets/edificio1.webp', 'Vestíbulo/Pasillos', 'nav-cocineta-a-vestibulo', 'camara-vestibulo1-13 camara-vestibulo1-14 camara-vestibulo1-15 camara-vestibulo1-16 camara-vestibulo1-16-5 camara-vestibulo1-31 camara-vestibulo1-32 camara-vestibulo1-33 camara-vestibulo1-43 camara-vestibulo1-54 camara-vestibulo1-57 camara-vestibulo1-64')"
         onmouseenter="mostrarInfo('Ir a Vestíbulo/Pasillos')"
         onmouseleave="ocultarInfo()">
      <div class="etiqueta-navegacion" style="top:82.29%; left:59.51%;">Vestíbulo / Pasillos</div>
    </div>


    <!-- NAV E4: Lab Cantera → Área Común y Descanso -->
    <div id="nav-cantera-a-areacomun" class="nav-escena-4"
         style="display:none; position:absolute; top:0; left:0; width:100%; height:100%; z-index:30; cursor:pointer;
                background-color:rgba(120,120,120,0.45); border: 2px solid rgba(200,200,200,0.7);
                clip-path:polygon(1.24% 94.03%, 3.37% 52.74%, 37.30% 9.24%, 35.51% 98.33%);"
         onclick="saltoLateral('assets/imagen-5.webp', 'Área Común y Descanso', 'nav-cantera-a-areacomun', 'nav-areacomun-a-cocineta nav-areacomun-a-cantera nav-areacomun-a-vestibulo camara-areacomun1-58 camara-areacomun1-59 camara-areacomun1-62')"
         onmouseenter="mostrarInfo('Ir a Área Común y Descanso')"
         onmouseleave="ocultarInfo()">
      <div class="etiqueta-navegacion" style="top:63.59%; left:19.36%;">Área Común</div>
    </div>


    <!-- NAV E4: Lab Cantera → Lab de Pruebas -->
    <div id="nav-cantera-a-pruebas" class="nav-escena-4"
         style="display:none; position:absolute; top:0; left:0; width:100%; height:100%; z-index:30; cursor:pointer;
                background-color:rgba(120,120,120,0.45); border: 2px solid rgba(200,200,200,0.7);
                clip-path:polygon(99.44% 7.85%, 71.46% 8.96%, 72.02% 64.94%, 73.71% 66.32%, 86.07% 66.74%, 93.37% 75.19%, 92.81% 95.00%, 99.55% 94.31%);"
         onclick="saltoLateral('assets/imagen-7.webp', 'Lab de Pruebas', 'nav-cantera-a-pruebas', 'nav-pruebas-a-cantera nav-pruebas-a-morteros nav-pruebas-a-sanitarios nav-pruebas-a-vestibulo-1 nav-pruebas-a-vestibulo-2 camara-pruebas1-49 camara-pruebas1-51')"
         onmouseenter="mostrarInfo('Ir a Lab de Pruebas')"
         onmouseleave="ocultarInfo()">
      <div class="etiqueta-navegacion" style="top:59.91%; left:86.05%;">Lab de Pruebas</div>
    </div>


    <!-- NAV E4: Lab Cantera → Sanitarios -->
    <div id="nav-cantera-a-sanitarios" class="nav-escena-4"
         style="display:none; position:absolute; top:0; left:0; width:100%; height:100%; z-index:30; cursor:pointer;
                background-color:rgba(120,120,120,0.45); border: 2px solid rgba(200,200,200,0.7);
                clip-path:polygon(72.02% 65.49%, 73.60% 66.60%, 86.07% 66.74%, 93.60% 75.33%, 92.58% 95.14%, 99.55% 95.00%, 99.66% 99.99%, 53.60% 99.99%, 51.46% 96.80%, 72.58% 96.53%);"
         onclick="saltoLateral('assets/imagen-12.webp', 'Sanitarios', 'nav-cantera-a-sanitarios', 'nav-sanitarios-a-cantera nav-sanitarios-a-pruebas nav-sanitarios-a-morteros nav-sanitarios-a-conservprev nav-sanitarios-a-principal nav-sanitarios-a-vestibulo camara-sanitarios1-50 camara-sanitarios1-53')"
         onmouseenter="mostrarInfo('Ir a Sanitarios')"
         onmouseleave="ocultarInfo()">
      <div class="etiqueta-navegacion" style="top:85.76%; left:79.47%;">Sanitarios</div>
    </div>


    <!-- NAV E4: Lab Cantera → Vestíbulo/Pasillos -->
    <div id="nav-cantera-a-vestibulo" class="nav-escena-4"
         style="display:none; position:absolute; top:0; left:0; width:100%; height:100%; z-index:30; cursor:pointer;
                background-color:rgba(120,120,120,0.45); border: 2px solid rgba(200,200,200,0.7);
                clip-path:polygon(1.35% 94.31%, 35.39% 98.19%, 37.53% 96.53%, 51.69% 96.53%, 53.82% 99.85%, 0.22% 99.85%, 0.22% 94.31%);"
         onclick="saltoLateral('assets/edificio1.webp', 'Vestíbulo/Pasillos', 'nav-cantera-a-vestibulo', 'camara-vestibulo1-13 camara-vestibulo1-14 camara-vestibulo1-15 camara-vestibulo1-16 camara-vestibulo1-16-5 camara-vestibulo1-31 camara-vestibulo1-32 camara-vestibulo1-33 camara-vestibulo1-43 camara-vestibulo1-54 camara-vestibulo1-57 camara-vestibulo1-64')"
         onmouseenter="mostrarInfo('Ir a Vestíbulo/Pasillos')"
         onmouseleave="ocultarInfo()">
    </div>


    <!-- NAV E4: Lab de Pruebas → Lab Cantera -->
    <div id="nav-pruebas-a-cantera" class="nav-escena-4"
         style="display:none; position:absolute; top:0; left:0; width:100%; height:100%; z-index:30; cursor:pointer;
                background-color:rgba(120,120,120,0.45); border: 2px solid rgba(200,200,200,0.7);
                clip-path:polygon(0.34% 6.88%, 35.06% 6.74%, 34.04% 94.86%, 0.22% 94.86%);"
         onclick="saltoLateral('assets/imagen-6.webp', 'Lab Cantera', 'nav-pruebas-a-cantera', 'nav-cantera-a-areacomun nav-cantera-a-pruebas nav-cantera-a-sanitarios nav-cantera-a-vestibulo camara-cantera1-55 camara-cantera1-56')"
         onmouseenter="mostrarInfo('Ir a Lab Cantera')"
         onmouseleave="ocultarInfo()">
      <div class="etiqueta-navegacion" style="top:50.84%; left:17.42%;">Lab Cantera</div>
    </div>


    <!-- NAV E4: Lab de Pruebas → Lab Morteros -->
    <div id="nav-pruebas-a-morteros" class="nav-escena-4"
         style="display:none; position:absolute; top:0; left:0; width:100%; height:100%; z-index:30; cursor:pointer;
                background-color:rgba(120,120,120,0.45); border: 2px solid rgba(200,200,200,0.7);
                clip-path:polygon(70.11% 5.91%, 71.01% 48.86%, 70.67% 70.34%, 88.09% 91.40%, 99.66% 91.26%, 99.66% 41.94%);"
         onclick="saltoLateral('assets/imagen-8.webp', 'Lab Morteros', 'nav-pruebas-a-morteros', 'nav-morteros-a-pruebas nav-morteros-a-sanitarios nav-morteros-a-conservprev nav-morteros-a-vestibulo camara-morteros1-44 camara-morteros1-45 camara-morteros1-46 camara-morteros1-47 camara-morteros1-48')"
         onmouseenter="mostrarInfo('Ir a Lab Morteros')"
         onmouseleave="ocultarInfo()">
      <div class="etiqueta-navegacion" style="top:58.29%; left:83.20%;">Lab Morteros</div>
    </div>


    <!-- NAV E4: Lab de Pruebas → Sanitarios -->
    <div id="nav-pruebas-a-sanitarios" class="nav-escena-4"
         style="display:none; position:absolute; top:0; left:0; width:100%; height:100%; z-index:30; cursor:pointer;
                background-color:rgba(120,120,120,0.45); border: 2px solid rgba(200,200,200,0.7);
                clip-path:polygon(13.71% 94.86%, 14.38% 99.85%, 67.87% 99.85%, 70.79% 94.17%, 69.89% 92.79%, 53.37% 93.76%, 53.15% 73.53%, 46.29% 64.66%, 34.61% 64.38%, 34.16% 94.86%);"
         onclick="saltoLateral('assets/imagen-12.webp', 'Sanitarios', 'nav-pruebas-a-sanitarios', 'nav-sanitarios-a-cantera nav-sanitarios-a-pruebas nav-sanitarios-a-morteros nav-sanitarios-a-conservprev nav-sanitarios-a-principal nav-sanitarios-a-vestibulo camara-sanitarios1-50 camara-sanitarios1-53')"
         onmouseenter="mostrarInfo('Ir a Sanitarios')"
         onmouseleave="ocultarInfo()">
      <div class="etiqueta-navegacion" style="top:87.27%; left:45.82%;">Sanitarios</div>
    </div>


    <!-- NAV E4: Lab de Pruebas → Vestíbulo/Pasillos (pieza 1) -->
    <div id="nav-pruebas-a-vestibulo-1" class="nav-escena-4"
         style="display:none; position:absolute; top:0; left:0; width:100%; height:100%; z-index:30; cursor:pointer;
                background-color:rgba(120,120,120,0.45); border: 2px solid rgba(200,200,200,0.7);
                clip-path:polygon(79.21% 81.42%, 87.64% 91.82%, 88.20% 94.73%, 84.49% 99.85%, 68.09% 99.85%, 71.24% 94.31%, 70.22% 92.92%);"
         onclick="saltoLateral('assets/edificio1.webp', 'Vestíbulo/Pasillos', 'nav-pruebas-a-vestibulo-1', 'camara-vestibulo1-13 camara-vestibulo1-14 camara-vestibulo1-15 camara-vestibulo1-16 camara-vestibulo1-16-5 camara-vestibulo1-31 camara-vestibulo1-32 camara-vestibulo1-33 camara-vestibulo1-43 camara-vestibulo1-54 camara-vestibulo1-57 camara-vestibulo1-64')"
         onmouseenter="mostrarInfo('Ir a Vestíbulo/Pasillos')"
         onmouseleave="ocultarInfo()">
    </div>


    <!-- NAV E4: Lab de Pruebas → Vestíbulo/Pasillos (pieza 2) -->
    <div id="nav-pruebas-a-vestibulo-2" class="nav-escena-4"
         style="display:none; position:absolute; top:0; left:0; width:100%; height:100%; z-index:30; cursor:pointer;
                background-color:rgba(120,120,120,0.45); border: 2px solid rgba(200,200,200,0.7);
                clip-path:polygon(79.21% 81.42%, 87.64% 91.82%, 88.20% 94.73%, 84.49% 99.85%, 68.09% 99.85%, 71.24% 94.31%, 70.22% 92.92%);"
         onclick="saltoLateral('assets/edificio1.webp', 'Vestíbulo/Pasillos', 'nav-pruebas-a-vestibulo-2', 'camara-vestibulo1-13 camara-vestibulo1-14 camara-vestibulo1-15 camara-vestibulo1-16 camara-vestibulo1-16-5 camara-vestibulo1-31 camara-vestibulo1-32 camara-vestibulo1-33 camara-vestibulo1-43 camara-vestibulo1-54 camara-vestibulo1-57 camara-vestibulo1-64')"
         onmouseenter="mostrarInfo('Ir a Vestíbulo/Pasillos')"
         onmouseleave="ocultarInfo()">
    </div>


    <!-- NAV E4: Lab Morteros → Lab de Pruebas -->
    <div id="nav-morteros-a-pruebas" class="nav-escena-4"
         style="display:none; position:absolute; top:0; left:0; width:100%; height:100%; z-index:30; cursor:pointer;
                background-color:rgba(120,120,120,0.45); border: 2px solid rgba(200,200,200,0.7);
                clip-path:polygon(0.22% 7.30%, 27.64% 5.63%, 26.85% 43.04%, 27.19% 62.17%, 27.64% 63.55%, 35.17% 72.14%, 27.42% 81.56%, 12.25% 81.70%, 10.79% 82.26%, 9.89% 64.11%, 4.61% 56.90%, 0.22% 56.76%);"
         onclick="saltoLateral('assets/imagen-7.webp', 'Lab de Pruebas', 'nav-morteros-a-pruebas', 'nav-pruebas-a-cantera nav-pruebas-a-morteros nav-pruebas-a-sanitarios nav-pruebas-a-vestibulo-1 nav-pruebas-a-vestibulo-2 camara-pruebas1-49 camara-pruebas1-51')"
         onmouseenter="mostrarInfo('Ir a Lab de Pruebas')"
         onmouseleave="ocultarInfo()">
      <div class="etiqueta-navegacion" style="top:56.43%; left:17.49%;">Lab de Pruebas</div>
    </div>


    <!-- NAV E4: Lab Morteros → Sanitarios -->
    <div id="nav-morteros-a-sanitarios" class="nav-escena-4"
         style="display:none; position:absolute; top:0; left:0; width:100%; height:100%; z-index:30; cursor:pointer;
                background-color:rgba(120,120,120,0.45); border: 2px solid rgba(200,200,200,0.7);
                clip-path:polygon(0.22% 56.76%, 4.27% 56.76%, 9.66% 64.38%, 10.34% 81.98%, 27.19% 81.84%, 14.61% 98.88%, 12.25% 99.99%, 0.22% 99.85%);"
         onclick="saltoLateral('assets/imagen-12.webp', 'Sanitarios', 'nav-morteros-a-sanitarios', 'nav-sanitarios-a-cantera nav-sanitarios-a-pruebas nav-sanitarios-a-morteros nav-sanitarios-a-conservprev nav-sanitarios-a-principal nav-sanitarios-a-vestibulo camara-sanitarios1-50 camara-sanitarios1-53')"
         onmouseenter="mostrarInfo('Ir a Sanitarios')"
         onmouseleave="ocultarInfo()">
      <div class="etiqueta-navegacion" style="top:93%; left:11%;">Sanitarios</div>
    </div>


    <!-- NAV E4: Lab Morteros → Lab Conservación Prev -->
    <div id="nav-morteros-a-conservprev" class="nav-escena-4"
         style="display:none; position:absolute; top:0; left:0; width:100%; height:100%; z-index:30; cursor:pointer;
                background-color:rgba(120,120,120,0.45); border: 2px solid rgba(200,200,200,0.7);
                clip-path:polygon(28.76% 99.85%, 42.70% 83.23%, 43.26% 81.01%, 58.20% 80.18%, 90.34% 82.67%, 91.24% 99.85%);"
         onclick="saltoLateral('assets/imagen-9.webp', 'Lab Conservación Prev', 'nav-morteros-a-conservprev', 'nav-conservprev-a-morteros nav-conservprev-a-acabados nav-conservprev-a-vestibulo camara-conservprev1-39 camara-conservprev1-40 camara-conservprev1-41 camara-conservprev1-42')"
         onmouseenter="mostrarInfo('Ir a Lab Conservación Prev')"
         onmouseleave="ocultarInfo()">
      <div class="etiqueta-navegacion" style="top:87.80%; left:59.08%;">Conservación Prev</div>
    </div>


    <!-- NAV E4: Lab Morteros → Vestíbulo/Pasillos -->
    <div id="nav-morteros-a-vestibulo" class="nav-escena-4"
         style="display:none; position:absolute; top:0; left:0; width:100%; height:100%; z-index:30; cursor:pointer;
                background-color:rgba(120,120,120,0.45); border: 2px solid rgba(200,200,200,0.7);
                clip-path:polygon(35.17% 72.42%, 42.92% 81.01%, 42.47% 83.36%, 29.10% 99.71%, 14.72% 99.85%, 14.61% 98.47%);"
         onclick="saltoLateral('assets/edificio1.webp', 'Vestíbulo/Pasillos', 'nav-morteros-a-vestibulo', 'camara-vestibulo1-13 camara-vestibulo1-14 camara-vestibulo1-15 camara-vestibulo1-16 camara-vestibulo1-16-5 camara-vestibulo1-31 camara-vestibulo1-32 camara-vestibulo1-33 camara-vestibulo1-43 camara-vestibulo1-54 camara-vestibulo1-57 camara-vestibulo1-64')"
         onmouseenter="mostrarInfo('Ir a Vestíbulo/Pasillos')"
         onmouseleave="ocultarInfo()">
      <div class="etiqueta-navegacion" style="top:89.14%; left:29.83%;">Pasillos</div>
    </div>


    <!-- NAV E4: Lab Conservación Prev → Lab Morteros -->
    <div id="nav-conservprev-a-morteros" class="nav-escena-4"
         style="display:none; position:absolute; top:0; left:0; width:100%; height:100%; z-index:30; cursor:pointer;
                background-color:rgba(120,120,120,0.45); border: 2px solid rgba(200,200,200,0.7);
                clip-path:polygon(67.30% -0.32%, 90.22% 26.42%, 46.29% 28.36%, 26.52% 27.80%, 3.71% 0.09%);"
         onclick="saltoLateral('assets/imagen-8.webp', 'Lab Morteros', 'nav-conservprev-a-morteros', 'nav-morteros-a-pruebas nav-morteros-a-sanitarios nav-morteros-a-conservprev nav-morteros-a-vestibulo camara-morteros1-44 camara-morteros1-45 camara-morteros1-46 camara-morteros1-47 camara-morteros1-48')"
         onmouseenter="mostrarInfo('Ir a Lab Morteros')"
         onmouseleave="ocultarInfo()">
      <div class="etiqueta-navegacion" style="top:16.47%; left:46.81%;">Lab Morteros</div>
    </div>


    <!-- NAV E4: Lab Conservación Prev → Lab de Acabados -->
    <div id="nav-conservprev-a-acabados" class="nav-escena-4"
         style="display:none; position:absolute; top:0; left:0; width:100%; height:100%; z-index:30; cursor:pointer;
                background-color:rgba(120,120,120,0.45); border: 2px solid rgba(200,200,200,0.7);
                clip-path:polygon(15.17% 93.06%, 27.19% 77.96%, 46.07% 77.96%, 92.47% 82.12%, 92.36% 99.85%, 20.67% 99.71%);"
         onclick="saltoLateral('assets/imagen-10.webp', 'Lab de Acabados', 'nav-conservprev-a-acabados', 'nav-acabados-a-conservprev nav-acabados-a-principal nav-acabados-a-vestibulo camara-acabados1-34 camara-acabados1-35 camara-acabados1-36 camara-acabados1-37 camara-acabados1-38')"
         onmouseenter="mostrarInfo('Ir a Lab de Acabados')"
         onmouseleave="ocultarInfo()">
      <div class="etiqueta-navegacion" style="top:88.44%; left:48.99%;">Lab de Acabados</div>
    </div>


    <!-- NAV E4: Lab Conservación Prev → Vestíbulo/Pasillos -->
    <div id="nav-conservprev-a-vestibulo" class="nav-escena-4"
         style="display:none; position:absolute; top:0; left:0; width:100%; height:100%; z-index:30; cursor:pointer;
                background-color:rgba(120,120,120,0.45); border: 2px solid rgba(200,200,200,0.7);
                clip-path:polygon(0.45% 27.80%, 13.48% 12.29%, 24.94% 26.97%, 3.93% 53.30%, 25.62% 79.35%, 14.94% 92.92%, 3.93% 79.07%, 0.22% 79.90%);"
         onclick="saltoLateral('assets/edificio1.webp', 'Vestíbulo/Pasillos', 'nav-conservprev-a-vestibulo', 'camara-vestibulo1-13 camara-vestibulo1-14 camara-vestibulo1-15 camara-vestibulo1-16 camara-vestibulo1-16-5 camara-vestibulo1-31 camara-vestibulo1-32 camara-vestibulo1-33 camara-vestibulo1-43 camara-vestibulo1-54 camara-vestibulo1-57 camara-vestibulo1-64')"
         onmouseenter="mostrarInfo('Ir a Vestíbulo/Pasillos')"
         onmouseleave="ocultarInfo()">
      <div class="etiqueta-navegacion" style="top:78%; left:10.94%;">Pasillos</div>
    </div>


    <!-- NAV E4: Lab Acabados → Lab Morteros -->
    <div id="nav-acabados-a-conservprev" class="nav-escena-4"
         style="display:none; position:absolute; top:0; left:0; width:100%; height:100%; z-index:30; cursor:pointer;
                background-color:rgba(120,120,120,0.45); border: 2px solid rgba(200,200,200,0.7);
                clip-path:polygon(77.87% -0.18%, 77.98% 4.80%, 42.92% 9.93%, 27.64% 9.65%, 19.89% 0.09%);"
         onclick="saltoLateral('assets/imagen-9.webp', 'Lab Conservación Prev', 'nav-acabados-a-conservprev', 'nav-conservprev-a-morteros nav-conservprev-a-acabados nav-conservprev-a-vestibulo camara-conservprev1-39 camara-conservprev1-40 camara-conservprev1-41 camara-conservprev1-42')"
         onmouseenter="mostrarInfo('Ir a Lab Conservación Prev')"
         onmouseleave="ocultarInfo()">
      <div class="etiqueta-navegacion" style="top:4.86%; left:49.26%;">Conservación Prev</div>
    </div>


    <!-- NAV E4: Lab Acabados → Lab Principal -->
    <div id="nav-acabados-a-principal" class="nav-escena-4"
         style="display:none; position:absolute; top:0; left:0; width:100%; height:100%; z-index:30; cursor:pointer;
                background-color:rgba(120,120,120,0.45); border: 2px solid rgba(200,200,200,0.7);
                clip-path:polygon(0.45% 5.63%, 9.78% 8.41%, 42.81% 49.42%, 42.13% 91.40%, 9.44% 89.88%, 0.22% 78.79%);"
         onclick="saltoLateral('assets/imagen-11.webp', 'Lab Principal', 'nav-acabados-a-principal', 'nav-principal-a-acabados nav-principal-a-conservprev nav-principal-a-vestibulo camara-principal1-19 camara-principal1-21 camara-principal1-22 camara-principal1-23 camara-principal1-24 camara-principal1-25 camara-principal1-26 camara-principal1-27 camara-principal1-28 camara-principal1-29 camara-principal1-30')"
         onmouseenter="mostrarInfo('Ir a Lab Principal')"
         onmouseleave="ocultarInfo()">
      <div class="etiqueta-navegacion" style="top:53.92%; left:17.47%;">Lab Principal</div>
    </div>


    <!-- NAV E4: Lab Acabados → Vestíbulo/Pasillos -->
    <div id="nav-acabados-a-vestibulo" class="nav-escena-4"
         style="display:none; position:absolute; top:0; left:0; width:100%; height:100%; z-index:30; cursor:pointer;
                background-color:rgba(120,120,120,0.45); border: 2px solid rgba(200,200,200,0.7);
                clip-path:polygon(0.22% 5.63%, 9.66% 8.13%, 18.20% 18.80%, 26.74% 8.68%, 20.00% -0.18%, 0.22% 0.09%);"
         onclick="saltoLateral('assets/edificio1.webp', 'Vestíbulo/Pasillos', 'nav-acabados-a-vestibulo', 'camara-vestibulo1-13 camara-vestibulo1-14 camara-vestibulo1-15 camara-vestibulo1-16 camara-vestibulo1-16-5 camara-vestibulo1-31 camara-vestibulo1-32 camara-vestibulo1-33 camara-vestibulo1-43 camara-vestibulo1-54 camara-vestibulo1-57 camara-vestibulo1-64')"
         onmouseenter="mostrarInfo('Ir a Vestíbulo/Pasillos')"
         onmouseleave="ocultarInfo()">
      <div class="etiqueta-navegacion" style="top:6.86%; left:12.51%;">Pasillos</div>
    </div>


    <!-- NAV E4: Lab Principal → Lab de Acabados -->
    <div id="nav-principal-a-acabados" class="nav-escena-4"
         style="display:none; position:absolute; top:0; left:0; width:100%; height:100%; z-index:30; cursor:pointer;
                background-color:rgba(120,120,120,0.45); border: 2px solid rgba(200,200,200,0.7);
                clip-path:polygon(99.55% 68.40%, 78.65% 92.51%, 76.85% 51.64%, 55.17% 25.31%, 62.25% 16.30%, 76.97% 16.16%, 99.33% 13.67%);"
         onclick="saltoLateral('assets/imagen-10.webp', 'Lab de Acabados', 'nav-principal-a-acabados', 'nav-acabados-a-conservprev nav-acabados-a-principal nav-acabados-a-vestibulo camara-acabados1-34 camara-acabados1-35 camara-acabados1-36 camara-acabados1-37 camara-acabados1-38')"
         onmouseenter="mostrarInfo('Ir a Lab de Acabados')"
         onmouseleave="ocultarInfo()">
      <div class="etiqueta-navegacion" style="top:40.57%; left:78.40%;">Lab de Acabados</div>
    </div>


    <!-- NAV E4: Lab Principal → Lab Conservación Prev -->
    <div id="nav-principal-a-conservprev" class="nav-escena-4"
         style="display:none; position:absolute; top:0; left:0; width:100%; height:100%; z-index:30; cursor:pointer;
                background-color:rgba(120,120,120,0.45); border: 2px solid rgba(200,200,200,0.7);
                clip-path:polygon(50.56% -0.18%, 62.25% 16.03%, 76.18% 15.89%, 99.66% 13.67%, 99.66% 0.23%);"
         onclick="saltoLateral('assets/imagen-9.webp', 'Lab Conservación Prev', 'nav-principal-a-conservprev', 'nav-conservprev-a-morteros nav-conservprev-a-acabados nav-conservprev-a-vestibulo camara-conservprev1-39 camara-conservprev1-40 camara-conservprev1-41 camara-conservprev1-42')"
         onmouseenter="mostrarInfo('Ir a Lab Conservación Prev')"
         onmouseleave="ocultarInfo()">
      <div class="etiqueta-navegacion" style="top:9.13%; left:77.66%;">Conservación Prev</div>
    </div>


    <!-- NAV E4: Lab Principal → Vestíbulo/Pasillos -->
    <div id="nav-principal-a-vestibulo" class="nav-escena-4"
         style="display:none; position:absolute; top:0; left:0; width:100%; height:100%; z-index:30; cursor:pointer;
                background-color:rgba(120,120,120,0.45); border: 2px solid rgba(200,200,200,0.7);
                clip-path:polygon(5.39% -0.18%, 7.42% 3.97%, 21.57% 7.99%, 21.57% 21.43%, 32.36% 35.01%, 32.13% 10.62%, 46.74% 14.92%, 55.06% 24.62%, 62.02% 16.44%, 62.13% 13.53%, 51.24% -0.05%);"
         onclick="saltoLateral('assets/edificio1.webp', 'Vestíbulo/Pasillos', 'nav-principal-a-vestibulo', 'camara-vestibulo1-13 camara-vestibulo1-14 camara-vestibulo1-15 camara-vestibulo1-16 camara-vestibulo1-16-5 camara-vestibulo1-31 camara-vestibulo1-32 camara-vestibulo1-33 camara-vestibulo1-43 camara-vestibulo1-54 camara-vestibulo1-57 camara-vestibulo1-64')"
         onmouseenter="mostrarInfo('Ir a Vestíbulo/Pasillos')"
         onmouseleave="ocultarInfo()">
      <div class="etiqueta-navegacion" style="top:5%; left:36.15%;">Pasillos</div>
    </div>


    <!-- NAV E4: Sanitarios → Lab Cantera -->
    <div id="nav-sanitarios-a-cantera" class="nav-escena-4"
         style="display:none; position:absolute; top:0; left:0; width:100%; height:100%; z-index:30; cursor:pointer;
                background-color:rgba(120,120,120,0.45); border: 2px solid rgba(200,200,200,0.7);
                clip-path:polygon(0.34% 41.10%, 39.55% 40.97%, 40.34% 0.09%, 4.49% -0.05%);"
         onclick="saltoLateral('assets/imagen-6.webp', 'Lab Cantera', 'nav-sanitarios-a-cantera', 'nav-cantera-a-areacomun nav-cantera-a-pruebas nav-cantera-a-sanitarios nav-cantera-a-vestibulo camara-cantera1-55 camara-cantera1-56')"
         onmouseenter="mostrarInfo('Ir a Lab Cantera')"
         onmouseleave="ocultarInfo()">
      <div class="etiqueta-navegacion" style="top:20.53%; left:21.18%;">Lab Cantera</div>
    </div>


    <!-- NAV E4: Sanitarios → Lab de Pruebas -->
    <div id="nav-sanitarios-a-pruebas" class="nav-escena-4"
         style="display:none; position:absolute; top:0; left:0; width:100%; height:100%; z-index:30; cursor:pointer;
                background-color:rgba(120,120,120,0.45); border: 2px solid rgba(200,200,200,0.7);
                clip-path:polygon(40.34% -0.05%, 40.00% 7.71%, 53.71% 7.30%, 61.24% 15.61%, 60.90% 41.38%, 79.55% 41.38%, 88.54% 29.74%, 90.67% 28.22%, 82.25% 16.30%, 80.22% 17.27%, 79.55% 14.78%, 79.89% 0.09%);"
         onclick="saltoLateral('assets/imagen-7.webp', 'Lab de Pruebas', 'nav-sanitarios-a-pruebas', 'nav-pruebas-a-cantera nav-pruebas-a-morteros nav-pruebas-a-sanitarios nav-pruebas-a-vestibulo-1 nav-pruebas-a-vestibulo-2 camara-pruebas1-49 camara-pruebas1-51')"
         onmouseenter="mostrarInfo('Ir a Lab de Pruebas')"
         onmouseleave="ocultarInfo()">
      <div class="etiqueta-navegacion" style="top:18.31%; left:69.74%;">Lab de Pruebas</div>
    </div>


    <!-- NAV E4: Sanitarios → Lab Morteros -->
    <div id="nav-sanitarios-a-morteros" class="nav-escena-4"
         style="display:none; position:absolute; top:0; left:0; width:100%; height:100%; z-index:30; cursor:pointer;
                background-color:rgba(120,120,120,0.45); border: 2px solid rgba(200,200,200,0.7);
                clip-path:polygon(80.00% -0.18%, 79.33% 13.95%, 80.22% 17.13%, 82.13% 16.16%, 99.44% 41.80%, 99.55% -0.05%);"
         onclick="saltoLateral('assets/imagen-8.webp', 'Lab Morteros', 'nav-sanitarios-a-morteros', 'nav-morteros-a-pruebas nav-morteros-a-sanitarios nav-morteros-a-conservprev nav-morteros-a-vestibulo camara-morteros1-44 camara-morteros1-45 camara-morteros1-46 camara-morteros1-47 camara-morteros1-48')"
         onmouseenter="mostrarInfo('Ir a Lab Morteros')"
         onmouseleave="ocultarInfo()">
      <div class="etiqueta-navegacion" style="top:14.80%; left:86.78%;">Lab Morteros</div>
    </div>


    <!-- NAV E4: Sanitarios → Lab Conservación Prev -->
    <div id="nav-sanitarios-a-conservprev" class="nav-escena-4"
         style="display:none; position:absolute; top:0; left:0; width:100%; height:100%; z-index:30; cursor:pointer;
                background-color:rgba(120,120,120,0.45); border: 2px solid rgba(200,200,200,0.7);
                clip-path:polygon(99.55% 41.94%, 98.54% 41.66%, 79.78% 65.21%, 96.85% 86.41%, 99.44% 86.41%);"
         onclick="saltoLateral('assets/imagen-9.webp', 'Lab Conservación Prev', 'nav-sanitarios-a-conservprev', 'nav-conservprev-a-morteros nav-conservprev-a-acabados nav-conservprev-a-vestibulo camara-conservprev1-39 camara-conservprev1-40 camara-conservprev1-41 camara-conservprev1-42')"
         onmouseenter="mostrarInfo('Ir a Lab Conservación Prev')"
         onmouseleave="ocultarInfo()">
      <div class="etiqueta-navegacion" style="top:64.33%; left:94.83%;">Conservación Prev</div>
    </div>


    <!-- NAV E4: Sanitarios → Lab Principal -->
    <div id="nav-sanitarios-a-principal" class="nav-escena-4"
         style="display:none; position:absolute; top:0; left:0; width:100%; height:100%; z-index:30; cursor:pointer;
                background-color:rgba(120,120,120,0.45); border: 2px solid rgba(200,200,200,0.7);
                clip-path:polygon(64.94% 100.05%, 64.71% 94.13%, 78.66% 89.20%, 87.80% 99.63%);"
         onclick="saltoLateral('assets/imagen-11.webp', 'Lab Principal', 'nav-sanitarios-a-principal', 'nav-principal-a-acabados nav-principal-a-conservprev nav-principal-a-vestibulo camara-principal1-19 camara-principal1-21 camara-principal1-22 camara-principal1-23 camara-principal1-24 camara-principal1-25 camara-principal1-26 camara-principal1-27 camara-principal1-28 camara-principal1-29 camara-principal1-30')"
         onmouseenter="mostrarInfo('Ir a Lab Principal')"
         onmouseleave="ocultarInfo()">
    </div>


    <!-- NAV E4: Sanitarios → Vestíbulo/Pasillos -->
    <div id="nav-sanitarios-a-vestibulo" class="nav-escena-4"
         style="display:none; position:absolute; top:0; left:0; width:100%; height:100%; z-index:30; cursor:pointer;
                background-color:rgba(120,120,120,0.45); border: 2px solid rgba(200,200,200,0.7);
                clip-path:polygon(44.59% 81.02%, 39.56% 94.70%, 39.79% 99.63%, 64.94% 99.91%, 65.05% 93.99%, 78.66% 89.20%, 88.83% 99.77%, 97.87% 89.76%, 96.72% 86.38%, 80.14% 65.51%, 98.78% 41.97%, 98.78% 39.43%, 90.78% 28.71%, 88.61% 29.84%, 68.60% 57.62%, 68.60% 75.38%);"
         onclick="saltoLateral('assets/edificio1.webp', 'Vestíbulo/Pasillos', 'nav-sanitarios-a-vestibulo', 'camara-vestibulo1-13 camara-vestibulo1-14 camara-vestibulo1-15 camara-vestibulo1-16 camara-vestibulo1-16-5 camara-vestibulo1-31 camara-vestibulo1-32 camara-vestibulo1-33 camara-vestibulo1-43 camara-vestibulo1-54 camara-vestibulo1-57 camara-vestibulo1-64')"
         onmouseenter="mostrarInfo('Ir a Vestíbulo/Pasillos')"
         onmouseleave="ocultarInfo()">
      <div class="etiqueta-navegacion" style="top:73.30%; left:75.58%;">Pasillos</div>
    </div>`;

/* ═════════ EDIFICIO 2 ═════════ */
const navsEdificio2 = `
    <!-- NAV E4: Exposición Temporal → Exposición Permanente -->
    <div id="nav-temporal-a-permanente" class="nav-escena-4"
         style="display:none; position:absolute; top:0; left:0; width:100%; height:100%; z-index:30; cursor:pointer;
                background-color:rgba(120,120,120,0.45); border: 2px solid rgba(200,200,200,0.7);
                clip-path:polygon(0.45% 73.80%, 16.52% 53.71%, 21.57% 60.50%, 21.12% 86.97%, 53.93% 90.43%, 54.16% 99.71%, 0.45% 99.58%);"
         onclick="saltoLateral('assets/imagen-16.webp', 'Exposición Permanente', 'nav-temporal-a-permanente', 'nav-permanente-a-temporal nav-permanente-a-cafeteria nav-permanente-a-vestibulo2 camara-permanente2-102 camara-permanente2-103 camara-permanente2-104 camara-permanente2-105 camara-permanente2-106 camara-permanente2-107 camara-permanente2-108')"
         onmouseenter="mostrarInfo('Ir a Exposición Permanente')"
         onmouseleave="ocultarInfo()">
      <div class="etiqueta-navegacion" style="top:93%; left:27%;">Exp. Permanente</div>
    </div>


    <!-- NAV E4: Vestíbulo (Ed.2) → Sanitarios Públicos (Ed.2) -->
    <div id="nav-vestibulo2-a-sanitarios2" class="nav-escena-4"
         style="display:none; position:absolute; top:0; left:0; width:100%; height:100%; z-index:30; cursor:pointer;
                background-color:rgba(120,120,120,0.45); border: 2px solid rgba(200,200,200,0.7);
                clip-path:polygon(99.55% 93.62%, 70.34% 94.86%, 77.30% 58.29%, 73.48% 54.41%, 99.55% 54.54%);"
         onclick="saltoLateral('assets/imagen-20.webp', 'Sanitarios Públicos', 'nav-vestibulo2-a-sanitarios2', 'nav-sanitarios2-a-auditorio nav-sanitarios2-a-vestibulo2 camara-sanitarios2-124-1 camara-sanitarios2-125-1')"
         onmouseenter="mostrarInfo('Ir a Sanitarios Públicos')"
         onmouseleave="ocultarInfo()">
      <div class="etiqueta-navegacion" style="top:71.14%; left:84.04%;">Sanitarios</div>
    </div>


    <!-- NAV E4: Vestíbulo (Ed.2) → Auditorio -->
    <div id="nav-vestibulo2-a-auditorio" class="nav-escena-4"
         style="display:none; position:absolute; top:0; left:0; width:100%; height:100%; z-index:30; cursor:pointer;
                background-color:rgba(120,120,120,0.45); border: 2px solid rgba(200,200,200,0.7);
                clip-path:polygon(35.06% 95.83%, 69.21% 95.00%, 79.21% 93.76%, 99.55% 93.76%, 99.55% 99.85%, 35.39% 99.58%);"
         onclick="saltoLateral('assets/imagen-19.webp', 'Auditorio', 'nav-vestibulo2-a-auditorio', 'nav-auditorio-a-cafeteria nav-auditorio-a-cocineta2 nav-auditorio-a-sanitarios2 nav-auditorio-a-vestibulo2 camara-auditorio2-85 camara-auditorio2-86 camara-auditorio2-87 camara-auditorio2-89 camara-auditorio2-90 camara-auditorio2-91')"
         onmouseenter="mostrarInfo('Ir a Auditorio')"
         onmouseleave="ocultarInfo()">
    </div>


    <!-- NAV E4: Vestíbulo (Ed.2) → Cafetería -->
    <div id="nav-vestibulo2-a-cafeteria" class="nav-escena-4"
         style="display:none; position:absolute; top:0; left:0; width:100%; height:100%; z-index:30; cursor:pointer;
                background-color:rgba(120,120,120,0.45); border: 2px solid rgba(200,200,200,0.7);
                clip-path:polygon(0.22% 53.99%, 35.06% 54.41%, 35.28% 99.85%, 0.22% 99.85%);"
         onclick="saltoLateral('assets/imagen-17.webp', 'Cafetería', 'nav-vestibulo2-a-cafeteria', 'nav-cafeteria-a-permanente nav-cafeteria-a-vestibulo2 nav-cafeteria-a-cocineta2 nav-cafeteria-a-auditorio camara-cafeteria2-92 camara-cafeteria2-93 camara-cafeteria2-94 camara-cafeteria2-95 camara-cafeteria2-96 camara-cafeteria2-99')"
         onmouseenter="mostrarInfo('Ir a Cafetería')"
         onmouseleave="ocultarInfo()">
      <div class="etiqueta-navegacion" style="top:77.03%; left:17.70%;">Cafetería</div>
    </div>


    <!-- NAV E4: Vestíbulo (Ed.2) → Exposición Permanente -->
    <div id="nav-vestibulo2-a-permanente" class="nav-escena-4"
         style="display:none; position:absolute; top:0; left:0; width:100%; height:100%; z-index:30; cursor:pointer;
                background-color:rgba(120,120,120,0.45); border: 2px solid rgba(200,200,200,0.7);
                clip-path:polygon(4.61% -0.18%, 3.26% 13.67%, 35.28% 9.93%, 35.17% 54.41%, 0.22% 54.13%, 0.22% -0.05%);"
         onclick="saltoLateral('assets/imagen-16.webp', 'Exposición Permanente', 'nav-vestibulo2-a-permanente', 'nav-permanente-a-temporal nav-permanente-a-cafeteria nav-permanente-a-vestibulo2 camara-permanente2-102 camara-permanente2-103 camara-permanente2-104 camara-permanente2-105 camara-permanente2-106 camara-permanente2-107 camara-permanente2-108')"
         onmouseenter="mostrarInfo('Ir a Exposición Permanente')"
         onmouseleave="ocultarInfo()">
      <div class="etiqueta-navegacion" style="top:35%; left:13.13%;">Exp. Permanente</div>
    </div>


    <!-- NAV E4: Vestíbulo (Ed.2) → Exposición Temporal -->
    <div id="nav-vestibulo2-a-temporal" class="nav-escena-4"
         style="display:none; position:absolute; top:0; left:0; width:100%; height:100%; z-index:30; cursor:pointer;
                background-color:rgba(120,120,120,0.45); border: 2px solid rgba(200,200,200,0.7);
                clip-path:polygon(44.49% 0.09%, 35.39% 10.07%, 3.93% 13.53%, 4.61% 0.09%);"
         onclick="saltoLateral('assets/imagen-15.webp', 'Exposición Temporal', 'nav-vestibulo2-a-temporal nav-vestibulo2-a-permanente nav-vestibulo2-a-cafeteria nav-vestibulo2-a-auditorio nav-vestibulo2-a-sanitarios2', 'nav-temporal-a-permanente nav-temporal-a-mediateca nav-temporal-a-vestibulo2 camara-temporal2-109 camara-temporal2-110 camara-temporal2-111 camara-temporal2-112')"
         onmouseenter="mostrarInfo('Ir a Exposición Temporal')"
         onmouseleave="ocultarInfo()">
      <div class="etiqueta-navegacion" style="top:5.95%; left:22.11%;">Exp. Temporal</div>
    </div>


    <!-- NAV E4: Sanitarios Públicos (Ed.2) → Vestíbulo (Ed.2) -->
    <div id="nav-sanitarios2-a-vestibulo2" class="nav-escena-4"
         style="display:none; position:absolute; top:0; left:0; width:100%; height:100%; z-index:30; cursor:pointer;
                background-color:rgba(120,120,120,0.45); border: 2px solid rgba(200,200,200,0.7);
                clip-path:polygon(0.34% 74.36%, 20.45% 73.94%, 9.89% 26.14%, 12.36% 18.80%, 0.22% 1.89%);"
         onclick="saltoLateral('assets/imagen-21.webp', 'Vestíbulo', 'nav-sanitarios2-a-vestibulo2', 'nav-vestibulo2-a-temporal nav-vestibulo2-a-permanente nav-vestibulo2-a-cafeteria nav-vestibulo2-a-auditorio nav-vestibulo2-a-sanitarios2 camara-vestibulo2-82 camara-vestibulo2-83 camara-vestibulo2-84 camara-vestibulo2-100 camara-vestibulo2-113 camara-vestibulo2-121 camara-vestibulo2-122')"
         onmouseenter="mostrarInfo('Ir a Vestíbulo')"
         onmouseleave="ocultarInfo()">
      <div class="etiqueta-navegacion" style="top:55%; left:8.65%;">Vestíbulo</div>
    </div>


    <!-- NAV E4: Sanitarios Públicos (Ed.2) → Auditorio -->
    <div id="nav-sanitarios2-a-auditorio" class="nav-escena-4"
         style="display:none; position:absolute; top:0; left:0; width:100%; height:100%; z-index:30; cursor:pointer;
                background-color:rgba(120,120,120,0.45); border: 2px solid rgba(200,200,200,0.7);
                clip-path:polygon(0.22% 74.50%, 56.85% 73.94%, 92.58% 75.05%, 94.04% 99.85%, 0.22% 99.85%);"
         onclick="saltoLateral('assets/imagen-19.webp', 'Auditorio', 'nav-sanitarios2-a-auditorio', 'nav-auditorio-a-cafeteria nav-auditorio-a-cocineta2 nav-auditorio-a-sanitarios2 nav-auditorio-a-vestibulo2 camara-auditorio2-85 camara-auditorio2-86 camara-auditorio2-87 camara-auditorio2-89 camara-auditorio2-90 camara-auditorio2-91')"
         onmouseenter="mostrarInfo('Ir a Auditorio')"
         onmouseleave="ocultarInfo()">
      <div class="etiqueta-navegacion" style="top:84.64%; left:48.78%;">Auditorio</div>
    </div>


    <!-- NAV E4: Auditorio → Vestíbulo (Ed.2) -->
    <div id="nav-auditorio-a-vestibulo2" class="nav-escena-4"
         style="display:none; position:absolute; top:0; left:0; width:100%; height:100%; z-index:30; cursor:pointer;
                background-color:rgba(120,120,120,0.45); border: 2px solid rgba(200,200,200,0.7);
                clip-path:polygon(7.64% -0.18%, 8.76% 16.86%, 36.85% 17.27%, 35.39% 0.09%);"
         onclick="saltoLateral('assets/imagen-21.webp', 'Vestíbulo', 'nav-auditorio-a-vestibulo2', 'nav-vestibulo2-a-temporal nav-vestibulo2-a-permanente nav-vestibulo2-a-cafeteria nav-vestibulo2-a-auditorio nav-vestibulo2-a-sanitarios2 camara-vestibulo2-82 camara-vestibulo2-83 camara-vestibulo2-84 camara-vestibulo2-100 camara-vestibulo2-113 camara-vestibulo2-121 camara-vestibulo2-122')"
         onmouseenter="mostrarInfo('Ir a Vestíbulo')"
         onmouseleave="ocultarInfo()">
      <div class="etiqueta-navegacion" style="top:8.51%; left:22.16%;">Vestíbulo</div>
    </div>


    <!-- NAV E4: Auditorio → Sanitarios Públicos (Ed.2) -->
    <div id="nav-auditorio-a-sanitarios2" class="nav-escena-4"
         style="display:none; position:absolute; top:0; left:0; width:100%; height:100%; z-index:30; cursor:pointer;
                background-color:rgba(120,120,120,0.45); border: 2px solid rgba(200,200,200,0.7);
                clip-path:polygon(35.51% 0.09%, 36.97% 17.55%, 92.81% 17.27%, 79.66% -0.05%);"
         onclick="saltoLateral('assets/imagen-20.webp', 'Sanitarios Públicos', 'nav-auditorio-a-sanitarios2', 'nav-sanitarios2-a-auditorio nav-sanitarios2-a-vestibulo2 camara-sanitarios2-124-1 camara-sanitarios2-125-1')"
         onmouseenter="mostrarInfo('Ir a Sanitarios Públicos')"
         onmouseleave="ocultarInfo()">
      <div class="etiqueta-navegacion" style="top:8.72%; left:61.24%;">Sanitarios Públicos</div>
    </div>


    <!-- NAV E4: Auditorio → Cocineta (Ed.2) -->
    <div id="nav-auditorio-a-cocineta2" class="nav-escena-4"
         style="display:none; position:absolute; top:0; left:0; width:100%; height:100%; z-index:30; cursor:pointer;
                background-color:rgba(120,120,120,0.45); border: 2px solid rgba(200,200,200,0.7);
                clip-path:polygon(0.22% 51.36%, 10.00% 51.08%, 7.08% 87.24%, 0.22% 76.85%);"
         onclick="saltoLateral('assets/imagen-18.webp', 'Cocineta', 'nav-auditorio-a-cocineta2', 'nav-cocineta2-a-cafeteria nav-cocineta2-a-auditorio camara-cocineta2-97 camara-cocineta2-98')"
         onmouseenter="mostrarInfo('Ir a Cocineta')"
         onmouseleave="ocultarInfo()">
      <div class="etiqueta-navegacion" style="top:66.63%; left:4.38%;">Cocineta</div>
    </div>


    <!-- NAV E4: Auditorio → Cafetería -->
    <div id="nav-auditorio-a-cafeteria" class="nav-escena-4"
         style="display:none; position:absolute; top:0; left:0; width:100%; height:100%; z-index:30; cursor:pointer;
                background-color:rgba(120,120,120,0.45); border: 2px solid rgba(200,200,200,0.7);
                clip-path:polygon(0.34% 51.64%, 10.11% 51.08%, 7.87% 0.23%, 0.22% -0.05%);"
         onclick="saltoLateral('assets/imagen-17.webp', 'Cafetería', 'nav-auditorio-a-cafeteria nav-auditorio-a-cocineta2 nav-auditorio-a-sanitarios2 nav-auditorio-a-vestibulo2', 'nav-cafeteria-a-permanente nav-cafeteria-a-vestibulo2 nav-cafeteria-a-cocineta2 nav-cafeteria-a-auditorio camara-cafeteria2-92 camara-cafeteria2-93 camara-cafeteria2-94 camara-cafeteria2-95 camara-cafeteria2-96 camara-cafeteria2-99')"
         onmouseenter="mostrarInfo('Ir a Cafetería')"
         onmouseleave="ocultarInfo()">
      <div class="etiqueta-navegacion" style="top:25.73%; left:4.64%;">Cafetería</div>
    </div>


    <!-- NAV E4: Cocineta (Ed.2) → Auditorio -->
    <div id="nav-cocineta2-a-auditorio" class="nav-escena-4"
         style="display:none; position:absolute; top:0; left:0; width:100%; height:100%; z-index:30; cursor:pointer;
                background-color:rgba(120,120,120,0.45); border: 2px solid rgba(200,200,200,0.7);
                clip-path:polygon(67.98% -0.05%, 67.64% 19.49%, 70.11% 90.57%, 99.55% 92.09%, 99.55% 0.09%);"
         onclick="saltoLateral('assets/imagen-19.webp', 'Auditorio', 'nav-cocineta2-a-auditorio', 'nav-auditorio-a-cafeteria nav-auditorio-a-cocineta2 nav-auditorio-a-sanitarios2 nav-auditorio-a-vestibulo2 camara-auditorio2-85 camara-auditorio2-86 camara-auditorio2-87 camara-auditorio2-89 camara-auditorio2-90 camara-auditorio2-91')"
         onmouseenter="mostrarInfo('Ir a Auditorio')"
         onmouseleave="ocultarInfo()">
      <div class="etiqueta-navegacion" style="top:40.44%; left:80.97%;">Auditorio</div>
    </div>


    <!-- NAV E4: Cocineta (Ed.2) → Cafetería -->
    <div id="nav-cocineta2-a-cafeteria" class="nav-escena-4"
         style="display:none; position:absolute; top:0; left:0; width:100%; height:100%; z-index:30; cursor:pointer;
                background-color:rgba(120,120,120,0.45); border: 2px solid rgba(200,200,200,0.7);
                clip-path:polygon(0.22% 2.59%, 10.90% 16.72%, 67.64% 19.77%, 67.87% -0.05%, 0.22% -0.46%);"
         onclick="saltoLateral('assets/imagen-17.webp', 'Cafetería', 'nav-cocineta2-a-cafeteria', 'nav-cafeteria-a-permanente nav-cafeteria-a-vestibulo2 nav-cafeteria-a-cocineta2 nav-cafeteria-a-auditorio camara-cafeteria2-92 camara-cafeteria2-93 camara-cafeteria2-94 camara-cafeteria2-95 camara-cafeteria2-96 camara-cafeteria2-99')"
         onmouseenter="mostrarInfo('Ir a Cafetería')"
         onmouseleave="ocultarInfo()">
      <div class="etiqueta-navegacion" style="top:7.71%; left:29.37%;">Cafetería</div>
    </div>


    <!-- NAV E4: Cafetería → Auditorio -->
    <div id="nav-cafeteria-a-auditorio" class="nav-escena-4"
         style="display:none; position:absolute; top:0; left:0; width:100%; height:100%; z-index:30; cursor:pointer;
                background-color:rgba(120,120,120,0.45); border: 2px solid rgba(200,200,200,0.7);
                clip-path:polygon(99.66% 52.47%, 78.20% 52.19%, 76.85% 92.09%, 77.75% 99.58%, 99.66% 99.85%);"
         onclick="saltoLateral('assets/imagen-19.webp', 'Auditorio', 'nav-cafeteria-a-auditorio', 'nav-auditorio-a-cafeteria nav-auditorio-a-cocineta2 nav-auditorio-a-sanitarios2 nav-auditorio-a-vestibulo2 camara-auditorio2-85 camara-auditorio2-86 camara-auditorio2-87 camara-auditorio2-89 camara-auditorio2-90 camara-auditorio2-91')"
         onmouseenter="mostrarInfo('Ir a Auditorio')"
         onmouseleave="ocultarInfo()">
      <div class="etiqueta-navegacion" style="top:79.24%; left:86.42%;">Auditorio</div>
    </div>


    <!-- NAV E4: Cafetería → Cocineta (Ed.2) -->
    <div id="nav-cafeteria-a-cocineta2" class="nav-escena-4"
         style="display:none; position:absolute; top:0; left:0; width:100%; height:100%; z-index:30; cursor:pointer;
                background-color:rgba(120,120,120,0.45); border: 2px solid rgba(200,200,200,0.7);
                clip-path:polygon(45.84% 93.76%, 76.85% 91.68%, 77.75% 99.99%, 50.45% 100.27%);"
         onclick="saltoLateral('assets/imagen-18.webp', 'Cocineta', 'nav-cafeteria-a-cocineta2', 'nav-cocineta2-a-cafeteria nav-cocineta2-a-auditorio camara-cocineta2-97 camara-cocineta2-98')"
         onmouseenter="mostrarInfo('Ir a Cocineta')"
         onmouseleave="ocultarInfo()">
      <div class="etiqueta-navegacion" style="top:96.43%; left:62.72%;">Cocineta</div>
    </div>


    <!-- NAV E4: Cafetería → Vestíbulo (Ed.2) -->
    <div id="nav-cafeteria-a-vestibulo2" class="nav-escena-4"
         style="display:none; position:absolute; top:0; left:0; width:100%; height:100%; z-index:30; cursor:pointer;
                background-color:rgba(120,120,120,0.45); border: 2px solid rgba(200,200,200,0.7);
                clip-path:polygon(79.10% -0.05%, 79.21% 10.07%, 77.64% 50.39%, 78.65% 52.19%, 99.66% 52.19%, 99.55% -0.05%);"
         onclick="saltoLateral('assets/imagen-21.webp', 'Vestíbulo', 'nav-cafeteria-a-vestibulo2', 'nav-vestibulo2-a-temporal nav-vestibulo2-a-permanente nav-vestibulo2-a-cafeteria nav-vestibulo2-a-auditorio nav-vestibulo2-a-sanitarios2 camara-vestibulo2-82 camara-vestibulo2-83 camara-vestibulo2-84 camara-vestibulo2-100 camara-vestibulo2-113 camara-vestibulo2-121 camara-vestibulo2-122')"
         onmouseenter="mostrarInfo('Ir a Vestíbulo')"
         onmouseleave="ocultarInfo()">
      <div class="etiqueta-navegacion" style="top:27.46%; left:85.64%;">Vestíbulo</div>
    </div>


    <!-- NAV E4: Cafetería → Exposición Permanente -->
    <div id="nav-cafeteria-a-permanente" class="nav-escena-4"
         style="display:none; position:absolute; top:0; left:0; width:100%; height:100%; z-index:30; cursor:pointer;
                background-color:rgba(120,120,120,0.45); border: 2px solid rgba(200,200,200,0.7);
                clip-path:polygon(13.03% -0.05%, 12.70% 12.56%, 79.33% 10.21%, 79.10% 0.09%);"
         onclick="saltoLateral('assets/imagen-16.webp', 'Exposición Permanente', 'nav-cafeteria-a-permanente', 'nav-permanente-a-temporal nav-permanente-a-cafeteria nav-permanente-a-vestibulo2 camara-permanente2-102 camara-permanente2-103 camara-permanente2-104 camara-permanente2-105 camara-permanente2-106 camara-permanente2-107 camara-permanente2-108')"
         onmouseenter="mostrarInfo('Ir a Exposición Permanente')"
         onmouseleave="ocultarInfo()">
      <div class="etiqueta-navegacion" style="top:5.70%; left:46.04%;">Exp. Permanente</div>
    </div>


    <!-- NAV E4: Exposición Permanente → Vestíbulo (Ed.2) -->
    <div id="nav-permanente-a-vestibulo2" class="nav-escena-4"
         style="display:none; position:absolute; top:0; left:0; width:100%; height:100%; z-index:30; cursor:pointer;
                background-color:rgba(120,120,120,0.45); border: 2px solid rgba(200,200,200,0.7);
                clip-path:polygon(92.92% 99.99%, 93.71% 89.05%, 93.71% 38.89%, 99.66% 29.60%, 99.55% 99.85%);"
         onclick="saltoLateral('assets/imagen-21.webp', 'Vestíbulo', 'nav-permanente-a-vestibulo2', 'nav-vestibulo2-a-temporal nav-vestibulo2-a-permanente nav-vestibulo2-a-cafeteria nav-vestibulo2-a-auditorio nav-vestibulo2-a-sanitarios2 camara-vestibulo2-82 camara-vestibulo2-83 camara-vestibulo2-84 camara-vestibulo2-100 camara-vestibulo2-113 camara-vestibulo2-121 camara-vestibulo2-122')"
         onmouseenter="mostrarInfo('Ir a Vestíbulo')"
         onmouseleave="ocultarInfo()">
    </div>


    <!-- NAV E4: Exposición Permanente → Cafetería -->
    <div id="nav-permanente-a-cafeteria" class="nav-escena-4"
         style="display:none; position:absolute; top:0; left:0; width:100%; height:100%; z-index:30; cursor:pointer;
                background-color:rgba(120,120,120,0.45); border: 2px solid rgba(200,200,200,0.7);
                clip-path:polygon(15.17% 99.71%, 15.28% 85.44%, 93.37% 89.32%, 92.47% 99.85%);"
         onclick="saltoLateral('assets/imagen-17.webp', 'Cafetería', 'nav-permanente-a-cafeteria', 'nav-cafeteria-a-permanente nav-cafeteria-a-vestibulo2 nav-cafeteria-a-cocineta2 nav-cafeteria-a-auditorio camara-cafeteria2-92 camara-cafeteria2-93 camara-cafeteria2-94 camara-cafeteria2-95 camara-cafeteria2-96 camara-cafeteria2-99')"
         onmouseenter="mostrarInfo('Ir a Cafetería')"
         onmouseleave="ocultarInfo()">
      <div class="etiqueta-navegacion" style="top:93.58%; left:54.07%;">Cafetería</div>
    </div>


    <!-- NAV E4: Exposición Permanente → Exposición Temporal -->
    <div id="nav-permanente-a-temporal" class="nav-escena-4"
         style="display:none; position:absolute; top:0; left:0; width:100%; height:100%; z-index:30; cursor:pointer;
                background-color:rgba(120,120,120,0.45); border: 2px solid rgba(200,200,200,0.7);
                clip-path:polygon(49.21% -0.18%, 46.29% 3.42%, 52.13% 10.76%, 52.58% 38.89%, 93.71% 38.89%, 99.55% 30.57%, 99.55% -0.05%);"
         onclick="saltoLateral('assets/imagen-15.webp', 'Exposición Temporal', 'nav-permanente-a-temporal', 'nav-temporal-a-permanente nav-temporal-a-mediateca nav-temporal-a-vestibulo2 camara-temporal2-109 camara-temporal2-110 camara-temporal2-111 camara-temporal2-112')"
         onmouseenter="mostrarInfo('Ir a Exposición Temporal')"
         onmouseleave="ocultarInfo()">
      <div class="etiqueta-navegacion" style="top:17.47%; left:70.43%;">Exp. Temporal</div>
    </div>


    <!-- NAV E4: Exposición Temporal → Vestíbulo (Ed.2) -->
    <div id="nav-temporal-a-vestibulo2" class="nav-escena-4"
         style="display:none; position:absolute; top:0; left:0; width:100%; height:100%; z-index:30; cursor:pointer;
                background-color:rgba(120,120,120,0.45); border: 2px solid rgba(200,200,200,0.7);
                clip-path:polygon(97.08% 47.76%, 88.09% 47.89%, 54.04% 90.43%, 53.93% 99.99%, 67.30% 99.85%, 71.46% 88.21%, 86.52% 67.57%, 97.53% 59.12%);"
         onclick="saltoLateral('assets/imagen-21.webp', 'Vestíbulo', 'nav-temporal-a-vestibulo2', 'nav-vestibulo2-a-temporal nav-vestibulo2-a-permanente nav-vestibulo2-a-cafeteria nav-vestibulo2-a-auditorio nav-vestibulo2-a-sanitarios2 camara-vestibulo2-82 camara-vestibulo2-83 camara-vestibulo2-84 camara-vestibulo2-100 camara-vestibulo2-113 camara-vestibulo2-121 camara-vestibulo2-122')"
         onmouseenter="mostrarInfo('Ir a Vestíbulo')"
         onmouseleave="ocultarInfo()">
      <div class="etiqueta-navegacion" style="top:72%; left:76%;">Vestíbulo</div>
    </div>


    <!-- NAV E4: Exposición Temporal → Mediateca -->
    <div id="nav-temporal-a-mediateca" class="nav-escena-4"
         style="display:none; position:absolute; top:0; left:0; width:100%; height:100%; z-index:30; cursor:pointer;
                background-color:rgba(120,120,120,0.45); border: 2px solid rgba(200,200,200,0.7);
                clip-path:polygon(53.71% 7.85%, 89.33% 46.92%, 99.66% 47.20%, 99.55% 10.48%);"
         onclick="saltoLateral('assets/imagen-14.webp', 'Mediateca', 'nav-temporal-a-mediateca', 'nav-mediateca-a-almacen2 nav-mediateca-a-temporal nav-mediateca-a-vestibulo2 camara-mediateca2-114 camara-mediateca2-115 camara-mediateca2-116 camara-mediateca2-117 camara-mediateca2-118')"
         onmouseenter="mostrarInfo('Ir a Mediateca')"
         onmouseleave="ocultarInfo()">
      <div class="etiqueta-navegacion" style="top:28.11%; left:85.56%;">Mediateca</div>
    </div>


    <!-- NAV E4: Mediateca → Vestíbulo (Ed.2) -->
    <div id="nav-mediateca-a-vestibulo2" class="nav-escena-4"
         style="display:none; position:absolute; top:0; left:0; width:100%; height:100%; z-index:30; cursor:pointer;
                background-color:rgba(120,120,120,0.45); border: 2px solid rgba(200,200,200,0.7);
                clip-path:polygon(23.82% 99.85%, 44.49% 74.08%, 55.84% 73.80%, 55.96% 89.88%, 43.26% 99.71%);"
         onclick="saltoLateral('assets/imagen-21.webp', 'Vestíbulo', 'nav-mediateca-a-vestibulo2', 'nav-vestibulo2-a-temporal nav-vestibulo2-a-permanente nav-vestibulo2-a-cafeteria nav-vestibulo2-a-auditorio nav-vestibulo2-a-sanitarios2 camara-vestibulo2-82 camara-vestibulo2-83 camara-vestibulo2-84 camara-vestibulo2-100 camara-vestibulo2-113 camara-vestibulo2-121 camara-vestibulo2-122')"
         onmouseenter="mostrarInfo('Ir a Vestíbulo')"
         onmouseleave="ocultarInfo()">
      <div class="etiqueta-navegacion" style="top:87.46%; left:44.67%;">Vestíbulo</div>
    </div>


    <!-- NAV E4: Mediateca → Exposición Temporal -->
    <div id="nav-mediateca-a-temporal" class="nav-escena-4"
         style="display:none; position:absolute; top:0; left:0; width:100%; height:100%; z-index:30; cursor:pointer;
                background-color:rgba(120,120,120,0.45); border: 2px solid rgba(200,200,200,0.7);
                clip-path:polygon(0.22% 31.41%, 5.62% 22.82%, 44.72% 73.53%, 23.93% 99.99%, 0.45% 99.99%);"
         onclick="saltoLateral('assets/imagen-15.webp', 'Exposición Temporal', 'nav-mediateca-a-temporal', 'nav-temporal-a-permanente nav-temporal-a-mediateca nav-temporal-a-vestibulo2 camara-temporal2-109 camara-temporal2-110 camara-temporal2-111 camara-temporal2-112')"
         onmouseenter="mostrarInfo('Ir a Exposición Temporal')"
         onmouseleave="ocultarInfo()">
      <div class="etiqueta-navegacion" style="top:65.55%; left:14.99%;">Exp. Temporal</div>
    </div>


    <!-- NAV E4: Mediateca → Almacén/Mantenimiento (Ed.2) -->
    <div id="nav-mediateca-a-almacen2" class="nav-escena-4"
         style="display:none; position:absolute; top:0; left:0; width:100%; height:100%; z-index:30; cursor:pointer;
                background-color:rgba(120,120,120,0.45); border: 2px solid rgba(200,200,200,0.7);
                clip-path:polygon(81.57% 25.45%, 84.72% 70.89%, 99.66% 70.76%, 99.55% 45.54%);"
         onclick="saltoLateral('assets/imagen-13.webp', 'Almacén / Mantenimiento', 'nav-mediateca-a-almacen2', 'nav-almacen2-a-mediateca camara-almacen2-120')"
         onmouseenter="mostrarInfo('Ir a Almacén / Mantenimiento')"
         onmouseleave="ocultarInfo()">
      <div class="etiqueta-navegacion" style="top:53.16%; left:91.38%;">Almacén</div>
    </div>


    <!-- NAV E4: Almacén Mantenimiento (Ed.2) → Mediateca -->
    <div id="nav-almacen2-a-mediateca" class="nav-escena-4"
         style="display:none; position:absolute; top:0; left:0; width:100%; height:100%; z-index:30; cursor:pointer;
                background-color:rgba(120,120,120,0.45); border: 2px solid rgba(200,200,200,0.7);
                clip-path:polygon(0.22% 12.01%, 29.33% 13.39%, 26.74% 75.33%, 0.45% 76.44%);"
         onclick="saltoLateral('assets/imagen-14.webp', 'Mediateca', 'nav-almacen2-a-mediateca', 'nav-mediateca-a-almacen2 nav-mediateca-a-temporal nav-mediateca-a-vestibulo2 camara-mediateca2-114 camara-mediateca2-115 camara-mediateca2-116 camara-mediateca2-117 camara-mediateca2-118')"
         onmouseenter="mostrarInfo('Ir a Mediateca')"
         onmouseleave="ocultarInfo()">
      <div class="etiqueta-navegacion" style="top:44.29%; left:14.19%;">Mediateca</div>
    </div>


  <!-- Flechas de salto lateral — Edificio 2 -->
  <div id="flecha-temporal-a-permanente" class="flecha-salto-planta"
       style="display:none; bottom:12%; left:38%;"
       onclick="saltoLateral('assets/imagen-16.webp', 'Exposición Permanente', 'flecha-temporal-a-permanente', 'flecha-permanente-a-temporal camara-permanente2-102 camara-permanente2-103 camara-permanente2-104 camara-permanente2-105 camara-permanente2-106 camara-permanente2-107 camara-permanente2-108')">
    ↓
    <span class="tooltip-salto" style="bottom:48px; left:50%; transform:translateX(-50%);">Exposición Permanente</span>
  </div>

  <div id="flecha-permanente-a-temporal" class="flecha-salto-planta"
       style="display:none; top:12%; left:38%;"
       onclick="saltoLateral('assets/imagen-15.webp', 'Exposición Temporal', 'flecha-permanente-a-temporal', 'flecha-temporal-a-permanente')">
    ↑
    <span class="tooltip-salto" style="top:48px; left:50%; transform:translateX(-50%);">Exposición Temporal</span>
  </div>`;

/* ═════════ EDIFICIO 3 ═════════ */
const navsEdificio3 = `
    <!-- NAV E4: Oficinas → Sanitarios Oficinas (Ed.3) -->
    <div id="nav-oficinas-a-sanitariosof" class="nav-escena-4"
         style="display:none; position:absolute; top:0; left:0; width:100%; height:100%; z-index:30; cursor:pointer;
                background-color:rgba(120,120,120,0.45); border: 2px solid rgba(200,200,200,0.7);
                clip-path:polygon(27.90% 1.85%, 27.78% 9.65%, 75.69% 10.85%, 60.71% 1.65%);"
         onclick="saltoLateral('assets/imagen-22.webp', 'Sanitarios Oficinas', 'nav-oficinas-a-sanitariosof', 'nav-sanitariosof-a-oficinas')"
         onmouseenter="mostrarInfo('Ir a Sanitarios Oficinas')"
         onmouseleave="ocultarInfo()">
      <div class="etiqueta-navegacion" style="top:6.2%; left:52%;">Sanitarios Oficinas</div>
    </div>


    <!-- NAV E4: Oficinas → Área Común (Ed.3) -->
    <div id="nav-oficinas-a-areacomun" class="nav-escena-4"
         style="display:none; position:absolute; top:0; left:0; width:100%; height:100%; z-index:30; cursor:pointer;
                background-color:rgba(120,120,120,0.45); border: 2px solid rgba(200,200,200,0.7);
                clip-path:polygon(0.23% 48.80%, 4.00% 50.20%, 19.09% 62.66%, 28.70% 62.66%, 30.53% 99.56%, 0.23% 99.47%);"
         onclick="saltoLateral('assets/imagen-25.webp', 'Área Común', 'nav-oficinas-a-areacomun nav-oficinas-a-sanitariosof', 'nav-areacomun3-a-vestibulo3 nav-areacomun3-a-oficinas nav-areacomun3-a-taller1 nav-areacomun3-a-almacen3 camara-areacomun3-128 camara-areacomun3-129 camara-areacomun3-130')"
         onmouseenter="mostrarInfo('Ir a Área Común')"
         onmouseleave="ocultarInfo()">
      <div class="etiqueta-navegacion" style="top:72%; left:12%;">Área Común</div>
    </div>


    <!-- NAV E4: Área Común (Ed.3) → Vestíbulo -->
    <div id="nav-areacomun3-a-vestibulo3" class="nav-escena-4"
         style="display:none; position:absolute; top:0; left:0; width:100%; height:100%; z-index:30; cursor:pointer;
                background-color:rgba(120,120,120,0.45); border: 2px solid rgba(200,200,200,0.7);
                clip-path:polygon(18.43% 2.03%, 17.64% 11.45%, 24.94% 11.32%, 27.42% 14.78%, 42.92% 14.78%, 43.93% 16.72%, 58.43% 35.01%, 70.45% 33.48%, 75.73% 30.71%, 67.98% 21.15%, 50.34% -0.05%, 24.04% -0.05%);"
         onclick="saltoLateral('assets/edificio3.webp', 'Vestíbulo', 'nav-areacomun3-a-vestibulo3 nav-areacomun3-a-oficinas nav-areacomun3-a-taller1 nav-areacomun3-a-almacen3', 'camara-vestibulo3-127 camara-vestibulo3-131')"
         onmouseenter="mostrarInfo('Ir a Vestíbulo')"
         onmouseleave="ocultarInfo()">
      <div class="etiqueta-navegacion" style="top:14%; left:48%;">Vestíbulo</div>
    </div>


    <!-- NAV E4: Área Común (Ed.3) → Oficinas -->
    <div id="nav-areacomun3-a-oficinas" class="nav-escena-4"
         style="display:none; position:absolute; top:0; left:0; width:100%; height:100%; z-index:30; cursor:pointer;
                background-color:rgba(120,120,120,0.45); border: 2px solid rgba(200,200,200,0.7);
                clip-path:polygon(89.33% -0.05%, 67.98% 20.88%, 75.39% 30.99%, 73.60% 62.03%, 73.03% 91.54%, 99.55% 56.90%, 99.66% 0.37%);"
         onclick="saltoLateral('assets/imagen-23.webp', 'Oficinas', 'nav-areacomun3-a-vestibulo3 nav-areacomun3-a-oficinas nav-areacomun3-a-taller1 nav-areacomun3-a-almacen3', 'nav-oficinas-a-sanitariosof nav-oficinas-a-areacomun camara-oficinas-sur camara-oficinas-150 camara-oficinas-149 camara-oficinas-148 camara-oficinas-147 camara-oficinas-146 camara-oficinas-145 camara-oficinas-144 camara-oficinas-143 camara-oficinas-142 camara-oficinas-141', 'assets/imagen-24.webp')"
         onmouseenter="mostrarInfo('Ir a Oficinas')"
         onmouseleave="ocultarInfo()">
      <div class="etiqueta-navegacion" style="top:45%; left:85%;">Oficinas</div>
    </div>


    <!-- NAV E4: Área Común (Ed.3) → Taller 1 -->
    <div id="nav-areacomun3-a-taller1" class="nav-escena-4"
         style="display:none; position:absolute; top:0; left:0; width:100%; height:100%; z-index:30; cursor:pointer;
                background-color:rgba(120,120,120,0.45); border: 2px solid rgba(200,200,200,0.7);
                clip-path:polygon(0.22% 62.44%, 23.48% 63.14%, 24.94% 12.01%, 17.98% 11.45%, 17.75% 2.31%, 1.01% 2.59%);"
         onclick="saltoLateral('assets/imagen-26.webp', 'Taller 1', 'nav-areacomun3-a-vestibulo3 nav-areacomun3-a-oficinas nav-areacomun3-a-taller1 nav-areacomun3-a-almacen3', 'nav-taller1-a-taller3 nav-taller1-a-taller4 nav-taller1-a-taller2 nav-taller1-a-vestibulo3 nav-taller1-a-areacomun camara-taller1-132 camara-taller1-133')"
         onmouseenter="mostrarInfo('Ir a Taller 1')"
         onmouseleave="ocultarInfo()">
      <div class="etiqueta-navegacion" style="top:32%; left:12%;">Taller 1</div>
    </div>


    <!-- NAV E4: Área Común (Ed.3) → Almacén / Mantenimiento (escena pendiente) -->
    <div id="nav-areacomun3-a-almacen3" class="nav-escena-4"
         style="display:none; position:absolute; top:0; left:0; width:100%; height:100%; z-index:30; cursor:not-allowed;
                background-color:rgba(120,120,120,0.25); border: 2px dashed rgba(200,200,200,0.5);
                clip-path:polygon(0.56% 62.72%, 23.26% 63.27%, 24.16% 93.06%);"
         onmouseenter="mostrarInfo('Almacén / Mantenimiento — próximamente')"
         onmouseleave="ocultarInfo()">
      <div class="etiqueta-navegacion" style="top:73%; left:12%; opacity:0.7;">Almacén</div>
    </div>


    <!-- NAV E4: Taller 1 (Ed.3) → Taller 3 -->
    <div id="nav-taller1-a-taller3" class="nav-escena-4"
         style="display:none; position:absolute; top:0; left:0; width:100%; height:100%; z-index:30; cursor:pointer;
                background-color:rgba(120,120,120,0.45); border: 2px solid rgba(200,200,200,0.7);
                clip-path:polygon(0.22% 5.63%, 28.20% 9.51%, 27.87% 92.51%, 0.22% 60.50%);"
         onclick="saltoLateral('assets/imagen-27.webp', 'Taller 3', 'nav-taller1-a-taller3 nav-taller1-a-taller4 nav-taller1-a-taller2 nav-taller1-a-vestibulo3 nav-taller1-a-areacomun', 'nav-taller3-a-taller4 nav-taller3-a-taller1 nav-taller3-a-taller2 camara-taller3-139 camara-taller3-140')"
         onmouseenter="mostrarInfo('Ir a Taller 3')"
         onmouseleave="ocultarInfo()">
      <div class="etiqueta-navegacion" style="top:40%; left:14%;">Taller 3</div>
    </div>


    <!-- NAV E4: Taller 1 (Ed.3) → Taller 4 -->
    <div id="nav-taller1-a-taller4" class="nav-escena-4"
         style="display:none; position:absolute; top:0; left:0; width:100%; height:100%; z-index:30; cursor:pointer;
                background-color:rgba(120,120,120,0.45); border: 2px solid rgba(200,200,200,0.7);
                clip-path:polygon(0.45% 4.94%, 28.54% 8.96%, 28.65% 0.23%, 0.45% -0.18%);"
         onclick="saltoLateral('assets/imagen-29.webp', 'Taller 4', 'nav-taller1-a-taller3 nav-taller1-a-taller4 nav-taller1-a-taller2 nav-taller1-a-vestibulo3 nav-taller1-a-areacomun', 'nav-taller4-a-taller2 nav-taller4-a-taller1 nav-taller4-a-taller3 camara-taller4-136 camara-taller4-137 camara-taller4-138')"
         onmouseenter="mostrarInfo('Ir a Taller 4')"
         onmouseleave="ocultarInfo()">
      <div class="etiqueta-navegacion" style="top:4%; left:14%;">Taller 4</div>
    </div>


    <!-- NAV E4: Taller 1 (Ed.3) → Taller 2 -->
    <div id="nav-taller1-a-taller2" class="nav-escena-4"
         style="display:none; position:absolute; top:0; left:0; width:100%; height:100%; z-index:30; cursor:pointer;
                background-color:rgba(120,120,120,0.45); border: 2px solid rgba(200,200,200,0.7);
                clip-path:polygon(28.99% 0.09%, 28.99% 8.68%, 62.36% 8.41%, 62.25% 0.09%);"
         onclick="saltoLateral('assets/imagen-28.webp', 'Taller 2', 'nav-taller1-a-taller3 nav-taller1-a-taller4 nav-taller1-a-taller2 nav-taller1-a-vestibulo3 nav-taller1-a-areacomun', 'nav-taller2-a-taller4 nav-taller2-a-taller1 nav-taller2-a-taller3 nav-taller2-a-sanitarios3 camara-taller2-134 camara-taller2-135')"
         onmouseenter="mostrarInfo('Ir a Taller 2')"
         onmouseleave="ocultarInfo()">
      <div class="etiqueta-navegacion" style="top:4%; left:45%;">Taller 2</div>
    </div>


    <!-- NAV E4: Taller 1 (Ed.3) → Vestíbulo -->
    <div id="nav-taller1-a-vestibulo3" class="nav-escena-4"
         style="display:none; position:absolute; top:0; left:0; width:100%; height:100%; z-index:30; cursor:pointer;
                background-color:rgba(120,120,120,0.45); border: 2px solid rgba(200,200,200,0.7);
                clip-path:polygon(87.42% 0.23%, 62.36% 7.99%, 53.26% 8.68%, 53.48% 21.98%, 62.02% 22.54%, 62.25% 25.45%, 82.25% 25.31%, 80.90% 27.11%, 97.87% 48.03%, 99.55% 48.31%, 99.55% 0.23%);"
         onclick="saltoLateral('assets/edificio3.webp', 'Vestíbulo', 'nav-taller1-a-taller3 nav-taller1-a-taller4 nav-taller1-a-taller2 nav-taller1-a-vestibulo3 nav-taller1-a-areacomun', 'camara-vestibulo3-127 camara-vestibulo3-131')"
         onmouseenter="mostrarInfo('Ir a Vestíbulo')"
         onmouseleave="ocultarInfo()">
      <div class="etiqueta-navegacion" style="top:20%; left:76%;">Vestíbulo</div>
    </div>


    <!-- NAV E4: Taller 1 (Ed.3) → Área Común -->
    <div id="nav-taller1-a-areacomun" class="nav-escena-4"
         style="display:none; position:absolute; top:0; left:0; width:100%; height:100%; z-index:30; cursor:pointer;
                background-color:rgba(120,120,120,0.45); border: 2px solid rgba(200,200,200,0.7);
                clip-path:polygon(62.25% 25.17%, 63.48% 99.99%, 99.55% 99.85%, 99.66% 48.86%, 81.12% 26.97%, 81.91% 25.59%);"
         onclick="saltoLateral('assets/imagen-25.webp', 'Área Común', 'nav-taller1-a-taller3 nav-taller1-a-taller4 nav-taller1-a-taller2 nav-taller1-a-vestibulo3 nav-taller1-a-areacomun', 'nav-areacomun3-a-vestibulo3 nav-areacomun3-a-oficinas nav-areacomun3-a-taller1 nav-areacomun3-a-almacen3 camara-areacomun3-128 camara-areacomun3-129 camara-areacomun3-130')"
         onmouseenter="mostrarInfo('Ir a Área Común')"
         onmouseleave="ocultarInfo()">
      <div class="etiqueta-navegacion" style="top:65%; left:82%;">Área Común</div>
    </div>


    <!-- NAV E4: Taller 3 (Ed.3) → Taller 4 -->
    <div id="nav-taller3-a-taller4" class="nav-escena-4"
         style="display:none; position:absolute; top:0; left:0; width:100%; height:100%; z-index:30; cursor:pointer;
                background-color:rgba(120,120,120,0.45); border: 2px solid rgba(200,200,200,0.7);
                clip-path:polygon(28.76% 0.09%, 28.54% 3.97%, 64.83% 10.07%, 64.94% 0.37%);"
         onclick="saltoLateral('assets/imagen-29.webp', 'Taller 4', 'nav-taller3-a-taller4 nav-taller3-a-taller1 nav-taller3-a-taller2', 'nav-taller4-a-taller2 nav-taller4-a-taller1 nav-taller4-a-taller3 camara-taller4-136 camara-taller4-137 camara-taller4-138')"
         onmouseenter="mostrarInfo('Ir a Taller 4')"
         onmouseleave="ocultarInfo()">
      <div class="etiqueta-navegacion" style="top:5%; left:47%;">Taller 4</div>
    </div>


    <!-- NAV E4: Taller 3 (Ed.3) → Taller 1 -->
    <div id="nav-taller3-a-taller1" class="nav-escena-4"
         style="display:none; position:absolute; top:0; left:0; width:100%; height:100%; z-index:30; cursor:pointer;
                background-color:rgba(120,120,120,0.45); border: 2px solid rgba(200,200,200,0.7);
                clip-path:polygon(65.17% 10.62%, 92.02% 9.79%, 92.13% 23.65%, 99.55% 24.20%, 99.33% 98.05%, 66.07% 95.14%);"
         onclick="saltoLateral('assets/imagen-26.webp', 'Taller 1', 'nav-taller3-a-taller4 nav-taller3-a-taller1 nav-taller3-a-taller2', 'nav-taller1-a-taller3 nav-taller1-a-taller4 nav-taller1-a-taller2 nav-taller1-a-vestibulo3 nav-taller1-a-areacomun camara-taller1-132 camara-taller1-133')"
         onmouseenter="mostrarInfo('Ir a Taller 1')"
         onmouseleave="ocultarInfo()">
      <div class="etiqueta-navegacion" style="top:55%; left:82%;">Taller 1</div>
    </div>


    <!-- NAV E4: Taller 3 (Ed.3) → Taller 2 -->
    <div id="nav-taller3-a-taller2" class="nav-escena-4"
         style="display:none; position:absolute; top:0; left:0; width:100%; height:100%; z-index:30; cursor:pointer;
                background-color:rgba(120,120,120,0.45); border: 2px solid rgba(200,200,200,0.7);
                clip-path:polygon(65.06% -0.05%, 65.39% 9.38%, 99.21% 10.48%, 99.21% 0.09%);"
         onclick="saltoLateral('assets/imagen-28.webp', 'Taller 2', 'nav-taller3-a-taller4 nav-taller3-a-taller1 nav-taller3-a-taller2', 'nav-taller2-a-taller4 nav-taller2-a-taller1 nav-taller2-a-taller3 nav-taller2-a-sanitarios3 camara-taller2-134 camara-taller2-135')"
         onmouseenter="mostrarInfo('Ir a Taller 2')"
         onmouseleave="ocultarInfo()">
      <div class="etiqueta-navegacion" style="top:5%; left:82%;">Taller 2</div>
    </div>


    <!-- NAV E4: Taller 4 (Ed.3) → Taller 2 -->
    <div id="nav-taller4-a-taller2" class="nav-escena-4"
         style="display:none; position:absolute; top:0; left:0; width:100%; height:100%; z-index:30; cursor:pointer;
                background-color:rgba(120,120,120,0.45); border: 2px solid rgba(200,200,200,0.7);
                clip-path:polygon(63.93% 86.27%, 97.08% 87.94%, 96.85% 46.92%, 98.54% 5.50%, 65.39% 2.17%);"
         onclick="saltoLateral('assets/imagen-28.webp', 'Taller 2', 'nav-taller4-a-taller2 nav-taller4-a-taller1 nav-taller4-a-taller3', 'nav-taller2-a-taller4 nav-taller2-a-taller1 nav-taller2-a-taller3 nav-taller2-a-sanitarios3 camara-taller2-134 camara-taller2-135')"
         onmouseenter="mostrarInfo('Ir a Taller 2')"
         onmouseleave="ocultarInfo()">
      <div class="etiqueta-navegacion" style="top:45%; left:82%;">Taller 2</div>
    </div>


    <!-- NAV E4: Taller 4 (Ed.3) → Taller 1 -->
    <div id="nav-taller4-a-taller1" class="nav-escena-4"
         style="display:none; position:absolute; top:0; left:0; width:100%; height:100%; z-index:30; cursor:pointer;
                background-color:rgba(120,120,120,0.45); border: 2px solid rgba(200,200,200,0.7);
                clip-path:polygon(97.08% 86.83%, 64.27% 87.66%, 64.04% 99.58%, 90.11% 99.71%, 89.89% 89.60%);"
         onclick="saltoLateral('assets/imagen-26.webp', 'Taller 1', 'nav-taller4-a-taller2 nav-taller4-a-taller1 nav-taller4-a-taller3', 'nav-taller1-a-taller3 nav-taller1-a-taller4 nav-taller1-a-taller2 nav-taller1-a-vestibulo3 nav-taller1-a-areacomun camara-taller1-132 camara-taller1-133')"
         onmouseenter="mostrarInfo('Ir a Taller 1')"
         onmouseleave="ocultarInfo()">
      <div class="etiqueta-navegacion" style="top:93%; left:77%;">Taller 1</div>
    </div>


    <!-- NAV E4: Taller 4 (Ed.3) → Taller 3 -->
    <div id="nav-taller4-a-taller3" class="nav-escena-4"
         style="display:none; position:absolute; top:0; left:0; width:100%; height:100%; z-index:30; cursor:pointer;
                background-color:rgba(120,120,120,0.45); border: 2px solid rgba(200,200,200,0.7);
                clip-path:polygon(28.43% 92.09%, 64.27% 86.83%, 64.27% 99.58%, 28.99% 99.58%);"
         onclick="saltoLateral('assets/imagen-27.webp', 'Taller 3', 'nav-taller4-a-taller2 nav-taller4-a-taller1 nav-taller4-a-taller3', 'nav-taller3-a-taller4 nav-taller3-a-taller1 nav-taller3-a-taller2 camara-taller3-139 camara-taller3-140')"
         onmouseenter="mostrarInfo('Ir a Taller 3')"
         onmouseleave="ocultarInfo()">
      <div class="etiqueta-navegacion" style="top:93%; left:46%;">Taller 3</div>
    </div>


    <!-- NAV E4: Taller 2 (Ed.3) → Taller 4 -->
    <div id="nav-taller2-a-taller4" class="nav-escena-4"
         style="display:none; position:absolute; top:0; left:0; width:100%; height:100%; z-index:30; cursor:pointer;
                background-color:rgba(120,120,120,0.45); border: 2px solid rgba(200,200,200,0.7);
                clip-path:polygon(38.43% 8.27%, 39.33% 90.57%, 1.01% 95.28%, 1.35% 50.53%);"
         onclick="saltoLateral('assets/imagen-29.webp', 'Taller 4', 'nav-taller2-a-taller4 nav-taller2-a-taller1 nav-taller2-a-taller3 nav-taller2-a-sanitarios3', 'nav-taller4-a-taller2 nav-taller4-a-taller1 nav-taller4-a-taller3 camara-taller4-136 camara-taller4-137 camara-taller4-138')"
         onmouseenter="mostrarInfo('Ir a Taller 4')"
         onmouseleave="ocultarInfo()">
      <div class="etiqueta-navegacion" style="top:50%; left:20%;">Taller 4</div>
    </div>


    <!-- NAV E4: Taller 2 (Ed.3) → Taller 1 -->
    <div id="nav-taller2-a-taller1" class="nav-escena-4"
         style="display:none; position:absolute; top:0; left:0; width:100%; height:100%; z-index:30; cursor:pointer;
                background-color:rgba(120,120,120,0.45); border: 2px solid rgba(200,200,200,0.7);
                clip-path:polygon(38.65% 90.43%, 62.92% 90.57%, 63.48% 99.30%, 39.33% 99.85%);"
         onclick="saltoLateral('assets/imagen-26.webp', 'Taller 1', 'nav-taller2-a-taller4 nav-taller2-a-taller1 nav-taller2-a-taller3 nav-taller2-a-sanitarios3', 'nav-taller1-a-taller3 nav-taller1-a-taller4 nav-taller1-a-taller2 nav-taller1-a-vestibulo3 nav-taller1-a-areacomun camara-taller1-132 camara-taller1-133')"
         onmouseenter="mostrarInfo('Ir a Taller 1')"
         onmouseleave="ocultarInfo()">
      <div class="etiqueta-navegacion" style="top:95%; left:51%;">Taller 1</div>
    </div>


    <!-- NAV E4: Taller 2 (Ed.3) → Taller 3 -->
    <div id="nav-taller2-a-taller3" class="nav-escena-4"
         style="display:none; position:absolute; top:0; left:0; width:100%; height:100%; z-index:30; cursor:pointer;
                background-color:rgba(120,120,120,0.45); border: 2px solid rgba(200,200,200,0.7);
                clip-path:polygon(1.35% 95.14%, 38.65% 90.43%, 39.33% 99.71%, 0.67% 99.58%);"
         onclick="saltoLateral('assets/imagen-27.webp', 'Taller 3', 'nav-taller2-a-taller4 nav-taller2-a-taller1 nav-taller2-a-taller3 nav-taller2-a-sanitarios3', 'nav-taller3-a-taller4 nav-taller3-a-taller1 nav-taller3-a-taller2 camara-taller3-139 camara-taller3-140')"
         onmouseenter="mostrarInfo('Ir a Taller 3')"
         onmouseleave="ocultarInfo()">
      <div class="etiqueta-navegacion" style="top:95%; left:20%;">Taller 3</div>
    </div>


    <!-- NAV E4: Taller 2 (Ed.3) → Sanitarios Públicos -->
    <div id="nav-taller2-a-sanitarios3" class="nav-escena-4"
         style="display:none; position:absolute; top:0; left:0; width:100%; height:100%; z-index:30; cursor:pointer;
                background-color:rgba(120,120,120,0.45); border: 2px solid rgba(200,200,200,0.7);
                clip-path:polygon(72.13% 10.35%, 71.69% 50.67%, 71.46% 90.71%, 99.33% 99.99%, 99.55% 40.83%);"
         onclick="saltoLateral('assets/imagen-30.webp', 'Sanitarios Públicos', 'nav-taller2-a-taller4 nav-taller2-a-taller1 nav-taller2-a-taller3 nav-taller2-a-sanitarios3', 'nav-sanitarios3-a-taller2 nav-sanitarios3-a-taller1 nav-sanitarios3-a-vestibulo3 nav-sanitarios3-a-areacomun camara-sanitarios3-123 camara-sanitarios3-124 camara-sanitarios3-125')"
         onmouseenter="mostrarInfo('Ir a Sanitarios Públicos')"
         onmouseleave="ocultarInfo()">
      <div class="etiqueta-navegacion" style="top:55%; left:85%;">Sanitarios</div>
    </div>


    <!-- NAV E4: Sanitarios Públicos (Ed.3) → Taller 2 -->
    <div id="nav-sanitarios3-a-taller2" class="nav-escena-4"
         style="display:none; position:absolute; top:0; left:0; width:100%; height:100%; z-index:30; cursor:pointer;
                background-color:rgba(120,120,120,0.45); border: 2px solid rgba(200,200,200,0.7);
                clip-path:polygon(5.39% 5.36%, 37.75% 5.77%, 38.20% 44.98%, 38.09% 81.84%, 8.31% 82.12%, 8.31% 45.26%);"
         onclick="saltoLateral('assets/imagen-28.webp', 'Taller 2', 'nav-sanitarios3-a-taller2 nav-sanitarios3-a-taller1 nav-sanitarios3-a-vestibulo3 nav-sanitarios3-a-areacomun', 'nav-taller2-a-taller4 nav-taller2-a-taller1 nav-taller2-a-taller3 nav-taller2-a-sanitarios3 camara-taller2-134 camara-taller2-135')"
         onmouseenter="mostrarInfo('Ir a Taller 2')"
         onmouseleave="ocultarInfo()">
      <div class="etiqueta-navegacion" style="top:43%; left:22%;">Taller 2</div>
    </div>


    <!-- NAV E4: Sanitarios Públicos (Ed.3) → Taller 1 -->
    <div id="nav-sanitarios3-a-taller1" class="nav-escena-4"
         style="display:none; position:absolute; top:0; left:0; width:100%; height:100%; z-index:30; cursor:pointer;
                background-color:rgba(120,120,120,0.45); border: 2px solid rgba(200,200,200,0.7);
                clip-path:polygon(8.43% 81.56%, 30.00% 81.56%, 29.66% 96.25%, 38.09% 94.31%, 38.54% 99.58%, 8.54% 99.85%);"
         onclick="saltoLateral('assets/imagen-26.webp', 'Taller 1', 'nav-sanitarios3-a-taller2 nav-sanitarios3-a-taller1 nav-sanitarios3-a-vestibulo3 nav-sanitarios3-a-areacomun', 'nav-taller1-a-taller3 nav-taller1-a-taller4 nav-taller1-a-taller2 nav-taller1-a-vestibulo3 nav-taller1-a-areacomun camara-taller1-132 camara-taller1-133')"
         onmouseenter="mostrarInfo('Ir a Taller 1')"
         onmouseleave="ocultarInfo()">
      <div class="etiqueta-navegacion" style="top:90%; left:23%;">Taller 1</div>
    </div>


    <!-- NAV E4: Sanitarios Públicos (Ed.3) → Vestíbulo (sin etiqueta) -->
    <div id="nav-sanitarios3-a-vestibulo3" class="nav-escena-4"
         style="display:none; position:absolute; top:0; left:0; width:100%; height:100%; z-index:30; cursor:pointer;
                background-color:rgba(120,120,120,0.45); border: 2px solid rgba(200,200,200,0.7);
                clip-path:polygon(84.04% 99.85%, 71.35% 99.99%, 62.47% 90.43%, 39.89% 88.77%, 37.75% 94.59%, 29.44% 96.25%, 30.00% 82.39%, 37.08% 82.67%, 72.36% 92.23%, 76.18% 90.02%);"
         onclick="saltoLateral('assets/edificio3.webp', 'Vestíbulo', 'nav-sanitarios3-a-taller2 nav-sanitarios3-a-taller1 nav-sanitarios3-a-vestibulo3 nav-sanitarios3-a-areacomun', 'camara-vestibulo3-127 camara-vestibulo3-131')"
         onmouseenter="mostrarInfo('Ir a Vestíbulo')"
         onmouseleave="ocultarInfo()">
    </div>


    <!-- NAV E4: Sanitarios Públicos (Ed.3) → Área Común -->
    <div id="nav-sanitarios3-a-areacomun" class="nav-escena-4"
         style="display:none; position:absolute; top:0; left:0; width:100%; height:100%; z-index:30; cursor:pointer;
                background-color:rgba(120,120,120,0.45); border: 2px solid rgba(200,200,200,0.7);
                clip-path:polygon(38.31% 99.85%, 37.87% 93.89%, 39.78% 88.77%, 61.35% 89.60%, 71.01% 99.85%);"
         onclick="saltoLateral('assets/imagen-25.webp', 'Área Común', 'nav-sanitarios3-a-taller2 nav-sanitarios3-a-taller1 nav-sanitarios3-a-vestibulo3 nav-sanitarios3-a-areacomun', 'nav-areacomun3-a-vestibulo3 nav-areacomun3-a-oficinas nav-areacomun3-a-taller1 nav-areacomun3-a-almacen3 camara-areacomun3-128 camara-areacomun3-129 camara-areacomun3-130')"
         onmouseenter="mostrarInfo('Ir a Área Común')"
         onmouseleave="ocultarInfo()">
      <div class="etiqueta-navegacion" style="top:95%; left:55%;">Área Común</div>
    </div>


    <!-- NAV E4: Sanitarios Oficinas (Ed.3) → Oficinas -->
    <div id="nav-sanitariosof-a-oficinas" class="nav-escena-4"
         style="display:none; position:absolute; top:0; left:0; width:100%; height:100%; z-index:30; cursor:pointer;
                background-color:rgba(120,120,120,0.45); border: 2px solid rgba(200,200,200,0.7);
                clip-path:polygon(26.74% 99.99%, 27.30% 81.56%, 84.61% 79.76%, 85.28% 99.85%);"
         onclick="saltoLateral('assets/imagen-23.webp', 'Oficinas', 'nav-sanitariosof-a-oficinas', 'nav-oficinas-a-sanitariosof nav-oficinas-a-areacomun camara-oficinas-sur camara-oficinas-150 camara-oficinas-149 camara-oficinas-148 camara-oficinas-147 camara-oficinas-146 camara-oficinas-145 camara-oficinas-144 camara-oficinas-143 camara-oficinas-142 camara-oficinas-141', 'assets/imagen-24.webp')"
         onmouseenter="mostrarInfo('Ir a Oficinas')"
         onmouseleave="ocultarInfo()">
      <div class="etiqueta-navegacion" style="top:90.29%; left:55.98%;">Oficinas</div>
    </div>`;

document.getElementById('mapa-interactivo').insertAdjacentHTML('beforeend', navsEdificio1 + navsEdificio2 + navsEdificio3);
