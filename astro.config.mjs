// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Asegura que las rutas sean manejadas correctamente en producción
  site: 'https://lautaro-ferreyra-portfolio.vercel.app', // Reemplaza con tu dominio real en Vercel
  base: '/',
});
