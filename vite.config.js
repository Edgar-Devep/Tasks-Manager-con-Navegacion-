import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { fileURLToPath } from 'url'; // 📦 Importa una función que convierte una URL de módulo en una ruta de archivo real (necesario en módulos ES)
import path from 'node:path';// 📁 Importa el módulo 'path' para trabajar con rutas de archivos de forma segura y multiplataforma


const __filename = fileURLToPath(import.meta.url);// 📌 Convierte la URL actual del archivo (import.meta.url) en una ruta absoluta del sistema

const __dirname = path.dirname(__filename);// 📂 Extrae el directorio base (__dirname) a partir de la ruta absoluta del archivo actual



// https://vite.dev/config/
export default defineConfig({
  base: '/Tasks-Manager-con-Navegacion-/', // 👈 esto es clave
  plugins: [react()],
  
   resolve: {// 🧭 Define alias personalizados para importar módulos con rutas semánticas en lugar de relativas

    alias: {
      '@UI': path.resolve(__dirname, 'src/UI'), // 🧩 '@UI' apunta a la carpeta src/UI, permitiendo importar componentes como '@UI/TodoCounter'

    },
  },
    server: {
    host: '0.0.0.0',   // Permite que el navegador de Windows acceda al servidor en WSL
    port: 5173,        // Puerto por defecto (podés cambiarlo si querés)
    open: true,         // Abre el navegador automáticamente al correr `npm run dev`
    watch: {
      usePolling: true,       // 👈 fuerza a Vite a revisar cambios manualmente
      interval: 100           // 👈 cada 100ms (podés ajustar)
    }
  }
})
