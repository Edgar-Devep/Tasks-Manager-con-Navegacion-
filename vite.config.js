import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  base: '/React-Tasks-Manager/', // 👈 esto es clave
  plugins: [react()],
    server: {
    hhost: '0.0.0.0',   // Permite que el navegador de Windows acceda al servidor en WSL
    port: 5173,        // Puerto por defecto (podés cambiarlo si querés)
    open: true,         // Abre el navegador automáticamente al correr `npm run dev`
    watch: {
      usePolling: true,       // 👈 fuerza a Vite a revisar cambios manualmente
      interval: 100           // 👈 cada 100ms (podés ajustar)
    }
  }
})
