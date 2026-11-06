## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

---

# Contexto del Proyecto: D&D Inventory

## Propósito de la Aplicación
Esta aplicación web es un compendio interactivo para **Dungeons & Dragons**. Sus dos funciones principales son:
1. Consulta rápida y eficiente de información sobre ítems del juego.
2. Una calculadora integrada para la conversión de divisas in-game.

## Usuario Objetivo (User Persona)
El sistema está diseñado específicamente para **Dungeon Masters (DMs)**. 
- **Regla para Copilot:** Todo diseño de UI/UX, flujo de navegación y presentación de datos debe priorizar la eficiencia, accesibilidad a la información y velocidad de lectura para un DM que está dirigiendo una partida en vivo.

## Directrices de Diseño Visual (UI/UX)
- **Concepto:** El diseño debe simular la experiencia de estar consultando un libro físico de D&D, pero con la ergonomía y usabilidad de una aplicación web moderna.
- **Regla para Copilot:** Cuando generes componentes (cartas, modales, fondos), utiliza texturas sutiles, tipografías con serifa para títulos (estilo fantasía/libro) y sans-serif legibles para descripciones largas. Usa bordes y sombras que evoquen páginas o pergaminos sin sacrificar el rendimiento web.

## Sistema de Diseño: Paleta de Colores
Utiliza estrictamente los siguientes códigos HEX para el estilizado. Cuando generes código CSS o utilidades (ej. Tailwind), mapea los estilos a estas variables:

- `--color-1`: `#FF6A52` (Acento vibrante / Alertas / Botones de acción)
- `--color-2`: `#38040E` (Tonos oscuros cálidos / Sombras profundas / Fondos secundarios)
- `--color-3`: `#23062E` (Tonos oscuros fríos / Contrastes de texto)
- `--color-4`: `#010101` (Texto principal oscuro / Bordes fuertes)
- `--color-5`: `#F4EADE` (Fondo principal / Tono de página de libro o pergamino)
- `--color-6`: `#A00008` (Peligro / Elementos de combate / Títulos destacados)