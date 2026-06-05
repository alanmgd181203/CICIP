/* ══════════════════════════════════════════
   CÁMARAS DE RENDERS - PROYECTO CICIP
   ══════════════════════════════════════════ */

/* ═════════ EDIFICIO 1 ═════════ */
const camerasEdificio1 = `
    <!-- Archivo Ed.1: Render 67 (Sur–Suroeste) -->
    <div id="camara-archivo1-67" class="camara-render"
         style="display:none; position:absolute; top:31.29%; left:52.93%; transform:translate(-50%, -50%) rotate(202.5deg);"
         onclick="abrirRender('assets/67.webp', this)">
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" stroke="white" stroke-width="4">
        <path d="M50 40 L20 10 A 45 45 0 0 1 80 10 Z" fill="rgba(255,255,255,0.4)" stroke="none"/>
        <circle cx="50" cy="50" r="12" fill="white"/>
        <circle cx="50" cy="50" r="6" fill="#333"/>
      </svg>
    </div>

    <!-- Análisis Territorial Ed.1: Render 65 (Norte) -->
    <div id="camara-territorial1-65" class="camara-render"
         style="display:none; position:absolute; top:74.40%; left:59.54%; transform:translate(-50%, -50%) rotate(0deg);"
         onclick="abrirRender('assets/65.webp', this)">
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" stroke="white" stroke-width="4">
        <path d="M50 40 L20 10 A 45 45 0 0 1 80 10 Z" fill="rgba(255,255,255,0.4)" stroke="none"/>
        <circle cx="50" cy="50" r="12" fill="white"/>
        <circle cx="50" cy="50" r="6" fill="#333"/>
      </svg>
    </div>

    <!-- Análisis Territorial Ed.1: Render 66 (Suroeste) -->
    <div id="camara-territorial1-66" class="camara-render"
         style="display:none; position:absolute; top:30.84%; left:65.12%; transform:translate(-50%, -50%) rotate(-135deg);"
         onclick="abrirRender('assets/66.webp', this)">
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" stroke="white" stroke-width="4">
        <path d="M50 40 L20 10 A 45 45 0 0 1 80 10 Z" fill="rgba(255,255,255,0.4)" stroke="none"/>
        <circle cx="50" cy="50" r="12" fill="white"/>
        <circle cx="50" cy="50" r="6" fill="#333"/>
      </svg>
    </div>

    <!-- Vestíbulo/Pasillos Ed.1: Render 13 (Noroeste) -->
    <div id="camara-vestibulo1-13" class="camara-render"
         style="display:none; position:absolute; top:51.33%; left:46.49%; transform:translate(-50%, -50%) rotate(-45deg);"
         onclick="abrirRender('assets/13.webp', this)">
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" stroke="white" stroke-width="4">
        <path d="M50 40 L20 10 A 45 45 0 0 1 80 10 Z" fill="rgba(255,255,255,0.4)" stroke="none"/>
        <circle cx="50" cy="50" r="12" fill="white"/>
        <circle cx="50" cy="50" r="6" fill="#333"/>
      </svg>
    </div>

    <!-- Vestíbulo/Pasillos Ed.1: Render 14 (Este) -->
    <div id="camara-vestibulo1-14" class="camara-render"
         style="display:none; position:absolute; top:52.68%; left:46.52%; transform:translate(-50%, -50%) rotate(90deg);"
         onclick="abrirRender('assets/14.webp', this)">
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" stroke="white" stroke-width="4">
        <path d="M50 40 L20 10 A 45 45 0 0 1 80 10 Z" fill="rgba(255,255,255,0.4)" stroke="none"/>
        <circle cx="50" cy="50" r="12" fill="white"/>
        <circle cx="50" cy="50" r="6" fill="#333"/>
      </svg>
    </div>

    <!-- Vestíbulo/Pasillos Ed.1: Render 15 (Suroeste) -->
    <div id="camara-vestibulo1-15" class="camara-render"
         style="display:none; position:absolute; top:49.54%; left:57.10%; transform:translate(-50%, -50%) rotate(-135deg);"
         onclick="abrirRender('assets/15.webp', this)">
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" stroke="white" stroke-width="4">
        <path d="M50 40 L20 10 A 45 45 0 0 1 80 10 Z" fill="rgba(255,255,255,0.4)" stroke="none"/>
        <circle cx="50" cy="50" r="12" fill="white"/>
        <circle cx="50" cy="50" r="6" fill="#333"/>
      </svg>
    </div>

    <!-- Vestíbulo/Pasillos Ed.1: Render 16 (Sur) -->
    <div id="camara-vestibulo1-16" class="camara-render"
         style="display:none; position:absolute; top:51.03%; left:51.14%; transform:translate(-50%, -50%) rotate(180deg);"
         onclick="abrirRender('assets/16.webp', this)">
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" stroke="white" stroke-width="4">
        <path d="M50 40 L20 10 A 45 45 0 0 1 80 10 Z" fill="rgba(255,255,255,0.4)" stroke="none"/>
        <circle cx="50" cy="50" r="12" fill="white"/>
        <circle cx="50" cy="50" r="6" fill="#333"/>
      </svg>
    </div>

    <!-- Vestíbulo/Pasillos Ed.1: Render 16.5 (Sur) -->
    <div id="camara-vestibulo1-16-5" class="camara-render"
         style="display:none; position:absolute; top:52.38%; left:52.39%; transform:translate(-50%, -50%) rotate(180deg);"
         onclick="abrirRender('assets/16.5.webp', this)">
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" stroke="white" stroke-width="4">
        <path d="M50 40 L20 10 A 45 45 0 0 1 80 10 Z" fill="rgba(255,255,255,0.4)" stroke="none"/>
        <circle cx="50" cy="50" r="12" fill="white"/>
        <circle cx="50" cy="50" r="6" fill="#333"/>
      </svg>
    </div>

    <!-- Vestíbulo/Pasillos Ed.1: Render 31 (Norte) -->
    <div id="camara-vestibulo1-31" class="camara-render"
         style="display:none; position:absolute; top:58.60%; left:51.90%; transform:translate(-50%, -50%) rotate(0deg);"
         onclick="abrirRender('assets/31.webp', this)">
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" stroke="white" stroke-width="4">
        <path d="M50 40 L20 10 A 45 45 0 0 1 80 10 Z" fill="rgba(255,255,255,0.4)" stroke="none"/>
        <circle cx="50" cy="50" r="12" fill="white"/>
        <circle cx="50" cy="50" r="6" fill="#333"/>
      </svg>
    </div>

    <!-- Vestíbulo/Pasillos Ed.1: Render 32 (Noroeste) -->
    <div id="camara-vestibulo1-32" class="camara-render"
         style="display:none; position:absolute; top:52.79%; left:49.99%; transform:translate(-50%, -50%) rotate(-45deg);"
         onclick="abrirRender('assets/32.webp', this)">
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" stroke="white" stroke-width="4">
        <path d="M50 40 L20 10 A 45 45 0 0 1 80 10 Z" fill="rgba(255,255,255,0.4)" stroke="none"/>
        <circle cx="50" cy="50" r="12" fill="white"/>
        <circle cx="50" cy="50" r="6" fill="#333"/>
      </svg>
    </div>

    <!-- Vestíbulo/Pasillos Ed.1: Render 33 (Este) -->
    <div id="camara-vestibulo1-33" class="camara-render"
         style="display:none; position:absolute; top:52.12%; left:54.25%; transform:translate(-50%, -50%) rotate(90deg);"
         onclick="abrirRender('assets/33.webp', this)">
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" stroke="white" stroke-width="4">
        <path d="M50 40 L20 10 A 45 45 0 0 1 80 10 Z" fill="rgba(255,255,255,0.4)" stroke="none"/>
        <circle cx="50" cy="50" r="12" fill="white"/>
        <circle cx="50" cy="50" r="6" fill="#333"/>
      </svg>
    </div>

    <!-- Vestíbulo/Pasillos Ed.1: Render 43 (Noreste) -->
    <div id="camara-vestibulo1-43" class="camara-render"
         style="display:none; position:absolute; top:48.14%; left:54.74%; transform:translate(-50%, -50%) rotate(45deg);"
         onclick="abrirRender('assets/43.webp', this)">
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" stroke="white" stroke-width="4">
        <path d="M50 40 L20 10 A 45 45 0 0 1 80 10 Z" fill="rgba(255,255,255,0.4)" stroke="none"/>
        <circle cx="50" cy="50" r="12" fill="white"/>
        <circle cx="50" cy="50" r="6" fill="#333"/>
      </svg>
    </div>

    <!-- Vestíbulo/Pasillos Ed.1: Render 54 (Este) -->
    <div id="camara-vestibulo1-54" class="camara-render"
         style="display:none; position:absolute; top:45.43%; left:39.33%; transform:translate(-50%, -50%) rotate(90deg);"
         onclick="abrirRender('assets/54.webp', this)">
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" stroke="white" stroke-width="4">
        <path d="M50 40 L20 10 A 45 45 0 0 1 80 10 Z" fill="rgba(255,255,255,0.4)" stroke="none"/>
        <circle cx="50" cy="50" r="12" fill="white"/>
        <circle cx="50" cy="50" r="6" fill="#333"/>
      </svg>
    </div>

    <!-- Vestíbulo/Pasillos Ed.1: Render 57 (Oeste) -->
    <div id="camara-vestibulo1-57" class="camara-render"
         style="display:none; position:absolute; top:45.93%; left:37.49%; transform:translate(-50%, -50%) rotate(270deg);"
         onclick="abrirRender('assets/57.webp', this)">
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" stroke="white" stroke-width="4">
        <path d="M50 40 L20 10 A 45 45 0 0 1 80 10 Z" fill="rgba(255,255,255,0.4)" stroke="none"/>
        <circle cx="50" cy="50" r="12" fill="white"/>
        <circle cx="50" cy="50" r="6" fill="#333"/>
      </svg>
    </div>

    <!-- Vestíbulo/Pasillos Ed.1: Render 64 (Este) -->
    <div id="camara-vestibulo1-64" class="camara-render"
         style="display:none; position:absolute; top:41.05%; left:24.84%; transform:translate(-50%, -50%) rotate(90deg);"
         onclick="abrirRender('assets/64.webp', this)">
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" stroke="white" stroke-width="4">
        <path d="M50 40 L20 10 A 45 45 0 0 1 80 10 Z" fill="rgba(255,255,255,0.4)" stroke="none"/>
        <circle cx="50" cy="50" r="12" fill="white"/>
        <circle cx="50" cy="50" r="6" fill="#333"/>
      </svg>
    </div>

    <!-- Área Común Ed.1: Render 58 (Norte–Noreste) -->
    <div id="camara-areacomun1-58" class="camara-render"
         style="display:none; position:absolute; top:77.69%; left:36.63%; transform:translate(-50%, -50%) rotate(22.5deg);"
         onclick="abrirRender('assets/58.webp', this)">
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" stroke="white" stroke-width="4">
        <path d="M50 40 L20 10 A 45 45 0 0 1 80 10 Z" fill="rgba(255,255,255,0.4)" stroke="none"/>
        <circle cx="50" cy="50" r="12" fill="white"/>
        <circle cx="50" cy="50" r="6" fill="#333"/>
      </svg>
    </div>

    <!-- Área Común Ed.1: Render 59 (Suroeste) -->
    <div id="camara-areacomun1-59" class="camara-render"
         style="display:none; position:absolute; top:28.73%; left:54.95%; transform:translate(-50%, -50%) rotate(-135deg);"
         onclick="abrirRender('assets/59.webp', this)">
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" stroke="white" stroke-width="4">
        <path d="M50 40 L20 10 A 45 45 0 0 1 80 10 Z" fill="rgba(255,255,255,0.4)" stroke="none"/>
        <circle cx="50" cy="50" r="12" fill="white"/>
        <circle cx="50" cy="50" r="6" fill="#333"/>
      </svg>
    </div>

    <!-- Área Común Ed.1: Render 62 (Este) -->
    <div id="camara-areacomun1-62" class="camara-render"
         style="display:none; position:absolute; top:72.49%; left:34.34%; transform:translate(-50%, -50%) rotate(90deg);"
         onclick="abrirRender('assets/62.webp', this)">
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" stroke="white" stroke-width="4">
        <path d="M50 40 L20 10 A 45 45 0 0 1 80 10 Z" fill="rgba(255,255,255,0.4)" stroke="none"/>
        <circle cx="50" cy="50" r="12" fill="white"/>
        <circle cx="50" cy="50" r="6" fill="#333"/>
      </svg>
    </div>

    <!-- Cocineta Ed.1: Render 60 (Oeste–Noroeste) -->
    <div id="camara-cocineta1-60" class="camara-render"
         style="display:none; position:absolute; top:52.67%; left:65.29%; transform:translate(-50%, -50%) rotate(292.5deg);"
         onclick="abrirRender('assets/60.webp', this)">
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" stroke="white" stroke-width="4">
        <path d="M50 40 L20 10 A 45 45 0 0 1 80 10 Z" fill="rgba(255,255,255,0.4)" stroke="none"/>
        <circle cx="50" cy="50" r="12" fill="white"/>
        <circle cx="50" cy="50" r="6" fill="#333"/>
      </svg>
    </div>

    <!-- Cocineta Ed.1: Render 61 (Este) -->
    <div id="camara-cocineta1-61" class="camara-render"
         style="display:none; position:absolute; top:53.28%; left:50.09%; transform:translate(-50%, -50%) rotate(90deg);"
         onclick="abrirRender('assets/61.webp', this)">
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" stroke="white" stroke-width="4">
        <path d="M50 40 L20 10 A 45 45 0 0 1 80 10 Z" fill="rgba(255,255,255,0.4)" stroke="none"/>
        <circle cx="50" cy="50" r="12" fill="white"/>
        <circle cx="50" cy="50" r="6" fill="#333"/>
      </svg>
    </div>

    <!-- Lab Cantera Ed.1: Render 55 (Norte) -->
    <div id="camara-cantera1-55" class="camara-render"
         style="display:none; position:absolute; top:79.72%; left:45.87%; transform:translate(-50%, -50%) rotate(0deg);"
         onclick="abrirRender('assets/55.webp', this)">
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" stroke="white" stroke-width="4">
        <path d="M50 40 L20 10 A 45 45 0 0 1 80 10 Z" fill="rgba(255,255,255,0.4)" stroke="none"/>
        <circle cx="50" cy="50" r="12" fill="white"/>
        <circle cx="50" cy="50" r="6" fill="#333"/>
      </svg>
    </div>

    <!-- Lab Cantera Ed.1: Render 56 (Sur) -->
    <div id="camara-cantera1-56" class="camara-render"
         style="display:none; position:absolute; top:22.71%; left:45.93%; transform:translate(-50%, -50%) rotate(180deg);"
         onclick="abrirRender('assets/56.webp', this)">
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" stroke="white" stroke-width="4">
        <path d="M50 40 L20 10 A 45 45 0 0 1 80 10 Z" fill="rgba(255,255,255,0.4)" stroke="none"/>
        <circle cx="50" cy="50" r="12" fill="white"/>
        <circle cx="50" cy="50" r="6" fill="#333"/>
      </svg>
    </div>

    <!-- Lab de Pruebas Ed.1: Render 49 (Sureste) -->
    <div id="camara-pruebas1-49" class="camara-render"
         style="display:none; position:absolute; top:74.62%; left:65.61%; transform:translate(-50%, -50%) rotate(135deg);"
         onclick="abrirRender('assets/49.webp', this)">
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" stroke="white" stroke-width="4">
        <path d="M50 40 L20 10 A 45 45 0 0 1 80 10 Z" fill="rgba(255,255,255,0.4)" stroke="none"/>
        <circle cx="50" cy="50" r="12" fill="white"/>
        <circle cx="50" cy="50" r="6" fill="#333"/>
      </svg>
    </div>

    <!-- Lab de Pruebas Ed.1: Render 51 (Sur–Suroeste) -->
    <div id="camara-pruebas1-51" class="camara-render"
         style="display:none; position:absolute; top:21.46%; left:58.94%; transform:translate(-50%, -50%) rotate(202.5deg);"
         onclick="abrirRender('assets/51.webp', this)">
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" stroke="white" stroke-width="4">
        <path d="M50 40 L20 10 A 45 45 0 0 1 80 10 Z" fill="rgba(255,255,255,0.4)" stroke="none"/>
        <circle cx="50" cy="50" r="12" fill="white"/>
        <circle cx="50" cy="50" r="6" fill="#333"/>
      </svg>
    </div>

    <!-- Sanitarios Ed.1: Render 50 (Norte) -->
    <div id="camara-sanitarios1-50" class="camara-render"
         style="display:none; position:absolute; top:65.35%; left:56.37%; transform:translate(-50%, -50%) rotate(0deg);"
         onclick="abrirRender('assets/50.webp', this)">
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" stroke="white" stroke-width="4">
        <path d="M50 40 L20 10 A 45 45 0 0 1 80 10 Z" fill="rgba(255,255,255,0.4)" stroke="none"/>
        <circle cx="50" cy="50" r="12" fill="white"/>
        <circle cx="50" cy="50" r="6" fill="#333"/>
      </svg>
    </div>

    <!-- Sanitarios Ed.1: Render 53 (Oeste) -->
    <div id="camara-sanitarios1-53" class="camara-render"
         style="display:none; position:absolute; top:45.97%; left:68.07%; transform:translate(-50%, -50%) rotate(270deg);"
         onclick="abrirRender('assets/53.webp', this)">
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" stroke="white" stroke-width="4">
        <path d="M50 40 L20 10 A 45 45 0 0 1 80 10 Z" fill="rgba(255,255,255,0.4)" stroke="none"/>
        <circle cx="50" cy="50" r="12" fill="white"/>
        <circle cx="50" cy="50" r="6" fill="#333"/>
      </svg>
    </div>

    <!-- Lab de Acabados Ed.1: Render 34 (Suroeste) -->
    <div id="camara-acabados1-34" class="camara-render"
         style="display:none; position:absolute; top:15.06%; left:35.76%; transform:translate(-50%, -50%) rotate(-135deg);"
         onclick="abrirRender('assets/34.webp', this)">
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" stroke="white" stroke-width="4">
        <path d="M50 40 L20 10 A 45 45 0 0 1 80 10 Z" fill="rgba(255,255,255,0.4)" stroke="none"/>
        <circle cx="50" cy="50" r="12" fill="white"/>
        <circle cx="50" cy="50" r="6" fill="#333"/>
      </svg>
    </div>

    <!-- Lab de Acabados Ed.1: Render 35 (Sur) -->
    <div id="camara-acabados1-35" class="camara-render"
         style="display:none; position:absolute; top:24.23%; left:57.30%; transform:translate(-50%, -50%) rotate(180deg);"
         onclick="abrirRender('assets/35.webp', this)">
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" stroke="white" stroke-width="4">
        <path d="M50 40 L20 10 A 45 45 0 0 1 80 10 Z" fill="rgba(255,255,255,0.4)" stroke="none"/>
        <circle cx="50" cy="50" r="12" fill="white"/>
        <circle cx="50" cy="50" r="6" fill="#333"/>
      </svg>
    </div>

    <!-- Lab de Acabados Ed.1: Render 36 (Suroeste) -->
    <div id="camara-acabados1-36" class="camara-render"
         style="display:none; position:absolute; top:24.36%; left:50.09%; transform:translate(-50%, -50%) rotate(-135deg);"
         onclick="abrirRender('assets/36.webp', this)">
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" stroke="white" stroke-width="4">
        <path d="M50 40 L20 10 A 45 45 0 0 1 80 10 Z" fill="rgba(255,255,255,0.4)" stroke="none"/>
        <circle cx="50" cy="50" r="12" fill="white"/>
        <circle cx="50" cy="50" r="6" fill="#333"/>
      </svg>
    </div>

    <!-- Lab de Acabados Ed.1: Render 37 (Oeste) -->
    <div id="camara-acabados1-37" class="camara-render"
         style="display:none; position:absolute; top:42.57%; left:62.55%; transform:translate(-50%, -50%) rotate(270deg);"
         onclick="abrirRender('assets/37.webp', this)">
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" stroke="white" stroke-width="4">
        <path d="M50 40 L20 10 A 45 45 0 0 1 80 10 Z" fill="rgba(255,255,255,0.4)" stroke="none"/>
        <circle cx="50" cy="50" r="12" fill="white"/>
        <circle cx="50" cy="50" r="6" fill="#333"/>
      </svg>
    </div>

    <!-- Lab de Acabados Ed.1: Render 38 (Suroeste) -->
    <div id="camara-acabados1-38" class="camara-render"
         style="display:none; position:absolute; top:25.69%; left:65.56%; transform:translate(-50%, -50%) rotate(-135deg);"
         onclick="abrirRender('assets/38.webp', this)">
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" stroke="white" stroke-width="4">
        <path d="M50 40 L20 10 A 45 45 0 0 1 80 10 Z" fill="rgba(255,255,255,0.4)" stroke="none"/>
        <circle cx="50" cy="50" r="12" fill="white"/>
        <circle cx="50" cy="50" r="6" fill="#333"/>
      </svg>
    </div>

    <!-- Lab Principal Ed.1: Render 19 (Sur) -->
    <div id="camara-principal1-19" class="camara-render"
         style="display:none; position:absolute; top:16.79%; left:19.79%; transform:translate(-50%, -50%) rotate(180deg);"
         onclick="abrirRender('assets/19.webp', this)">
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" stroke="white" stroke-width="4">
        <path d="M50 40 L20 10 A 45 45 0 0 1 80 10 Z" fill="rgba(255,255,255,0.4)" stroke="none"/>
        <circle cx="50" cy="50" r="12" fill="white"/>
        <circle cx="50" cy="50" r="6" fill="#333"/>
      </svg>
    </div>

    <!-- Lab Principal Ed.1: Render 21 (Oeste) -->
    <div id="camara-principal1-21" class="camara-render"
         style="display:none; position:absolute; top:36.90%; left:26.30%; transform:translate(-50%, -50%) rotate(270deg);"
         onclick="abrirRender('assets/21.webp', this)">
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" stroke="white" stroke-width="4">
        <path d="M50 40 L20 10 A 45 45 0 0 1 80 10 Z" fill="rgba(255,255,255,0.4)" stroke="none"/>
        <circle cx="50" cy="50" r="12" fill="white"/>
        <circle cx="50" cy="50" r="6" fill="#333"/>
      </svg>
    </div>

    <!-- Lab Principal Ed.1: Render 22 (Sureste) -->
    <div id="camara-principal1-22" class="camara-render"
         style="display:none; position:absolute; top:44.72%; left:32.26%; transform:translate(-50%, -50%) rotate(135deg);"
         onclick="abrirRender('assets/22.webp', this)">
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" stroke="white" stroke-width="4">
        <path d="M50 40 L20 10 A 45 45 0 0 1 80 10 Z" fill="rgba(255,255,255,0.4)" stroke="none"/>
        <circle cx="50" cy="50" r="12" fill="white"/>
        <circle cx="50" cy="50" r="6" fill="#333"/>
      </svg>
    </div>

    <!-- Lab Principal Ed.1: Render 23 (Este) -->
    <div id="camara-principal1-23" class="camara-render"
         style="display:none; position:absolute; top:64.95%; left:44.02%; transform:translate(-50%, -50%) rotate(90deg);"
         onclick="abrirRender('assets/23.webp', this)">
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" stroke="white" stroke-width="4">
        <path d="M50 40 L20 10 A 45 45 0 0 1 80 10 Z" fill="rgba(255,255,255,0.4)" stroke="none"/>
        <circle cx="50" cy="50" r="12" fill="white"/>
        <circle cx="50" cy="50" r="6" fill="#333"/>
      </svg>
    </div>

    <!-- Lab Principal Ed.1: Render 24 (Noroeste) -->
    <div id="camara-principal1-24" class="camara-render"
         style="display:none; position:absolute; top:70.55%; left:48.06%; transform:translate(-50%, -50%) rotate(-45deg);"
         onclick="abrirRender('assets/24.webp', this)">
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" stroke="white" stroke-width="4">
        <path d="M50 40 L20 10 A 45 45 0 0 1 80 10 Z" fill="rgba(255,255,255,0.4)" stroke="none"/>
        <circle cx="50" cy="50" r="12" fill="white"/>
        <circle cx="50" cy="50" r="6" fill="#333"/>
      </svg>
    </div>

    <!-- Lab Principal Ed.1: Render 25 (Norte) -->
    <div id="camara-principal1-25" class="camara-render"
         style="display:none; position:absolute; top:75.20%; left:49.92%; transform:translate(-50%, -50%) rotate(0deg);"
         onclick="abrirRender('assets/25.webp', this)">
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" stroke="white" stroke-width="4">
        <path d="M50 40 L20 10 A 45 45 0 0 1 80 10 Z" fill="rgba(255,255,255,0.4)" stroke="none"/>
        <circle cx="50" cy="50" r="12" fill="white"/>
        <circle cx="50" cy="50" r="6" fill="#333"/>
      </svg>
    </div>

    <!-- Lab Principal Ed.1: Render 26 (Oeste–Noroeste) -->
    <div id="camara-principal1-26" class="camara-render"
         style="display:none; position:absolute; top:79.45%; left:69.33%; transform:translate(-50%, -50%) rotate(292.5deg);"
         onclick="abrirRender('assets/26.webp', this)">
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" stroke="white" stroke-width="4">
        <path d="M50 40 L20 10 A 45 45 0 0 1 80 10 Z" fill="rgba(255,255,255,0.4)" stroke="none"/>
        <circle cx="50" cy="50" r="12" fill="white"/>
        <circle cx="50" cy="50" r="6" fill="#333"/>
      </svg>
    </div>

    <!-- Lab Principal Ed.1: Render 27 (Norte) -->
    <div id="camara-principal1-27" class="camara-render"
         style="display:none; position:absolute; top:52.11%; left:51.34%; transform:translate(-50%, -50%) rotate(0deg);"
         onclick="abrirRender('assets/27.webp', this)">
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" stroke="white" stroke-width="4">
        <path d="M50 40 L20 10 A 45 45 0 0 1 80 10 Z" fill="rgba(255,255,255,0.4)" stroke="none"/>
        <circle cx="50" cy="50" r="12" fill="white"/>
        <circle cx="50" cy="50" r="6" fill="#333"/>
      </svg>
    </div>

    <!-- Lab Principal Ed.1: Render 28 (Este) -->
    <div id="camara-principal1-28" class="camara-render"
         style="display:none; position:absolute; top:44.69%; left:48.39%; transform:translate(-50%, -50%) rotate(90deg);"
         onclick="abrirRender('assets/28.webp', this)">
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" stroke="white" stroke-width="4">
        <path d="M50 40 L20 10 A 45 45 0 0 1 80 10 Z" fill="rgba(255,255,255,0.4)" stroke="none"/>
        <circle cx="50" cy="50" r="12" fill="white"/>
        <circle cx="50" cy="50" r="6" fill="#333"/>
      </svg>
    </div>

    <!-- Lab Principal Ed.1: Render 29 (Noreste) -->
    <div id="camara-principal1-29" class="camara-render"
         style="display:none; position:absolute; top:39.50%; left:38.88%; transform:translate(-50%, -50%) rotate(45deg);"
         onclick="abrirRender('assets/29.webp', this)">
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" stroke="white" stroke-width="4">
        <path d="M50 40 L20 10 A 45 45 0 0 1 80 10 Z" fill="rgba(255,255,255,0.4)" stroke="none"/>
        <circle cx="50" cy="50" r="12" fill="white"/>
        <circle cx="50" cy="50" r="6" fill="#333"/>
      </svg>
    </div>

    <!-- Lab Principal Ed.1: Render 30 (Noreste) -->
    <div id="camara-principal1-30" class="camara-render"
         style="display:none; position:absolute; top:27.84%; left:43.36%; transform:translate(-50%, -50%) rotate(45deg);"
         onclick="abrirRender('assets/30.webp', this)">
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" stroke="white" stroke-width="4">
        <path d="M50 40 L20 10 A 45 45 0 0 1 80 10 Z" fill="rgba(255,255,255,0.4)" stroke="none"/>
        <circle cx="50" cy="50" r="12" fill="white"/>
        <circle cx="50" cy="50" r="6" fill="#333"/>
      </svg>
    </div>

    <!-- Lab Morteros Ed.1: Render 44 (Oeste–Noroeste) -->
    <div id="camara-morteros1-44" class="camara-render"
         style="display:none; position:absolute; top:71.31%; left:48.23%; transform:translate(-50%, -50%) rotate(292.5deg);"
         onclick="abrirRender('assets/44.webp', this)">
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" stroke="white" stroke-width="4">
        <path d="M50 40 L20 10 A 45 45 0 0 1 80 10 Z" fill="rgba(255,255,255,0.4)" stroke="none"/>
        <circle cx="50" cy="50" r="12" fill="white"/>
        <circle cx="50" cy="50" r="6" fill="#333"/>
      </svg>
    </div>

    <!-- Lab Morteros Ed.1: Render 45 (Noroeste) -->
    <div id="camara-morteros1-45" class="camara-render"
         style="display:none; position:absolute; top:63.62%; left:54.73%; transform:translate(-50%, -50%) rotate(-45deg);"
         onclick="abrirRender('assets/45.webp', this)">
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" stroke="white" stroke-width="4">
        <path d="M50 40 L20 10 A 45 45 0 0 1 80 10 Z" fill="rgba(255,255,255,0.4)" stroke="none"/>
        <circle cx="50" cy="50" r="12" fill="white"/>
        <circle cx="50" cy="50" r="6" fill="#333"/>
      </svg>
    </div>

    <!-- Lab Morteros Ed.1: Render 46 (Sureste) -->
    <div id="camara-morteros1-46" class="camara-render"
         style="display:none; position:absolute; top:23.07%; left:35.65%; transform:translate(-50%, -50%) rotate(135deg);"
         onclick="abrirRender('assets/46.webp', this)">
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" stroke="white" stroke-width="4">
        <path d="M50 40 L20 10 A 45 45 0 0 1 80 10 Z" fill="rgba(255,255,255,0.4)" stroke="none"/>
        <circle cx="50" cy="50" r="12" fill="white"/>
        <circle cx="50" cy="50" r="6" fill="#333"/>
      </svg>
    </div>

    <!-- Lab Morteros Ed.1: Render 47 (Este) -->
    <div id="camara-morteros1-47" class="camara-render"
         style="display:none; position:absolute; top:71.65%; left:75.02%; transform:translate(-50%, -50%) rotate(90deg);"
         onclick="abrirRender('assets/47.webp', this)">
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" stroke="white" stroke-width="4">
        <path d="M50 40 L20 10 A 45 45 0 0 1 80 10 Z" fill="rgba(255,255,255,0.4)" stroke="none"/>
        <circle cx="50" cy="50" r="12" fill="white"/>
        <circle cx="50" cy="50" r="6" fill="#333"/>
      </svg>
    </div>

    <!-- Lab Morteros Ed.1: Render 48 (Noroeste) -->
    <div id="camara-morteros1-48" class="camara-render"
         style="display:none; position:absolute; top:71.65%; left:75.02%; transform:translate(-50%, -50%) rotate(-45deg);"
         onclick="abrirRender('assets/48.webp', this)">
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" stroke="white" stroke-width="4">
        <path d="M50 40 L20 10 A 45 45 0 0 1 80 10 Z" fill="rgba(255,255,255,0.4)" stroke="none"/>
        <circle cx="50" cy="50" r="12" fill="white"/>
        <circle cx="50" cy="50" r="6" fill="#333"/>
      </svg>
    </div>

    <!-- Lab Conservación Prev Ed.1: Render 39 (Oeste–Noroeste) -->
    <div id="camara-conservprev1-39" class="camara-render"
         style="display:none; position:absolute; top:58.87%; left:29.42%; transform:translate(-50%, -50%) rotate(292.5deg);"
         onclick="abrirRender('assets/39.webp', this)">
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" stroke="white" stroke-width="4">
        <path d="M50 40 L20 10 A 45 45 0 0 1 80 10 Z" fill="rgba(255,255,255,0.4)" stroke="none"/>
        <circle cx="50" cy="50" r="12" fill="white"/>
        <circle cx="50" cy="50" r="6" fill="#333"/>
      </svg>
    </div>

    <!-- Lab Conservación Prev Ed.1: Render 40 (Este) -->
    <div id="camara-conservprev1-40" class="camara-render"
         style="display:none; position:absolute; top:43.22%; left:38.00%; transform:translate(-50%, -50%) rotate(90deg);"
         onclick="abrirRender('assets/40.webp', this)">
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" stroke="white" stroke-width="4">
        <path d="M50 40 L20 10 A 45 45 0 0 1 80 10 Z" fill="rgba(255,255,255,0.4)" stroke="none"/>
        <circle cx="50" cy="50" r="12" fill="white"/>
        <circle cx="50" cy="50" r="6" fill="#333"/>
      </svg>
    </div>

    <!-- Lab Conservación Prev Ed.1: Render 41 (Oeste) -->
    <div id="camara-conservprev1-41" class="camara-render"
         style="display:none; position:absolute; top:40.73%; left:72.50%; transform:translate(-50%, -50%) rotate(270deg);"
         onclick="abrirRender('assets/41.webp', this)">
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" stroke="white" stroke-width="4">
        <path d="M50 40 L20 10 A 45 45 0 0 1 80 10 Z" fill="rgba(255,255,255,0.4)" stroke="none"/>
        <circle cx="50" cy="50" r="12" fill="white"/>
        <circle cx="50" cy="50" r="6" fill="#333"/>
      </svg>
    </div>

    <!-- Lab Conservación Prev Ed.1: Render 42 (Oeste–Noroeste) -->
    <div id="camara-conservprev1-42" class="camara-render"
         style="display:none; position:absolute; top:65.14%; left:72.17%; transform:translate(-50%, -50%) rotate(292.5deg);"
         onclick="abrirRender('assets/42.webp', this)">
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" stroke="white" stroke-width="4">
        <path d="M50 40 L20 10 A 45 45 0 0 1 80 10 Z" fill="rgba(255,255,255,0.4)" stroke="none"/>
        <circle cx="50" cy="50" r="12" fill="white"/>
        <circle cx="50" cy="50" r="6" fill="#333"/>
      </svg>
    </div>`;

/* ═════════ EDIFICIO 2 ═════════ */
const camerasEdificio2 = `
    <!-- Exposición Permanente Ed.2: Render 102 (Suroeste) -->
    <div id="camara-permanente2-102" class="camara-render"
         style="display:none; position:absolute; top:46.23%; left:78.85%; transform:translate(-50%, -50%) rotate(-135deg);"
         onclick="abrirRender('assets/102.webp', this)">
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" stroke="white" stroke-width="4">
        <path d="M50 40 L20 10 A 45 45 0 0 1 80 10 Z" fill="rgba(255,255,255,0.4)" stroke="none"/>
        <circle cx="50" cy="50" r="12" fill="white"/>
        <circle cx="50" cy="50" r="6" fill="#333"/>
      </svg>
    </div>

    <!-- Exposición Permanente Ed.2: Render 103 (Sureste) -->
    <div id="camara-permanente2-103" class="camara-render"
         style="display:none; position:absolute; top:43.87%; left:54.30%; transform:translate(-50%, -50%) rotate(135deg);"
         onclick="abrirRender('assets/103.webp', this)">
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" stroke="white" stroke-width="4">
        <path d="M50 40 L20 10 A 45 45 0 0 1 80 10 Z" fill="rgba(255,255,255,0.4)" stroke="none"/>
        <circle cx="50" cy="50" r="12" fill="white"/>
        <circle cx="50" cy="50" r="6" fill="#333"/>
      </svg>
    </div>

    <!-- Exposición Permanente Ed.2: Render 104 (Este) -->
    <div id="camara-permanente2-104" class="camara-render"
         style="display:none; position:absolute; top:73.20%; left:27.89%; transform:translate(-50%, -50%) rotate(90deg);"
         onclick="abrirRender('assets/104.webp', this)">
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" stroke="white" stroke-width="4">
        <path d="M50 40 L20 10 A 45 45 0 0 1 80 10 Z" fill="rgba(255,255,255,0.4)" stroke="none"/>
        <circle cx="50" cy="50" r="12" fill="white"/>
        <circle cx="50" cy="50" r="6" fill="#333"/>
      </svg>
    </div>

    <!-- Exposición Permanente Ed.2: Render 105 (Norte) -->
    <div id="camara-permanente2-105" class="camara-render"
         style="display:none; position:absolute; top:74.14%; left:26.25%; transform:translate(-50%, -50%) rotate(0deg);"
         onclick="abrirRender('assets/105.webp', this)">
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" stroke="white" stroke-width="4">
        <path d="M50 40 L20 10 A 45 45 0 0 1 80 10 Z" fill="rgba(255,255,255,0.4)" stroke="none"/>
        <circle cx="50" cy="50" r="12" fill="white"/>
        <circle cx="50" cy="50" r="6" fill="#333"/>
      </svg>
    </div>

    <!-- Exposición Permanente Ed.2: Render 106 (Este) -->
    <div id="camara-permanente2-106" class="camara-render"
         style="display:none; position:absolute; top:58.23%; left:26.19%; transform:translate(-50%, -50%) rotate(90deg);"
         onclick="abrirRender('assets/106.webp', this)">
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" stroke="white" stroke-width="4">
        <path d="M50 40 L20 10 A 45 45 0 0 1 80 10 Z" fill="rgba(255,255,255,0.4)" stroke="none"/>
        <circle cx="50" cy="50" r="12" fill="white"/>
        <circle cx="50" cy="50" r="6" fill="#333"/>
      </svg>
    </div>

    <!-- Exposición Permanente Ed.2: Render 107 (Oeste) -->
    <div id="camara-permanente2-107" class="camara-render"
         style="display:none; position:absolute; top:47.02%; left:51.94%; transform:translate(-50%, -50%) rotate(270deg);"
         onclick="abrirRender('assets/107.webp', this)">
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" stroke="white" stroke-width="4">
        <path d="M50 40 L20 10 A 45 45 0 0 1 80 10 Z" fill="rgba(255,255,255,0.4)" stroke="none"/>
        <circle cx="50" cy="50" r="12" fill="white"/>
        <circle cx="50" cy="50" r="6" fill="#333"/>
      </svg>
    </div>

    <!-- Exposición Permanente Ed.2: Render 108 (Norte–Noreste) -->
    <div id="camara-permanente2-108" class="camara-render"
         style="display:none; position:absolute; top:38.52%; left:43.36%; transform:translate(-50%, -50%) rotate(22.5deg);"
         onclick="abrirRender('assets/108.webp', this)">
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" stroke="white" stroke-width="4">
        <path d="M50 40 L20 10 A 45 45 0 0 1 80 10 Z" fill="rgba(255,255,255,0.4)" stroke="none"/>
        <circle cx="50" cy="50" r="12" fill="white"/>
        <circle cx="50" cy="50" r="6" fill="#333"/>
      </svg>
    </div>

    <!-- Exposición Temporal Ed.2: Render 109 (Sureste) -->
    <div id="camara-temporal2-109" class="camara-render"
         style="display:none; position:absolute; top:31.32%; left:42.59%; transform:translate(-50%, -50%) rotate(135deg);"
         onclick="abrirRender('assets/109.webp', this)">
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" stroke="white" stroke-width="4">
        <path d="M50 40 L20 10 A 45 45 0 0 1 80 10 Z" fill="rgba(255,255,255,0.4)" stroke="none"/>
        <circle cx="50" cy="50" r="12" fill="white"/>
        <circle cx="50" cy="50" r="6" fill="#333"/>
      </svg>
    </div>

    <!-- Exposición Temporal Ed.2: Render 110 (Noreste) -->
    <div id="camara-temporal2-110" class="camara-render"
         style="display:none; position:absolute; top:65.10%; left:30.07%; transform:translate(-50%, -50%) rotate(45deg);"
         onclick="abrirRender('assets/110.webp', this)">
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" stroke="white" stroke-width="4">
        <path d="M50 40 L20 10 A 45 45 0 0 1 80 10 Z" fill="rgba(255,255,255,0.4)" stroke="none"/>
        <circle cx="50" cy="50" r="12" fill="white"/>
        <circle cx="50" cy="50" r="6" fill="#333"/>
      </svg>
    </div>

    <!-- Exposición Temporal Ed.2: Render 111 (Sureste) -->
    <div id="camara-temporal2-111" class="camara-render"
         style="display:none; position:absolute; top:46.63%; left:75.29%; transform:translate(-50%, -50%) rotate(135deg);"
         onclick="abrirRender('assets/111.webp', this)">
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" stroke="white" stroke-width="4">
        <path d="M50 40 L20 10 A 45 45 0 0 1 80 10 Z" fill="rgba(255,255,255,0.4)" stroke="none"/>
        <circle cx="50" cy="50" r="12" fill="white"/>
        <circle cx="50" cy="50" r="6" fill="#333"/>
      </svg>
    </div>

    <!-- Exposición Temporal Ed.2: Render 112 (Suroeste) -->
    <div id="camara-temporal2-112" class="camara-render"
         style="display:none; position:absolute; top:42.92%; left:67.91%; transform:translate(-50%, -50%) rotate(-135deg);"
         onclick="abrirRender('assets/112.webp', this)">
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" stroke="white" stroke-width="4">
        <path d="M50 40 L20 10 A 45 45 0 0 1 80 10 Z" fill="rgba(255,255,255,0.4)" stroke="none"/>
        <circle cx="50" cy="50" r="12" fill="white"/>
        <circle cx="50" cy="50" r="6" fill="#333"/>
      </svg>
    </div>

    <!-- Mediateca Ed.2: Render 114 (Norte–Noroeste) -->
    <div id="camara-mediateca2-114" class="camara-render"
         style="display:none; position:absolute; top:65.04%; left:49.76%; transform:translate(-50%, -50%) rotate(-22.5deg);"
         onclick="abrirRender('assets/114.webp', this)">
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" stroke="white" stroke-width="4">
        <path d="M50 40 L20 10 A 45 45 0 0 1 80 10 Z" fill="rgba(255,255,255,0.4)" stroke="none"/>
        <circle cx="50" cy="50" r="12" fill="white"/>
        <circle cx="50" cy="50" r="6" fill="#333"/>
      </svg>
    </div>

    <!-- Mediateca Ed.2: Render 115 (Sureste) -->
    <div id="camara-mediateca2-115" class="camara-render"
         style="display:none; position:absolute; top:34.44%; left:23.62%; transform:translate(-50%, -50%) rotate(135deg);"
         onclick="abrirRender('assets/115.webp', this)">
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" stroke="white" stroke-width="4">
        <path d="M50 40 L20 10 A 45 45 0 0 1 80 10 Z" fill="rgba(255,255,255,0.4)" stroke="none"/>
        <circle cx="50" cy="50" r="12" fill="white"/>
        <circle cx="50" cy="50" r="6" fill="#333"/>
      </svg>
    </div>

    <!-- Mediateca Ed.2: Render 116 (Noroeste) -->
    <div id="camara-mediateca2-116" class="camara-render"
         style="display:none; position:absolute; top:39.23%; left:78.24%; transform:translate(-50%, -50%) rotate(-45deg);"
         onclick="abrirRender('assets/116.webp', this)">
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" stroke="white" stroke-width="4">
        <path d="M50 40 L20 10 A 45 45 0 0 1 80 10 Z" fill="rgba(255,255,255,0.4)" stroke="none"/>
        <circle cx="50" cy="50" r="12" fill="white"/>
        <circle cx="50" cy="50" r="6" fill="#333"/>
      </svg>
    </div>

    <!-- Mediateca Ed.2: Render 117 (Sur–Sureste) -->
    <div id="camara-mediateca2-117" class="camara-render"
         style="display:none; position:absolute; top:44.69%; left:71.46%; transform:translate(-50%, -50%) rotate(157.5deg);"
         onclick="abrirRender('assets/117.webp', this)">
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" stroke="white" stroke-width="4">
        <path d="M50 40 L20 10 A 45 45 0 0 1 80 10 Z" fill="rgba(255,255,255,0.4)" stroke="none"/>
        <circle cx="50" cy="50" r="12" fill="white"/>
        <circle cx="50" cy="50" r="6" fill="#333"/>
      </svg>
    </div>

    <!-- Mediateca Ed.2: Render 118 (Noroeste) -->
    <div id="camara-mediateca2-118" class="camara-render"
         style="display:none; position:absolute; top:64.78%; left:76.49%; transform:translate(-50%, -50%) rotate(-45deg);"
         onclick="abrirRender('assets/118.webp', this)">
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" stroke="white" stroke-width="4">
        <path d="M50 40 L20 10 A 45 45 0 0 1 80 10 Z" fill="rgba(255,255,255,0.4)" stroke="none"/>
        <circle cx="50" cy="50" r="12" fill="white"/>
        <circle cx="50" cy="50" r="6" fill="#333"/>
      </svg>
    </div>

    <!-- Almacén Ed.2: Render 120 (Noreste) -->
    <div id="camara-almacen2-120" class="camara-render"
         style="display:none; position:absolute; top:65.59%; left:38.99%; transform:translate(-50%, -50%) rotate(45deg);"
         onclick="abrirRender('assets/120.webp', this)">
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" stroke="white" stroke-width="4">
        <path d="M50 40 L20 10 A 45 45 0 0 1 80 10 Z" fill="rgba(255,255,255,0.4)" stroke="none"/>
        <circle cx="50" cy="50" r="12" fill="white"/>
        <circle cx="50" cy="50" r="6" fill="#333"/>
      </svg>
    </div>

    <!-- Cafetería Ed.2: Render 92 (Oeste) -->
    <div id="camara-cafeteria2-92" class="camara-render"
         style="display:none; position:absolute; top:22.96%; left:69.00%; transform:translate(-50%, -50%) rotate(270deg);"
         onclick="abrirRender('assets/92.webp', this)">
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" stroke="white" stroke-width="4">
        <path d="M50 40 L20 10 A 45 45 0 0 1 80 10 Z" fill="rgba(255,255,255,0.4)" stroke="none"/>
        <circle cx="50" cy="50" r="12" fill="white"/>
        <circle cx="50" cy="50" r="6" fill="#333"/>
      </svg>
    </div>

    <!-- Cafetería Ed.2: Render 93 (Sur–Suroeste) -->
    <div id="camara-cafeteria2-93" class="camara-render"
         style="display:none; position:absolute; top:24.31%; left:69.33%; transform:translate(-50%, -50%) rotate(202.5deg);"
         onclick="abrirRender('assets/93.webp', this)">
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" stroke="white" stroke-width="4">
        <path d="M50 40 L20 10 A 45 45 0 0 1 80 10 Z" fill="rgba(255,255,255,0.4)" stroke="none"/>
        <circle cx="50" cy="50" r="12" fill="white"/>
        <circle cx="50" cy="50" r="6" fill="#333"/>
      </svg>
    </div>

    <!-- Cafetería Ed.2: Render 94 (Este–Sureste) -->
    <div id="camara-cafeteria2-94" class="camara-render"
         style="display:none; position:absolute; top:30.78%; left:28.87%; transform:translate(-50%, -50%) rotate(112.5deg);"
         onclick="abrirRender('assets/94.webp', this)">
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" stroke="white" stroke-width="4">
        <path d="M50 40 L20 10 A 45 45 0 0 1 80 10 Z" fill="rgba(255,255,255,0.4)" stroke="none"/>
        <circle cx="50" cy="50" r="12" fill="white"/>
        <circle cx="50" cy="50" r="6" fill="#333"/>
      </svg>
    </div>

    <!-- Cafetería Ed.2: Render 95 (Este) -->
    <div id="camara-cafeteria2-95" class="camara-render"
         style="display:none; position:absolute; top:59.03%; left:33.41%; transform:translate(-50%, -50%) rotate(90deg);"
         onclick="abrirRender('assets/95.webp', this)">
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" stroke="white" stroke-width="4">
        <path d="M50 40 L20 10 A 45 45 0 0 1 80 10 Z" fill="rgba(255,255,255,0.4)" stroke="none"/>
        <circle cx="50" cy="50" r="12" fill="white"/>
        <circle cx="50" cy="50" r="6" fill="#333"/>
      </svg>
    </div>

    <!-- Cafetería Ed.2: Render 96 (Norte) -->
    <div id="camara-cafeteria2-96" class="camara-render"
         style="display:none; position:absolute; top:77.64%; left:53.42%; transform:translate(-50%, -50%) rotate(0deg);"
         onclick="abrirRender('assets/96.webp', this)">
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" stroke="white" stroke-width="4">
        <path d="M50 40 L20 10 A 45 45 0 0 1 80 10 Z" fill="rgba(255,255,255,0.4)" stroke="none"/>
        <circle cx="50" cy="50" r="12" fill="white"/>
        <circle cx="50" cy="50" r="6" fill="#333"/>
      </svg>
    </div>

    <!-- Cafetería Ed.2: Render 99 (Sur) -->
    <div id="camara-cafeteria2-99" class="camara-render"
         style="display:none; position:absolute; top:57.47%; left:68.89%; transform:translate(-50%, -50%) rotate(180deg);"
         onclick="abrirRender('assets/99.webp', this)">
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" stroke="white" stroke-width="4">
        <path d="M50 40 L20 10 A 45 45 0 0 1 80 10 Z" fill="rgba(255,255,255,0.4)" stroke="none"/>
        <circle cx="50" cy="50" r="12" fill="white"/>
        <circle cx="50" cy="50" r="6" fill="#333"/>
      </svg>
    </div>

    <!-- Cocineta Ed.2: Render 97 (Este) -->
    <div id="camara-cocineta2-97" class="camara-render"
         style="display:none; position:absolute; top:35.09%; left:33.74%; transform:translate(-50%, -50%) rotate(90deg);"
         onclick="abrirRender('assets/97.webp', this)">
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" stroke="white" stroke-width="4">
        <path d="M50 40 L20 10 A 45 45 0 0 1 80 10 Z" fill="rgba(255,255,255,0.4)" stroke="none"/>
        <circle cx="50" cy="50" r="12" fill="white"/>
        <circle cx="50" cy="50" r="6" fill="#333"/>
      </svg>
    </div>

    <!-- Cocineta Ed.2: Render 98 (Norte–Noroeste) -->
    <div id="camara-cocineta2-98" class="camara-render"
         style="display:none; position:absolute; top:34.82%; left:61.29%; transform:translate(-50%, -50%) rotate(-22.5deg);"
         onclick="abrirRender('assets/98.webp', this)">
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" stroke="white" stroke-width="4">
        <path d="M50 40 L20 10 A 45 45 0 0 1 80 10 Z" fill="rgba(255,255,255,0.4)" stroke="none"/>
        <circle cx="50" cy="50" r="12" fill="white"/>
        <circle cx="50" cy="50" r="6" fill="#333"/>
      </svg>
    </div>

    <!-- Auditorio Ed.2: Render 85 (Este–Sureste) -->
    <div id="camara-auditorio2-85" class="camara-render"
         style="display:none; position:absolute; top:27.00%; left:33.52%; transform:translate(-50%, -50%) rotate(112.5deg);"
         onclick="abrirRender('assets/85.webp', this)">
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" stroke="white" stroke-width="4">
        <path d="M50 40 L20 10 A 45 45 0 0 1 80 10 Z" fill="rgba(255,255,255,0.4)" stroke="none"/>
        <circle cx="50" cy="50" r="12" fill="white"/>
        <circle cx="50" cy="50" r="6" fill="#333"/>
      </svg>
    </div>

    <!-- Auditorio Ed.2: Render 86 (Este–Noreste) -->
    <div id="camara-auditorio2-86" class="camara-render"
         style="display:none; position:absolute; top:76.89%; left:17.50%; transform:translate(-50%, -50%) rotate(67.5deg);"
         onclick="abrirRender('assets/86.webp', this)">
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" stroke="white" stroke-width="4">
        <path d="M50 40 L20 10 A 45 45 0 0 1 80 10 Z" fill="rgba(255,255,255,0.4)" stroke="none"/>
        <circle cx="50" cy="50" r="12" fill="white"/>
        <circle cx="50" cy="50" r="6" fill="#333"/>
      </svg>
    </div>

    <!-- Auditorio Ed.2: Render 87 (Noreste) -->
    <div id="camara-auditorio2-87" class="camara-render"
         style="display:none; position:absolute; top:73.93%; left:60.75%; transform:translate(-50%, -50%) rotate(45deg);"
         onclick="abrirRender('assets/87.webp', this)">
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" stroke="white" stroke-width="4">
        <path d="M50 40 L20 10 A 45 45 0 0 1 80 10 Z" fill="rgba(255,255,255,0.4)" stroke="none"/>
        <circle cx="50" cy="50" r="12" fill="white"/>
        <circle cx="50" cy="50" r="6" fill="#333"/>
      </svg>
    </div>

    <!-- Auditorio Ed.2: Render 89 (Oeste) -->
    <div id="camara-auditorio2-89" class="camara-render"
         style="display:none; position:absolute; top:62.53%; left:72.07%; transform:translate(-50%, -50%) rotate(270deg);"
         onclick="abrirRender('assets/89.webp', this)">
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" stroke="white" stroke-width="4">
        <path d="M50 40 L20 10 A 45 45 0 0 1 80 10 Z" fill="rgba(255,255,255,0.4)" stroke="none"/>
        <circle cx="50" cy="50" r="12" fill="white"/>
        <circle cx="50" cy="50" r="6" fill="#333"/>
      </svg>
    </div>

    <!-- Auditorio Ed.2: Render 90 (Oeste–Suroeste) -->
    <div id="camara-auditorio2-90" class="camara-render"
         style="display:none; position:absolute; top:28.15%; left:67.20%; transform:translate(-50%, -50%) rotate(247.5deg);"
         onclick="abrirRender('assets/90.webp', this)">
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" stroke="white" stroke-width="4">
        <path d="M50 40 L20 10 A 45 45 0 0 1 80 10 Z" fill="rgba(255,255,255,0.4)" stroke="none"/>
        <circle cx="50" cy="50" r="12" fill="white"/>
        <circle cx="50" cy="50" r="6" fill="#333"/>
      </svg>
    </div>

    <!-- Auditorio Ed.2: Render 91 (Este) -->
    <div id="camara-auditorio2-91" class="camara-render"
         style="display:none; position:absolute; top:23.56%; left:21.82%; transform:translate(-50%, -50%) rotate(90deg);"
         onclick="abrirRender('assets/91.webp', this)">
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" stroke="white" stroke-width="4">
        <path d="M50 40 L20 10 A 45 45 0 0 1 80 10 Z" fill="rgba(255,255,255,0.4)" stroke="none"/>
        <circle cx="50" cy="50" r="12" fill="white"/>
        <circle cx="50" cy="50" r="6" fill="#333"/>
      </svg>
    </div>

    <!-- Vestíbulo Ed.2: Render 82 (Suroeste) -->
    <div id="camara-vestibulo2-82" class="camara-render"
         style="display:none; position:absolute; top:44.67%; left:56.76%; transform:translate(-50%, -50%) rotate(-135deg);"
         onclick="abrirRender('assets/82.webp', this)">
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" stroke="white" stroke-width="4">
        <path d="M50 40 L20 10 A 45 45 0 0 1 80 10 Z" fill="rgba(255,255,255,0.4)" stroke="none"/>
        <circle cx="50" cy="50" r="12" fill="white"/>
        <circle cx="50" cy="50" r="6" fill="#333"/>
      </svg>
    </div>

    <!-- Vestíbulo Ed.2: Render 83 (Sur) -->
    <div id="camara-vestibulo2-83" class="camara-render"
         style="display:none; position:absolute; top:27.41%; left:42.92%; transform:translate(-50%, -50%) rotate(180deg);"
         onclick="abrirRender('assets/83.webp', this)">
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" stroke="white" stroke-width="4">
        <path d="M50 40 L20 10 A 45 45 0 0 1 80 10 Z" fill="rgba(255,255,255,0.4)" stroke="none"/>
        <circle cx="50" cy="50" r="12" fill="white"/>
        <circle cx="50" cy="50" r="6" fill="#333"/>
      </svg>
    </div>

    <!-- Vestíbulo Ed.2: Render 84 (Norte–Noroeste) -->
    <div id="camara-vestibulo2-84" class="camara-render"
         style="display:none; position:absolute; top:80.00%; left:59.54%; transform:translate(-50%, -50%) rotate(-22.5deg);"
         onclick="abrirRender('assets/84.webp', this)">
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" stroke="white" stroke-width="4">
        <path d="M50 40 L20 10 A 45 45 0 0 1 80 10 Z" fill="rgba(255,255,255,0.4)" stroke="none"/>
        <circle cx="50" cy="50" r="12" fill="white"/>
        <circle cx="50" cy="50" r="6" fill="#333"/>
      </svg>
    </div>

    <!-- Vestíbulo Ed.2: Render 100 (Noroeste) -->
    <div id="camara-vestibulo2-100" class="camara-render"
         style="display:none; position:absolute; top:22.95%; left:45.11%; transform:translate(-50%, -50%) rotate(-45deg);"
         onclick="abrirRender('assets/100.webp', this)">
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" stroke="white" stroke-width="4">
        <path d="M50 40 L20 10 A 45 45 0 0 1 80 10 Z" fill="rgba(255,255,255,0.4)" stroke="none"/>
        <circle cx="50" cy="50" r="12" fill="white"/>
        <circle cx="50" cy="50" r="6" fill="#333"/>
      </svg>
    </div>

    <!-- Vestíbulo Ed.2: Render 113 (Noreste) -->
    <div id="camara-vestibulo2-113" class="camara-render"
         style="display:none; position:absolute; top:0.29%; left:55.83%; transform:translate(-50%, -50%) rotate(45deg);"
         onclick="abrirRender('assets/113.webp', this)">
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" stroke="white" stroke-width="4">
        <path d="M50 40 L20 10 A 45 45 0 0 1 80 10 Z" fill="rgba(255,255,255,0.4)" stroke="none"/>
        <circle cx="50" cy="50" r="12" fill="white"/>
        <circle cx="50" cy="50" r="6" fill="#333"/>
      </svg>
    </div>

    <!-- Vestíbulo Ed.2: Render 121 (Suroeste) -->
    <div id="camara-vestibulo2-121" class="camara-render"
         style="display:none; position:absolute; top:1.30%; left:53.75%; transform:translate(-50%, -50%) rotate(-135deg);"
         onclick="abrirRender('assets/121.webp', this)">
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" stroke="white" stroke-width="4">
        <path d="M50 40 L20 10 A 45 45 0 0 1 80 10 Z" fill="rgba(255,255,255,0.4)" stroke="none"/>
        <circle cx="50" cy="50" r="12" fill="white"/>
        <circle cx="50" cy="50" r="6" fill="#333"/>
      </svg>
    </div>

    <!-- Vestíbulo Ed.2: Render 122 (Sur–Sureste) -->
    <div id="camara-vestibulo2-122" class="camara-render"
         style="display:none; position:absolute; top:41.01%; left:48.28%; transform:translate(-50%, -50%) rotate(157.5deg);"
         onclick="abrirRender('assets/122.webp', this)">
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" stroke="white" stroke-width="4">
        <path d="M50 40 L20 10 A 45 45 0 0 1 80 10 Z" fill="rgba(255,255,255,0.4)" stroke="none"/>
        <circle cx="50" cy="50" r="12" fill="white"/>
        <circle cx="50" cy="50" r="6" fill="#333"/>
      </svg>
    </div>

    <!-- Sanitarios Ed.2: Render 124.1 (Sur) -->
    <div id="camara-sanitarios2-124-1" class="camara-render"
         style="display:none; position:absolute; top:40.87%; left:48.77%; transform:translate(-50%, -50%) rotate(180deg);"
         onclick="abrirRender('assets/124.1.webp', this)">
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" stroke="white" stroke-width="4">
        <path d="M50 40 L20 10 A 45 45 0 0 1 80 10 Z" fill="rgba(255,255,255,0.4)" stroke="none"/>
        <circle cx="50" cy="50" r="12" fill="white"/>
        <circle cx="50" cy="50" r="6" fill="#333"/>
      </svg>
    </div>

    <!-- Sanitarios Ed.2: Render 125.1 (Sur) -->
    <div id="camara-sanitarios2-125-1" class="camara-render"
         style="display:none; position:absolute; top:49.43%; left:21.32%; transform:translate(-50%, -50%) rotate(180deg);"
         onclick="abrirRender('assets/125.1.webp', this)">
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" stroke="white" stroke-width="4">
        <path d="M50 40 L20 10 A 45 45 0 0 1 80 10 Z" fill="rgba(255,255,255,0.4)" stroke="none"/>
        <circle cx="50" cy="50" r="12" fill="white"/>
        <circle cx="50" cy="50" r="6" fill="#333"/>
      </svg>
    </div>`;

/* ═════════ EDIFICIO 3 ═════════ */
const camerasEdificio3 = `
    <!-- Oficinas: Render 151 (Sur) -->
    <div id="camara-oficinas-sur" class="camara-render"
         style="display:none; position:absolute; top:66.73%; left:48.94%; transform:translate(-50%, -50%) rotate(180deg);"
         onclick="abrirRender('assets/151.webp', this)">
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" stroke="white" stroke-width="4">
        <path d="M50 40 L20 10 A 45 45 0 0 1 80 10 Z" fill="rgba(255,255,255,0.4)" stroke="none"/>
        <circle cx="50" cy="50" r="12" fill="white"/>
        <circle cx="50" cy="50" r="6" fill="#333"/>
      </svg>
    </div>

    <!-- Oficinas: Render 150 (Sur) -->
    <div id="camara-oficinas-150" class="camara-render"
         style="display:none; position:absolute; top:72.50%; left:55.02%; transform:translate(-50%, -50%) rotate(180deg);"
         onclick="abrirRender('assets/150.webp', this)">
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" stroke="white" stroke-width="4">
        <path d="M50 40 L20 10 A 45 45 0 0 1 80 10 Z" fill="rgba(255,255,255,0.4)" stroke="none"/>
        <circle cx="50" cy="50" r="12" fill="white"/>
        <circle cx="50" cy="50" r="6" fill="#333"/>
      </svg>
    </div>

    <!-- Oficinas: Render 149 (Sureste) -->
    <div id="camara-oficinas-149" class="camara-render"
         style="display:none; position:absolute; top:63.10%; left:67.00%; transform:translate(-50%, -50%) rotate(135deg);"
         onclick="abrirRender('assets/149.webp', this)">
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" stroke="white" stroke-width="4">
        <path d="M50 40 L20 10 A 45 45 0 0 1 80 10 Z" fill="rgba(255,255,255,0.4)" stroke="none"/>
        <circle cx="50" cy="50" r="12" fill="white"/>
        <circle cx="50" cy="50" r="6" fill="#333"/>
      </svg>
    </div>

    <!-- Oficinas: Render 148 (Sureste) -->
    <div id="camara-oficinas-148" class="camara-render"
         style="display:none; position:absolute; top:67.76%; left:34.54%; transform:translate(-50%, -50%) rotate(135deg);"
         onclick="abrirRender('assets/148.webp', this)">
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" stroke="white" stroke-width="4">
        <path d="M50 40 L20 10 A 45 45 0 0 1 80 10 Z" fill="rgba(255,255,255,0.4)" stroke="none"/>
        <circle cx="50" cy="50" r="12" fill="white"/>
        <circle cx="50" cy="50" r="6" fill="#333"/>
      </svg>
    </div>

    <!-- Oficinas: Render 147 (Este) -->
    <div id="camara-oficinas-147" class="camara-render"
         style="display:none; position:absolute; top:51.58%; left:73.97%; transform:translate(-50%, -50%) rotate(90deg);"
         onclick="abrirRender('assets/147.webp', this)">
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" stroke="white" stroke-width="4">
        <path d="M50 40 L20 10 A 45 45 0 0 1 80 10 Z" fill="rgba(255,255,255,0.4)" stroke="none"/>
        <circle cx="50" cy="50" r="12" fill="white"/>
        <circle cx="50" cy="50" r="6" fill="#333"/>
      </svg>
    </div>

    <!-- Oficinas: Render 146 (Sur) -->
    <div id="camara-oficinas-146" class="camara-render"
         style="display:none; position:absolute; top:18.98%; left:60.82%; transform:translate(-50%, -50%) rotate(180deg);"
         onclick="abrirRender('assets/146.webp', this)">
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" stroke="white" stroke-width="4">
        <path d="M50 40 L20 10 A 45 45 0 0 1 80 10 Z" fill="rgba(255,255,255,0.4)" stroke="none"/>
        <circle cx="50" cy="50" r="12" fill="white"/>
        <circle cx="50" cy="50" r="6" fill="#333"/>
      </svg>
    </div>

    <!-- Oficinas: Render 145 (Sureste) -->
    <div id="camara-oficinas-145" class="camara-render"
         style="display:none; position:absolute; top:18.53%; left:35.03%; transform:translate(-50%, -50%) rotate(135deg);"
         onclick="abrirRender('assets/145.webp', this)">
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" stroke="white" stroke-width="4">
        <path d="M50 40 L20 10 A 45 45 0 0 1 80 10 Z" fill="rgba(255,255,255,0.4)" stroke="none"/>
        <circle cx="50" cy="50" r="12" fill="white"/>
        <circle cx="50" cy="50" r="6" fill="#333"/>
      </svg>
    </div>

    <!-- Oficinas: Render 144 (Norte) -->
    <div id="camara-oficinas-144" class="camara-render"
         style="display:none; position:absolute; top:35.81%; left:35.25%; transform:translate(-50%, -50%) rotate(0deg);"
         onclick="abrirRender('assets/144.webp', this)">
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" stroke="white" stroke-width="4">
        <path d="M50 40 L20 10 A 45 45 0 0 1 80 10 Z" fill="rgba(255,255,255,0.4)" stroke="none"/>
        <circle cx="50" cy="50" r="12" fill="white"/>
        <circle cx="50" cy="50" r="6" fill="#333"/>
      </svg>
    </div>

    <!-- Oficinas: Render 143 (Norte) -->
    <div id="camara-oficinas-143" class="camara-render"
         style="display:none; position:absolute; top:45.37%; left:72.14%; transform:translate(-50%, -50%) rotate(0deg);"
         onclick="abrirRender('assets/143.webp', this)">
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" stroke="white" stroke-width="4">
        <path d="M50 40 L20 10 A 45 45 0 0 1 80 10 Z" fill="rgba(255,255,255,0.4)" stroke="none"/>
        <circle cx="50" cy="50" r="12" fill="white"/>
        <circle cx="50" cy="50" r="6" fill="#333"/>
      </svg>
    </div>

    <!-- Oficinas: Render 142 (Sur) -->
    <div id="camara-oficinas-142" class="camara-render"
         style="display:none; position:absolute; top:51.50%; left:61.02%; transform:translate(-50%, -50%) rotate(180deg);"
         onclick="abrirRender('assets/142.webp', this)">
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" stroke="white" stroke-width="4">
        <path d="M50 40 L20 10 A 45 45 0 0 1 80 10 Z" fill="rgba(255,255,255,0.4)" stroke="none"/>
        <circle cx="50" cy="50" r="12" fill="white"/>
        <circle cx="50" cy="50" r="6" fill="#333"/>
      </svg>
    </div>

    <!-- Oficinas: Render 141 (Noreste–Este) -->
    <div id="camara-oficinas-141" class="camara-render"
         style="display:none; position:absolute; top:59.83%; left:34.47%; transform:translate(-50%, -50%) rotate(68deg);"
         onclick="abrirRender('assets/141.webp', this)">
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" stroke="white" stroke-width="4">
        <path d="M50 40 L20 10 A 45 45 0 0 1 80 10 Z" fill="rgba(255,255,255,0.4)" stroke="none"/>
        <circle cx="50" cy="50" r="12" fill="white"/>
        <circle cx="50" cy="50" r="6" fill="#333"/>
      </svg>
    </div>

    <!-- Sanitarios Ed.3: Render 123 (Oeste) -->
    <div id="camara-sanitarios3-123" class="camara-render"
         style="display:none; position:absolute; top:82.51%; left:65.39%; transform:translate(-50%, -50%) rotate(270deg);"
         onclick="abrirRender('assets/123.webp', this)">
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" stroke="white" stroke-width="4">
        <path d="M50 40 L20 10 A 45 45 0 0 1 80 10 Z" fill="rgba(255,255,255,0.4)" stroke="none"/>
        <circle cx="50" cy="50" r="12" fill="white"/>
        <circle cx="50" cy="50" r="6" fill="#333"/>
      </svg>
    </div>

    <!-- Sanitarios Ed.3: Render 124 (Oeste) -->
    <div id="camara-sanitarios3-124" class="camara-render"
         style="display:none; position:absolute; top:52.97%; left:59.33%; transform:translate(-50%, -50%) rotate(270deg);"
         onclick="abrirRender('assets/124.webp', this)">
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" stroke="white" stroke-width="4">
        <path d="M50 40 L20 10 A 45 45 0 0 1 80 10 Z" fill="rgba(255,255,255,0.4)" stroke="none"/>
        <circle cx="50" cy="50" r="12" fill="white"/>
        <circle cx="50" cy="50" r="6" fill="#333"/>
      </svg>
    </div>

    <!-- Sanitarios Ed.3: Render 125 (Oeste) -->
    <div id="camara-sanitarios3-125" class="camara-render"
         style="display:none; position:absolute; top:80.15%; left:53.09%; transform:translate(-50%, -50%) rotate(270deg);"
         onclick="abrirRender('assets/125.webp', this)">
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" stroke="white" stroke-width="4">
        <path d="M50 40 L20 10 A 45 45 0 0 1 80 10 Z" fill="rgba(255,255,255,0.4)" stroke="none"/>
        <circle cx="50" cy="50" r="12" fill="white"/>
        <circle cx="50" cy="50" r="6" fill="#333"/>
      </svg>
    </div>

    <!-- Área Común Ed.3: Render 128 (Norte–Noreste) -->
    <div id="camara-areacomun3-128" class="camara-render"
         style="display:none; position:absolute; top:73.78%; left:42.54%; transform:translate(-50%, -50%) rotate(22.5deg);"
         onclick="abrirRender('assets/128.webp', this)">
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" stroke="white" stroke-width="4">
        <path d="M50 40 L20 10 A 45 45 0 0 1 80 10 Z" fill="rgba(255,255,255,0.4)" stroke="none"/>
        <circle cx="50" cy="50" r="12" fill="white"/>
        <circle cx="50" cy="50" r="6" fill="#333"/>
      </svg>
    </div>

    <!-- Área Común Ed.3: Render 129 (Norte–Noroeste) -->
    <div id="camara-areacomun3-129" class="camara-render"
         style="display:none; position:absolute; top:57.12%; left:54.19%; transform:translate(-50%, -50%) rotate(-22.5deg);"
         onclick="abrirRender('assets/129.webp', this)">
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" stroke="white" stroke-width="4">
        <path d="M50 40 L20 10 A 45 45 0 0 1 80 10 Z" fill="rgba(255,255,255,0.4)" stroke="none"/>
        <circle cx="50" cy="50" r="12" fill="white"/>
        <circle cx="50" cy="50" r="6" fill="#333"/>
      </svg>
    </div>

    <!-- Área Común Ed.3: Render 130 (Noroeste) -->
    <div id="camara-areacomun3-130" class="camara-render"
         style="display:none; position:absolute; top:37.70%; left:56.92%; transform:translate(-50%, -50%) rotate(-45deg);"
         onclick="abrirRender('assets/130.webp', this)">
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" stroke="white" stroke-width="4">
        <path d="M50 40 L20 10 A 45 45 0 0 1 80 10 Z" fill="rgba(255,255,255,0.4)" stroke="none"/>
        <circle cx="50" cy="50" r="12" fill="white"/>
        <circle cx="50" cy="50" r="6" fill="#333"/>
      </svg>
    </div>

    <!-- Vestíbulo Ed.3: Render 127 (Sur) -->
    <div id="camara-vestibulo3-127" class="camara-render"
         style="display:none; position:absolute; top:57.58%; left:45.66%; transform:translate(-50%, -50%) rotate(180deg);"
         onclick="abrirRender('assets/127.webp', this)">
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" stroke="white" stroke-width="4">
        <path d="M50 40 L20 10 A 45 45 0 0 1 80 10 Z" fill="rgba(255,255,255,0.4)" stroke="none"/>
        <circle cx="50" cy="50" r="12" fill="white"/>
        <circle cx="50" cy="50" r="6" fill="#333"/>
      </svg>
    </div>

    <!-- Vestíbulo Ed.3: Render 131 (Oeste) -->
    <div id="camara-vestibulo3-131" class="camara-render"
         style="display:none; position:absolute; top:52.28%; left:42.73%; transform:translate(-50%, -50%) rotate(270deg);"
         onclick="abrirRender('assets/131.webp', this)">
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" stroke="white" stroke-width="4">
        <path d="M50 40 L20 10 A 45 45 0 0 1 80 10 Z" fill="rgba(255,255,255,0.4)" stroke="none"/>
        <circle cx="50" cy="50" r="12" fill="white"/>
        <circle cx="50" cy="50" r="6" fill="#333"/>
      </svg>
    </div>

    <!-- Taller 1: Render 132 (Sur–Suroeste) -->
    <div id="camara-taller1-132" class="camara-render"
         style="display:none; position:absolute; top:31.04%; left:56.21%; transform:translate(-50%, -50%) rotate(202.5deg);"
         onclick="abrirRender('assets/132.webp', this)">
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" stroke="white" stroke-width="4">
        <path d="M50 40 L20 10 A 45 45 0 0 1 80 10 Z" fill="rgba(255,255,255,0.4)" stroke="none"/>
        <circle cx="50" cy="50" r="12" fill="white"/>
        <circle cx="50" cy="50" r="6" fill="#333"/>
      </svg>
    </div>

    <!-- Taller 1: Render 133 (Norte–Noreste) -->
    <div id="camara-taller1-133" class="camara-render"
         style="display:none; position:absolute; top:76.98%; left:37.02%; transform:translate(-50%, -50%) rotate(22.5deg);"
         onclick="abrirRender('assets/133.webp', this)">
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" stroke="white" stroke-width="4">
        <path d="M50 40 L20 10 A 45 45 0 0 1 80 10 Z" fill="rgba(255,255,255,0.4)" stroke="none"/>
        <circle cx="50" cy="50" r="12" fill="white"/>
        <circle cx="50" cy="50" r="6" fill="#333"/>
      </svg>
    </div>

    <!-- Taller 2: Render 134 (Norte–Noreste) -->
    <div id="camara-taller2-134" class="camara-render"
         style="display:none; position:absolute; top:75.82%; left:45.55%; transform:translate(-50%, -50%) rotate(22.5deg);"
         onclick="abrirRender('assets/134.webp', this)">
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" stroke="white" stroke-width="4">
        <path d="M50 40 L20 10 A 45 45 0 0 1 80 10 Z" fill="rgba(255,255,255,0.4)" stroke="none"/>
        <circle cx="50" cy="50" r="12" fill="white"/>
        <circle cx="50" cy="50" r="6" fill="#333"/>
      </svg>
    </div>

    <!-- Taller 2: Render 135 (Sur–Suroeste) -->
    <div id="camara-taller2-135" class="camara-render"
         style="display:none; position:absolute; top:23.36%; left:63.54%; transform:translate(-50%, -50%) rotate(202.5deg);"
         onclick="abrirRender('assets/135.webp', this)">
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" stroke="white" stroke-width="4">
        <path d="M50 40 L20 10 A 45 45 0 0 1 80 10 Z" fill="rgba(255,255,255,0.4)" stroke="none"/>
        <circle cx="50" cy="50" r="12" fill="white"/>
        <circle cx="50" cy="50" r="6" fill="#333"/>
      </svg>
    </div>

    <!-- Taller 4: Render 136 (Sur–Suroeste) -->
    <div id="camara-taller4-136" class="camara-render"
         style="display:none; position:absolute; top:24.89%; left:58.07%; transform:translate(-50%, -50%) rotate(202.5deg);"
         onclick="abrirRender('assets/136.webp', this)">
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" stroke="white" stroke-width="4">
        <path d="M50 40 L20 10 A 45 45 0 0 1 80 10 Z" fill="rgba(255,255,255,0.4)" stroke="none"/>
        <circle cx="50" cy="50" r="12" fill="white"/>
        <circle cx="50" cy="50" r="6" fill="#333"/>
      </svg>
    </div>

    <!-- Taller 4: Render 137 (Noreste) -->
    <div id="camara-taller4-137" class="camara-render"
         style="display:none; position:absolute; top:73.07%; left:38.88%; transform:translate(-50%, -50%) rotate(45deg);"
         onclick="abrirRender('assets/137.webp', this)">
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" stroke="white" stroke-width="4">
        <path d="M50 40 L20 10 A 45 45 0 0 1 80 10 Z" fill="rgba(255,255,255,0.4)" stroke="none"/>
        <circle cx="50" cy="50" r="12" fill="white"/>
        <circle cx="50" cy="50" r="6" fill="#333"/>
      </svg>
    </div>

    <!-- Taller 4: Render 138 (Noroeste) -->
    <div id="camara-taller4-138" class="camara-render"
         style="display:none; position:absolute; top:72.26%; left:57.85%; transform:translate(-50%, -50%) rotate(-45deg);"
         onclick="abrirRender('assets/138.webp', this)">
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" stroke="white" stroke-width="4">
        <path d="M50 40 L20 10 A 45 45 0 0 1 80 10 Z" fill="rgba(255,255,255,0.4)" stroke="none"/>
        <circle cx="50" cy="50" r="12" fill="white"/>
        <circle cx="50" cy="50" r="6" fill="#333"/>
      </svg>
    </div>

    <!-- Taller 3: Render 139 (Suroeste) -->
    <div id="camara-taller3-139" class="camara-render"
         style="display:none; position:absolute; top:23.50%; left:57.36%; transform:translate(-50%, -50%) rotate(-135deg);"
         onclick="abrirRender('assets/139.webp', this)">
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" stroke="white" stroke-width="4">
        <path d="M50 40 L20 10 A 45 45 0 0 1 80 10 Z" fill="rgba(255,255,255,0.4)" stroke="none"/>
        <circle cx="50" cy="50" r="12" fill="white"/>
        <circle cx="50" cy="50" r="6" fill="#333"/>
      </svg>
    </div>

    <!-- Taller 3: Render 140 (Noreste) -->
    <div id="camara-taller3-140" class="camara-render"
         style="display:none; position:absolute; top:50.26%; left:39.09%; transform:translate(-50%, -50%) rotate(45deg);"
         onclick="abrirRender('assets/140.webp', this)">
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" stroke="white" stroke-width="4">
        <path d="M50 40 L20 10 A 45 45 0 0 1 80 10 Z" fill="rgba(255,255,255,0.4)" stroke="none"/>
        <circle cx="50" cy="50" r="12" fill="white"/>
        <circle cx="50" cy="50" r="6" fill="#333"/>
      </svg>
    </div>`;

/* ═════════ EXTERIOR (Planta Conjunto) ═════════ */
/* Usar class="camara-render camara-exterior" — se muestran/ocultan con irAEscenaExterior / volverAInicio */
const camerasExterior = `
    <!-- Exterior: Render 58 (Este) -->
    <div id="camara-exterior-58" class="camara-render camara-exterior"
         style="display:none; position:absolute; top:68.22%; left:25.26%; transform:translate(-50%, -50%) rotate(90deg);"
         onclick="abrirRender('assets/58.webp', this)">
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" stroke="white" stroke-width="4">
        <path d="M50 40 L20 10 A 45 45 0 0 1 80 10 Z" fill="rgba(255,255,255,0.4)" stroke="none"/>
        <circle cx="50" cy="50" r="12" fill="white"/>
        <circle cx="50" cy="50" r="6" fill="#333"/>
      </svg>
    </div>

    <!-- Exterior: Render 156 (Noreste) -->
    <div id="camara-exterior-156" class="camara-render camara-exterior"
         style="display:none; position:absolute; top:89.51%; left:50.14%; transform:translate(-50%, -50%) rotate(45deg);"
         onclick="abrirRender('assets/156.webp', this)">
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" stroke="white" stroke-width="4">
        <path d="M50 40 L20 10 A 45 45 0 0 1 80 10 Z" fill="rgba(255,255,255,0.4)" stroke="none"/>
        <circle cx="50" cy="50" r="12" fill="white"/>
        <circle cx="50" cy="50" r="6" fill="#333"/>
      </svg>
    </div>

    <!-- Exterior: Render 157 (Este) -->
    <div id="camara-exterior-157" class="camara-render camara-exterior"
         style="display:none; position:absolute; top:71.53%; left:27.45%; transform:translate(-50%, -50%) rotate(90deg);"
         onclick="abrirRender('assets/157.webp', this)">
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" stroke="white" stroke-width="4">
        <path d="M50 40 L20 10 A 45 45 0 0 1 80 10 Z" fill="rgba(255,255,255,0.4)" stroke="none"/>
        <circle cx="50" cy="50" r="12" fill="white"/>
        <circle cx="50" cy="50" r="6" fill="#333"/>
      </svg>
    </div>

    <!-- Exterior: Render 159 (Noreste) -->
    <div id="camara-exterior-159" class="camara-render camara-exterior"
         style="display:none; position:absolute; top:86.98%; left:25.15%; transform:translate(-50%, -50%) rotate(45deg);"
         onclick="abrirRender('assets/159.webp', this)">
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" stroke="white" stroke-width="4">
        <path d="M50 40 L20 10 A 45 45 0 0 1 80 10 Z" fill="rgba(255,255,255,0.4)" stroke="none"/>
        <circle cx="50" cy="50" r="12" fill="white"/>
        <circle cx="50" cy="50" r="6" fill="#333"/>
      </svg>
    </div>

    <!-- Exterior: Render 160 (Noreste) -->
    <div id="camara-exterior-160" class="camara-render camara-exterior"
         style="display:none; position:absolute; top:86.50%; left:30.35%; transform:translate(-50%, -50%) rotate(45deg);"
         onclick="abrirRender('assets/160.webp', this)">
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" stroke="white" stroke-width="4">
        <path d="M50 40 L20 10 A 45 45 0 0 1 80 10 Z" fill="rgba(255,255,255,0.4)" stroke="none"/>
        <circle cx="50" cy="50" r="12" fill="white"/>
        <circle cx="50" cy="50" r="6" fill="#333"/>
      </svg>
    </div>

    <!-- Exterior: Render 161 (Este–Noreste) -->
    <div id="camara-exterior-161" class="camara-render camara-exterior"
         style="display:none; position:absolute; top:73.47%; left:30.46%; transform:translate(-50%, -50%) rotate(67.5deg);"
         onclick="abrirRender('assets/161.webp', this)">
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" stroke="white" stroke-width="4">
        <path d="M50 40 L20 10 A 45 45 0 0 1 80 10 Z" fill="rgba(255,255,255,0.4)" stroke="none"/>
        <circle cx="50" cy="50" r="12" fill="white"/>
        <circle cx="50" cy="50" r="6" fill="#333"/>
      </svg>
    </div>

    <!-- Exterior: Render 162 (Este) -->
    <div id="camara-exterior-162" class="camara-render camara-exterior"
         style="display:none; position:absolute; top:53.64%; left:24.06%; transform:translate(-50%, -50%) rotate(90deg);"
         onclick="abrirRender('assets/162.webp', this)">
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" stroke="white" stroke-width="4">
        <path d="M50 40 L20 10 A 45 45 0 0 1 80 10 Z" fill="rgba(255,255,255,0.4)" stroke="none"/>
        <circle cx="50" cy="50" r="12" fill="white"/>
        <circle cx="50" cy="50" r="6" fill="#333"/>
      </svg>
    </div>

    <!-- Exterior: Render 163 (Este) -->
    <div id="camara-exterior-163" class="camara-render camara-exterior"
         style="display:none; position:absolute; top:51.31%; left:12.63%; transform:translate(-50%, -50%) rotate(90deg);"
         onclick="abrirRender('assets/163.webp', this)">
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" stroke="white" stroke-width="4">
        <path d="M50 40 L20 10 A 45 45 0 0 1 80 10 Z" fill="rgba(255,255,255,0.4)" stroke="none"/>
        <circle cx="50" cy="50" r="12" fill="white"/>
        <circle cx="50" cy="50" r="6" fill="#333"/>
      </svg>
    </div>

    <!-- Exterior: Render 164 (Este) -->
    <div id="camara-exterior-164" class="camara-render camara-exterior"
         style="display:none; position:absolute; top:51.89%; left:26.35%; transform:translate(-50%, -50%) rotate(90deg);"
         onclick="abrirRender('assets/164.webp', this)">
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" stroke="white" stroke-width="4">
        <path d="M50 40 L20 10 A 45 45 0 0 1 80 10 Z" fill="rgba(255,255,255,0.4)" stroke="none"/>
        <circle cx="50" cy="50" r="12" fill="white"/>
        <circle cx="50" cy="50" r="6" fill="#333"/>
      </svg>
    </div>

    <!-- Exterior: Render 165 (Este–Sureste) -->
    <div id="camara-exterior-165" class="camara-render camara-exterior"
         style="display:none; position:absolute; top:42.95%; left:24.44%; transform:translate(-50%, -50%) rotate(112.5deg);"
         onclick="abrirRender('assets/165.webp', this)">
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" stroke="white" stroke-width="4">
        <path d="M50 40 L20 10 A 45 45 0 0 1 80 10 Z" fill="rgba(255,255,255,0.4)" stroke="none"/>
        <circle cx="50" cy="50" r="12" fill="white"/>
        <circle cx="50" cy="50" r="6" fill="#333"/>
      </svg>
    </div>

    <!-- Exterior: Render 166 (Este–Sureste) -->
    <div id="camara-exterior-166" class="camara-render camara-exterior"
         style="display:none; position:absolute; top:40.81%; left:21.32%; transform:translate(-50%, -50%) rotate(112.5deg);"
         onclick="abrirRender('assets/166.webp', this)">
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" stroke="white" stroke-width="4">
        <path d="M50 40 L20 10 A 45 45 0 0 1 80 10 Z" fill="rgba(255,255,255,0.4)" stroke="none"/>
        <circle cx="50" cy="50" r="12" fill="white"/>
        <circle cx="50" cy="50" r="6" fill="#333"/>
      </svg>
    </div>

    <!-- Exterior: Render 168 (Este–Sureste) -->
    <div id="camara-exterior-168" class="camara-render camara-exterior"
         style="display:none; position:absolute; top:39.64%; left:35.60%; transform:translate(-50%, -50%) rotate(112.5deg);"
         onclick="abrirRender('assets/168.webp', this)">
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" stroke="white" stroke-width="4">
        <path d="M50 40 L20 10 A 45 45 0 0 1 80 10 Z" fill="rgba(255,255,255,0.4)" stroke="none"/>
        <circle cx="50" cy="50" r="12" fill="white"/>
        <circle cx="50" cy="50" r="6" fill="#333"/>
      </svg>
    </div>

    <!-- Exterior: Render 171 (Este) -->
    <div id="camara-exterior-171" class="camara-render camara-exterior"
         style="display:none; position:absolute; top:89.02%; left:19.68%; transform:translate(-50%, -50%) rotate(90deg);"
         onclick="abrirRender('assets/171.webp', this)">
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" stroke="white" stroke-width="4">
        <path d="M50 40 L20 10 A 45 45 0 0 1 80 10 Z" fill="rgba(255,255,255,0.4)" stroke="none"/>
        <circle cx="50" cy="50" r="12" fill="white"/>
        <circle cx="50" cy="50" r="6" fill="#333"/>
      </svg>
    </div>

    <!-- Exterior: Render 172 (Este) -->
    <div id="camara-exterior-172" class="camara-render camara-exterior"
         style="display:none; position:absolute; top:73.28%; left:21.98%; transform:translate(-50%, -50%) rotate(90deg);"
         onclick="abrirRender('assets/172.webp', this)">
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" stroke="white" stroke-width="4">
        <path d="M50 40 L20 10 A 45 45 0 0 1 80 10 Z" fill="rgba(255,255,255,0.4)" stroke="none"/>
        <circle cx="50" cy="50" r="12" fill="white"/>
        <circle cx="50" cy="50" r="6" fill="#333"/>
      </svg>
    </div>`;

/* ═════════ EXTERIOR EDIFICIOS (Planta Edificios / Escena 2) ═════════ */
/* Usar class="camara-render camara-exterior-edificios" — se muestran/ocultan con irAExteriorEdificios / volverAEdificios */
const camerasExteriorEdificios = `
    <!-- Exterior Edificios: Render 1 (Sur) -->
    <div id="camara-exterior-edificios-1" class="camara-render camara-exterior-edificios"
         style="display:none; position:absolute; top:39.03%; left:49.48%; transform:translate(-50%, -50%) rotate(180deg);"
         onclick="abrirRender('assets/1.webp', this)">
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" stroke="white" stroke-width="4">
        <path d="M50 40 L20 10 A 45 45 0 0 1 80 10 Z" fill="rgba(255,255,255,0.4)" stroke="none"/>
        <circle cx="50" cy="50" r="12" fill="white"/>
        <circle cx="50" cy="50" r="6" fill="#333"/>
      </svg>
    </div>

    <!-- Exterior Edificios: Render 1.5 (Sur) -->
    <div id="camara-exterior-edificios-1-5" class="camara-render camara-exterior-edificios"
         style="display:none; position:absolute; top:36.87%; left:47.30%; transform:translate(-50%, -50%) rotate(180deg);"
         onclick="abrirRender('assets/1.5.webp', this)">
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" stroke="white" stroke-width="4">
        <path d="M50 40 L20 10 A 45 45 0 0 1 80 10 Z" fill="rgba(255,255,255,0.4)" stroke="none"/>
        <circle cx="50" cy="50" r="12" fill="white"/>
        <circle cx="50" cy="50" r="6" fill="#333"/>
      </svg>
    </div>

    <!-- Exterior Edificios: Render 2 (Noreste) -->
    <div id="camara-exterior-edificios-2" class="camara-render camara-exterior-edificios"
         style="display:none; position:absolute; top:73.00%; left:21.93%; transform:translate(-50%, -50%) rotate(45deg);"
         onclick="abrirRender('assets/2.webp', this)">
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" stroke="white" stroke-width="4">
        <path d="M50 40 L20 10 A 45 45 0 0 1 80 10 Z" fill="rgba(255,255,255,0.4)" stroke="none"/>
        <circle cx="50" cy="50" r="12" fill="white"/>
        <circle cx="50" cy="50" r="6" fill="#333"/>
      </svg>
    </div>

    <!-- Exterior Edificios: Render 2.5 (Noreste) -->
    <div id="camara-exterior-edificios-2-5" class="camara-render camara-exterior-edificios"
         style="display:none; position:absolute; top:75.97%; left:19.36%; transform:translate(-50%, -50%) rotate(45deg);"
         onclick="abrirRender('assets/2.5.webp', this)">
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" stroke="white" stroke-width="4">
        <path d="M50 40 L20 10 A 45 45 0 0 1 80 10 Z" fill="rgba(255,255,255,0.4)" stroke="none"/>
        <circle cx="50" cy="50" r="12" fill="white"/>
        <circle cx="50" cy="50" r="6" fill="#333"/>
      </svg>
    </div>

    <!-- Exterior Edificios: Render 3 (Suroeste) -->
    <div id="camara-exterior-edificios-3" class="camara-render camara-exterior-edificios"
         style="display:none; position:absolute; top:18.24%; left:44.34%; transform:translate(-50%, -50%) rotate(-135deg);"
         onclick="abrirRender('assets/3.webp', this)">
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" stroke="white" stroke-width="4">
        <path d="M50 40 L20 10 A 45 45 0 0 1 80 10 Z" fill="rgba(255,255,255,0.4)" stroke="none"/>
        <circle cx="50" cy="50" r="12" fill="white"/>
        <circle cx="50" cy="50" r="6" fill="#333"/>
      </svg>
    </div>

    <!-- Exterior Edificios: Render 5 (Suroeste) -->
    <div id="camara-exterior-edificios-5" class="camara-render camara-exterior-edificios"
         style="display:none; position:absolute; top:30.52%; left:52.71%; transform:translate(-50%, -50%) rotate(-135deg);"
         onclick="abrirRender('assets/5.webp', this)">
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" stroke="white" stroke-width="4">
        <path d="M50 40 L20 10 A 45 45 0 0 1 80 10 Z" fill="rgba(255,255,255,0.4)" stroke="none"/>
        <circle cx="50" cy="50" r="12" fill="white"/>
        <circle cx="50" cy="50" r="6" fill="#333"/>
      </svg>
    </div>

    <!-- Exterior Edificios: Render 5.5 (Suroeste) -->
    <div id="camara-exterior-edificios-5-5" class="camara-render camara-exterior-edificios"
         style="display:none; position:absolute; top:30.32%; left:50.63%; transform:translate(-50%, -50%) rotate(-135deg);"
         onclick="abrirRender('assets/5.5.webp', this)">
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" stroke="white" stroke-width="4">
        <path d="M50 40 L20 10 A 45 45 0 0 1 80 10 Z" fill="rgba(255,255,255,0.4)" stroke="none"/>
        <circle cx="50" cy="50" r="12" fill="white"/>
        <circle cx="50" cy="50" r="6" fill="#333"/>
      </svg>
    </div>

    <!-- Exterior Edificios: Render 7.5 (Suroeste) -->
    <div id="camara-exterior-edificios-7-5" class="camara-render camara-exterior-edificios"
         style="display:none; position:absolute; top:16.75%; left:47.41%; transform:translate(-50%, -50%) rotate(-135deg);"
         onclick="abrirRender('assets/7.5.webp', this)">
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" stroke="white" stroke-width="4">
        <path d="M50 40 L20 10 A 45 45 0 0 1 80 10 Z" fill="rgba(255,255,255,0.4)" stroke="none"/>
        <circle cx="50" cy="50" r="12" fill="white"/>
        <circle cx="50" cy="50" r="6" fill="#333"/>
      </svg>
    </div>

    <!-- Exterior Edificios: Render 77 (Oeste) -->
    <div id="camara-exterior-edificios-77" class="camara-render camara-exterior-edificios"
         style="display:none; position:absolute; top:43.29%; left:67.91%; transform:translate(-50%, -50%) rotate(270deg);"
         onclick="abrirRender('assets/77.webp', this)">
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" stroke="white" stroke-width="4">
        <path d="M50 40 L20 10 A 45 45 0 0 1 80 10 Z" fill="rgba(255,255,255,0.4)" stroke="none"/>
        <circle cx="50" cy="50" r="12" fill="white"/>
        <circle cx="50" cy="50" r="6" fill="#333"/>
      </svg>
    </div>

    <!-- Exterior Edificios: Render 78 (Suroeste) -->
    <div id="camara-exterior-edificios-78" class="camara-render camara-exterior-edificios"
         style="display:none; position:absolute; top:46.12%; left:68.84%; transform:translate(-50%, -50%) rotate(-135deg);"
         onclick="abrirRender('assets/78.webp', this)">
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" stroke="white" stroke-width="4">
        <path d="M50 40 L20 10 A 45 45 0 0 1 80 10 Z" fill="rgba(255,255,255,0.4)" stroke="none"/>
        <circle cx="50" cy="50" r="12" fill="white"/>
        <circle cx="50" cy="50" r="6" fill="#333"/>
      </svg>
    </div>

    <!-- Exterior Edificios: Render 79 (Noreste) -->
    <div id="camara-exterior-edificios-79" class="camara-render camara-exterior-edificios"
         style="display:none; position:absolute; top:56.59%; left:53.20%; transform:translate(-50%, -50%) rotate(45deg);"
         onclick="abrirRender('assets/79.webp', this)">
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" stroke="white" stroke-width="4">
        <path d="M50 40 L20 10 A 45 45 0 0 1 80 10 Z" fill="rgba(255,255,255,0.4)" stroke="none"/>
        <circle cx="50" cy="50" r="12" fill="white"/>
        <circle cx="50" cy="50" r="6" fill="#333"/>
      </svg>
    </div>

    <!-- Exterior Edificios: Render 126 (Sur–Suroeste) -->
    <div id="camara-exterior-edificios-126" class="camara-render camara-exterior-edificios"
         style="display:none; position:absolute; top:50.24%; left:55.39%; transform:translate(-50%, -50%) rotate(202.5deg);"
         onclick="abrirRender('assets/126.webp', this)">
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" stroke="white" stroke-width="4">
        <path d="M50 40 L20 10 A 45 45 0 0 1 80 10 Z" fill="rgba(255,255,255,0.4)" stroke="none"/>
        <circle cx="50" cy="50" r="12" fill="white"/>
        <circle cx="50" cy="50" r="6" fill="#333"/>
      </svg>
    </div>

    <!-- Exterior Edificios: Render 152 (Oeste) -->
    <div id="camara-exterior-edificios-152" class="camara-render camara-exterior-edificios"
         style="display:none; position:absolute; top:54.36%; left:73.54%; transform:translate(-50%, -50%) rotate(270deg);"
         onclick="abrirRender('assets/152.webp', this)">
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" stroke="white" stroke-width="4">
        <path d="M50 40 L20 10 A 45 45 0 0 1 80 10 Z" fill="rgba(255,255,255,0.4)" stroke="none"/>
        <circle cx="50" cy="50" r="12" fill="white"/>
        <circle cx="50" cy="50" r="6" fill="#333"/>
      </svg>
    </div>

    <!-- Exterior Edificios: Render 153 (Sur) -->
    <div id="camara-exterior-edificios-153" class="camara-render camara-exterior-edificios"
         style="display:none; position:absolute; top:54.36%; left:73.54%; transform:translate(-50%, -50%) rotate(180deg);"
         onclick="abrirRender('assets/153.webp', this)">
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" stroke="white" stroke-width="4">
        <path d="M50 40 L20 10 A 45 45 0 0 1 80 10 Z" fill="rgba(255,255,255,0.4)" stroke="none"/>
        <circle cx="50" cy="50" r="12" fill="white"/>
        <circle cx="50" cy="50" r="6" fill="#333"/>
      </svg>
    </div>

    <!-- Exterior Edificios: Render 154 (Oeste) -->
    <div id="camara-exterior-edificios-154" class="camara-render camara-exterior-edificios"
         style="display:none; position:absolute; top:54.36%; left:73.54%; transform:translate(-50%, -50%) rotate(270deg);"
         onclick="abrirRender('assets/154.webp', this)">
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" stroke="white" stroke-width="4">
        <path d="M50 40 L20 10 A 45 45 0 0 1 80 10 Z" fill="rgba(255,255,255,0.4)" stroke="none"/>
        <circle cx="50" cy="50" r="12" fill="white"/>
        <circle cx="50" cy="50" r="6" fill="#333"/>
      </svg>
    </div>

    <!-- Exterior Edificios: Render 155 (Norte–Noroeste) -->
    <div id="camara-exterior-edificios-155" class="camara-render camara-exterior-edificios"
         style="display:none; position:absolute; top:64.49%; left:73.65%; transform:translate(-50%, -50%) rotate(-22.5deg);"
         onclick="abrirRender('assets/155.webp', this)">
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" stroke="white" stroke-width="4">
        <path d="M50 40 L20 10 A 45 45 0 0 1 80 10 Z" fill="rgba(255,255,255,0.4)" stroke="none"/>
        <circle cx="50" cy="50" r="12" fill="white"/>
        <circle cx="50" cy="50" r="6" fill="#333"/>
      </svg>
    </div>`;

/* ═════════ EXTERIOR EDIFICIO 1 (planta edificio1.png) ═════════ */
/* Usar class="camara-render camara-exterior-edificio1" — irAExteriorEdificio(1) / volverAPlantaEdificio */
const camerasExteriorEdificio1 = `
    <!-- Exterior Edificio 1: Render 8 (Oeste–Noroeste) -->
    <div id="camara-exterior-edificio1-8" class="camara-render camara-exterior-edificio1"
         style="display:none; position:absolute; top:90.11%; left:69.50%; transform:translate(-50%, -50%) rotate(292.5deg);"
         onclick="abrirRender('assets/8.webp', this)">
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" stroke="white" stroke-width="4">
        <path d="M50 40 L20 10 A 45 45 0 0 1 80 10 Z" fill="rgba(255,255,255,0.4)" stroke="none"/>
        <circle cx="50" cy="50" r="12" fill="white"/>
        <circle cx="50" cy="50" r="6" fill="#333"/>
      </svg>
    </div>

    <!-- Exterior Edificio 1: Render 8.5 (Oeste–Noroeste) -->
    <div id="camara-exterior-edificio1-8-5" class="camara-render camara-exterior-edificio1"
         style="display:none; position:absolute; top:93.42%; left:68.40%; transform:translate(-50%, -50%) rotate(292.5deg);"
         onclick="abrirRender('assets/8.5.webp', this)">
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" stroke="white" stroke-width="4">
        <path d="M50 40 L20 10 A 45 45 0 0 1 80 10 Z" fill="rgba(255,255,255,0.4)" stroke="none"/>
        <circle cx="50" cy="50" r="12" fill="white"/>
        <circle cx="50" cy="50" r="6" fill="#333"/>
      </svg>
    </div>

    <!-- Exterior Edificio 1: Render 9 (Oeste–Noroeste) -->
    <div id="camara-exterior-edificio1-9" class="camara-render camara-exterior-edificio1"
         style="display:none; position:absolute; top:97.13%; left:63.97%; transform:translate(-50%, -50%) rotate(292.5deg);"
         onclick="abrirRender('assets/9.webp', this)">
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" stroke="white" stroke-width="4">
        <path d="M50 40 L20 10 A 45 45 0 0 1 80 10 Z" fill="rgba(255,255,255,0.4)" stroke="none"/>
        <circle cx="50" cy="50" r="12" fill="white"/>
        <circle cx="50" cy="50" r="6" fill="#333"/>
      </svg>
    </div>

    <!-- Exterior Edificio 1: Render 9.5 (Noroeste) -->
    <div id="camara-exterior-edificio1-9-5" class="camara-render camara-exterior-edificio1"
         style="display:none; position:absolute; top:92.34%; left:65.29%; transform:translate(-50%, -50%) rotate(-45deg);"
         onclick="abrirRender('assets/9.5.webp', this)">
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" stroke="white" stroke-width="4">
        <path d="M50 40 L20 10 A 45 45 0 0 1 80 10 Z" fill="rgba(255,255,255,0.4)" stroke="none"/>
        <circle cx="50" cy="50" r="12" fill="white"/>
        <circle cx="50" cy="50" r="6" fill="#333"/>
      </svg>
    </div>

    <!-- Exterior Edificio 1: Render 10 (Noroeste) -->
    <div id="camara-exterior-edificio1-10" class="camara-render camara-exterior-edificio1"
         style="display:none; position:absolute; top:79.31%; left:47.90%; transform:translate(-50%, -50%) rotate(-45deg);"
         onclick="abrirRender('assets/10.webp', this)">
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" stroke="white" stroke-width="4">
        <path d="M50 40 L20 10 A 45 45 0 0 1 80 10 Z" fill="rgba(255,255,255,0.4)" stroke="none"/>
        <circle cx="50" cy="50" r="12" fill="white"/>
        <circle cx="50" cy="50" r="6" fill="#333"/>
      </svg>
    </div>

    <!-- Exterior Edificio 1: Render 12 (Norte–Noroeste) -->
    <div id="camara-exterior-edificio1-12" class="camara-render camara-exterior-edificio1"
         style="display:none; position:absolute; top:63.86%; left:40.74%; transform:translate(-50%, -50%) rotate(-22.5deg);"
         onclick="abrirRender('assets/12.webp', this)">
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" stroke="white" stroke-width="4">
        <path d="M50 40 L20 10 A 45 45 0 0 1 80 10 Z" fill="rgba(255,255,255,0.4)" stroke="none"/>
        <circle cx="50" cy="50" r="12" fill="white"/>
        <circle cx="50" cy="50" r="6" fill="#333"/>
      </svg>
    </div>

    <!-- Exterior Edificio 1: Render 69 (Norte–Noroeste) -->
    <div id="camara-exterior-edificio1-69" class="camara-render camara-exterior-edificio1"
         style="display:none; position:absolute; top:66.83%; left:16.90%; transform:translate(-50%, -50%) rotate(-22.5deg);"
         onclick="abrirRender('assets/69.webp', this)">
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" stroke="white" stroke-width="4">
        <path d="M50 40 L20 10 A 45 45 0 0 1 80 10 Z" fill="rgba(255,255,255,0.4)" stroke="none"/>
        <circle cx="50" cy="50" r="12" fill="white"/>
        <circle cx="50" cy="50" r="6" fill="#333"/>
      </svg>
    </div>

    <!-- Exterior Edificio 1: Render 70 (Norte) -->
    <div id="camara-exterior-edificio1-70" class="camara-render camara-exterior-edificio1"
         style="display:none; position:absolute; top:51.44%; left:17.00%; transform:translate(-50%, -50%) rotate(0deg);"
         onclick="abrirRender('assets/70.webp', this)">
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" stroke="white" stroke-width="4">
        <path d="M50 40 L20 10 A 45 45 0 0 1 80 10 Z" fill="rgba(255,255,255,0.4)" stroke="none"/>
        <circle cx="50" cy="50" r="12" fill="white"/>
        <circle cx="50" cy="50" r="6" fill="#333"/>
      </svg>
    </div>

    <!-- Exterior Edificio 1: Render 73 (Sureste) -->
    <div id="camara-exterior-edificio1-73" class="camara-render camara-exterior-edificio1"
         style="display:none; position:absolute; top:19.64%; left:59.33%; transform:translate(-50%, -50%) rotate(135deg);"
         onclick="abrirRender('assets/73.webp', this)">
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" stroke="white" stroke-width="4">
        <path d="M50 40 L20 10 A 45 45 0 0 1 80 10 Z" fill="rgba(255,255,255,0.4)" stroke="none"/>
        <circle cx="50" cy="50" r="12" fill="white"/>
        <circle cx="50" cy="50" r="6" fill="#333"/>
      </svg>
    </div>

    <!-- Exterior Edificio 1: Render 74 (Sur) -->
    <div id="camara-exterior-edificio1-74" class="camara-render camara-exterior-edificio1"
         style="display:none; position:absolute; top:48.72%; left:77.64%; transform:translate(-50%, -50%) rotate(180deg);"
         onclick="abrirRender('assets/74.webp', this)">
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" stroke="white" stroke-width="4">
        <path d="M50 40 L20 10 A 45 45 0 0 1 80 10 Z" fill="rgba(255,255,255,0.4)" stroke="none"/>
        <circle cx="50" cy="50" r="12" fill="white"/>
        <circle cx="50" cy="50" r="6" fill="#333"/>
      </svg>
    </div>

    <!-- Exterior Edificio 1: Render 76 (Suroeste) -->
    <div id="camara-exterior-edificio1-76" class="camara-render camara-exterior-edificio1"
         style="display:none; position:absolute; top:71.20%; left:74.03%; transform:translate(-50%, -50%) rotate(-135deg);"
         onclick="abrirRender('assets/76.webp', this)">
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" stroke="white" stroke-width="4">
        <path d="M50 40 L20 10 A 45 45 0 0 1 80 10 Z" fill="rgba(255,255,255,0.4)" stroke="none"/>
        <circle cx="50" cy="50" r="12" fill="white"/>
        <circle cx="50" cy="50" r="6" fill="#333"/>
      </svg>
    </div>`;

/* ═════════ EXTERIOR EDIFICIO 2 (planta edificio2.png) ═════════ */
const camerasExteriorEdificio2 = `
    <!-- Exterior Edificio 2: Render 3 (Sureste) -->
    <div id="camara-exterior-edificio2-3" class="camara-render camara-exterior-edificio2"
         style="display:none; position:absolute; top:53.73%; left:69.39%; transform:translate(-50%, -50%) rotate(135deg);"
         onclick="abrirRender('assets/3.webp', this)">
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" stroke="white" stroke-width="4">
        <path d="M50 40 L20 10 A 45 45 0 0 1 80 10 Z" fill="rgba(255,255,255,0.4)" stroke="none"/>
        <circle cx="50" cy="50" r="12" fill="white"/>
        <circle cx="50" cy="50" r="6" fill="#333"/>
      </svg>
    </div>

    <!-- Exterior Edificio 2: Render 3.5 (Sureste) -->
    <div id="camara-exterior-edificio2-3-5" class="camara-render camara-exterior-edificio2"
         style="display:none; position:absolute; top:50.63%; left:65.18%; transform:translate(-50%, -50%) rotate(135deg);"
         onclick="abrirRender('assets/3.5.webp', this)">
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" stroke="white" stroke-width="4">
        <path d="M50 40 L20 10 A 45 45 0 0 1 80 10 Z" fill="rgba(255,255,255,0.4)" stroke="none"/>
        <circle cx="50" cy="50" r="12" fill="white"/>
        <circle cx="50" cy="50" r="6" fill="#333"/>
      </svg>
    </div>

    <!-- Exterior Edificio 2: Render 4 (Sureste) -->
    <div id="camara-exterior-edificio2-4" class="camara-render camara-exterior-edificio2"
         style="display:none; position:absolute; top:76.34%; left:20.83%; transform:translate(-50%, -50%) rotate(135deg);"
         onclick="abrirRender('assets/4.webp', this)">
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" stroke="white" stroke-width="4">
        <path d="M50 40 L20 10 A 45 45 0 0 1 80 10 Z" fill="rgba(255,255,255,0.4)" stroke="none"/>
        <circle cx="50" cy="50" r="12" fill="white"/>
        <circle cx="50" cy="50" r="6" fill="#333"/>
      </svg>
    </div>

    <!-- Exterior Edificio 2: Render 80 (Oeste) -->
    <div id="camara-exterior-edificio2-80" class="camara-render camara-exterior-edificio2"
         style="display:none; position:absolute; top:44.14%; left:64.90%; transform:translate(-50%, -50%) rotate(270deg);"
         onclick="abrirRender('assets/80.webp', this)">
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" stroke="white" stroke-width="4">
        <path d="M50 40 L20 10 A 45 45 0 0 1 80 10 Z" fill="rgba(255,255,255,0.4)" stroke="none"/>
        <circle cx="50" cy="50" r="12" fill="white"/>
        <circle cx="50" cy="50" r="6" fill="#333"/>
      </svg>
    </div>

    <!-- Exterior Edificio 2: Render 81 (Suroeste) -->
    <div id="camara-exterior-edificio2-81" class="camara-render camara-exterior-edificio2"
         style="display:none; position:absolute; top:40.76%; left:53.04%; transform:translate(-50%, -50%) rotate(-135deg);"
         onclick="abrirRender('assets/81.webp', this)">
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" stroke="white" stroke-width="4">
        <path d="M50 40 L20 10 A 45 45 0 0 1 80 10 Z" fill="rgba(255,255,255,0.4)" stroke="none"/>
        <circle cx="50" cy="50" r="12" fill="white"/>
        <circle cx="50" cy="50" r="6" fill="#333"/>
      </svg>
    </div>`;

/* ═════════ EXTERIOR EDIFICIO 3 (planta edificio3.png) ═════════ */
const camerasExteriorEdificio3 = `
    <!-- Exterior Edificio 3: Render 10.5 (Sureste) -->
    <div id="camara-exterior-edificio3-10-5" class="camara-render camara-exterior-edificio3"
         style="display:none; position:absolute; top:15.48%; left:19.19%; transform:translate(-50%, -50%) rotate(135deg);"
         onclick="abrirRender('assets/10.5.webp', this)">
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" stroke="white" stroke-width="4">
        <path d="M50 40 L20 10 A 45 45 0 0 1 80 10 Z" fill="rgba(255,255,255,0.4)" stroke="none"/>
        <circle cx="50" cy="50" r="12" fill="white"/>
        <circle cx="50" cy="50" r="6" fill="#333"/>
      </svg>
    </div>

    <!-- Exterior Edificio 3: Render 11 (Sur–Sureste) -->
    <div id="camara-exterior-edificio3-11" class="camara-render camara-exterior-edificio3"
         style="display:none; position:absolute; top:21.76%; left:43.03%; transform:translate(-50%, -50%) rotate(157.5deg);"
         onclick="abrirRender('assets/11.webp', this)">
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" stroke="white" stroke-width="4">
        <path d="M50 40 L20 10 A 45 45 0 0 1 80 10 Z" fill="rgba(255,255,255,0.4)" stroke="none"/>
        <circle cx="50" cy="50" r="12" fill="white"/>
        <circle cx="50" cy="50" r="6" fill="#333"/>
      </svg>
    </div>

    <!-- Exterior Edificio 3: Render 12.5 (Suroeste) -->
    <div id="camara-exterior-edificio3-12-5" class="camara-render camara-exterior-edificio3"
         style="display:none; position:absolute; top:43.56%; left:52.16%; transform:translate(-50%, -50%) rotate(-135deg);"
         onclick="abrirRender('assets/12.5.webp', this)">
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" stroke="white" stroke-width="4">
        <path d="M50 40 L20 10 A 45 45 0 0 1 80 10 Z" fill="rgba(255,255,255,0.4)" stroke="none"/>
        <circle cx="50" cy="50" r="12" fill="white"/>
        <circle cx="50" cy="50" r="6" fill="#333"/>
      </svg>
    </div>

    <!-- Exterior Edificio 3: Render 71 (Suroeste) -->
    <div id="camara-exterior-edificio3-71" class="camara-render camara-exterior-edificio3"
         style="display:none; position:absolute; top:65.91%; left:72.45%; transform:translate(-50%, -50%) rotate(-135deg);"
         onclick="abrirRender('assets/71.webp', this)">
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" stroke="white" stroke-width="4">
        <path d="M50 40 L20 10 A 45 45 0 0 1 80 10 Z" fill="rgba(255,255,255,0.4)" stroke="none"/>
        <circle cx="50" cy="50" r="12" fill="white"/>
        <circle cx="50" cy="50" r="6" fill="#333"/>
      </svg>
    </div>

    <!-- Exterior Edificio 3: Render 72 (Oeste) -->
    <div id="camara-exterior-edificio3-72" class="camara-render camara-exterior-edificio3"
         style="display:none; position:absolute; top:85.36%; left:31.11%; transform:translate(-50%, -50%) rotate(270deg);"
         onclick="abrirRender('assets/72.webp', this)">
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" stroke="white" stroke-width="4">
        <path d="M50 40 L20 10 A 45 45 0 0 1 80 10 Z" fill="rgba(255,255,255,0.4)" stroke="none"/>
        <circle cx="50" cy="50" r="12" fill="white"/>
        <circle cx="50" cy="50" r="6" fill="#333"/>
      </svg>
    </div>

    <!-- Exterior Edificio 3: Render 75 (Norte) -->
    <div id="camara-exterior-edificio3-75" class="camara-render camara-exterior-edificio3"
         style="display:none; position:absolute; top:56.14%; left:13.23%; transform:translate(-50%, -50%) rotate(0deg);"
         onclick="abrirRender('assets/75.webp', this)">
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" stroke="white" stroke-width="4">
        <path d="M50 40 L20 10 A 45 45 0 0 1 80 10 Z" fill="rgba(255,255,255,0.4)" stroke="none"/>
        <circle cx="50" cy="50" r="12" fill="white"/>
        <circle cx="50" cy="50" r="6" fill="#333"/>
      </svg>
    </div>`;

document.getElementById('mapa-interactivo').insertAdjacentHTML('beforeend', camerasEdificio1 + camerasEdificio2 + camerasEdificio3 + camerasExterior + camerasExteriorEdificios + camerasExteriorEdificio1 + camerasExteriorEdificio2 + camerasExteriorEdificio3);
