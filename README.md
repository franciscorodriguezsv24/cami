# 🌷 Una carta para Cami

Sitio web tipo carta de amor, hecho con **React + Vite**. Pétalos cayendo,
sobre que se abre, tulipanes que florecen y texto que se escribe solo.

---

## 1. Probarlo en tu computadora

Necesitas tener **Node.js** instalado (https://nodejs.org — versión 18 o más).

```bash
npm install      # instala las dependencias (una sola vez)
npm run dev      # abre el sitio en http://localhost:5173
```

## 2. Personalizar

Todo lo editable está al inicio de **`src/App.jsx`**:

- `PARA` y `DE` → los nombres.
- `SECTIONS` → el texto de cada capítulo (cambia lo que está entre paréntesis).
- **Fotos:** ponlas en `public/photos/` con los nombres `1.jpg`, `2.jpg`, `4.jpg`.

Los colores base están en el código: lila `#deb8ff` y rosa `#ffb8f9`.

## 3. Publicar en Vercel (gratis)

### Opción A — desde GitHub (recomendada)

1. Sube esta carpeta a un repositorio de GitHub.
2. Entra a https://vercel.com, inicia sesión con GitHub y pulsa **Add New → Project**.
3. Elige el repositorio. Vercel detecta **Vite** automáticamente:
   - Framework Preset: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. Pulsa **Deploy**. En ~1 minuto tendrás una URL pública (`tu-proyecto.vercel.app`).

Cada vez que hagas `git push`, Vercel vuelve a publicar solo.

### Opción B — sin GitHub (terminal)

```bash
npm install -g vercel
vercel            # sigue las preguntas; acepta los valores por defecto
vercel --prod     # publica la versión final
```

---

Hecho con cariño. 💌
