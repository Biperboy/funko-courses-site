# Funko Courses Site

Plataforma educativa especializada en cursos sobre colecciones Funko Pop y figuras coleccionables.

**Sigue a [@funkosporcelana1](https://www.tiktok.com/@funkosporcelana1?is_from_webapp=1&sender_device=pc) en TikTok** 🎥

## Características

- 📚 Cursos estructurados por niveles (Principiante, Intermedio, Avanzado)
- 👥 Seguimiento del progreso del usuario
- 💰 Información sobre valoración y autenticidad
- 🎓 Contenido especializado en colecciones Funko
- 🎨 Interfaz moderna con Tailwind CSS
- ⚡ Rendimiento optimizado con Next.js
- 🎥 Integración con TikTok (@funkosporcelana1)

## Tech Stack

- **Framework**: Next.js 14
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS
- **Runtime**: Node.js 18+

## Requisitos Previos

- Node.js 18+
- npm o yarn

## Instalación Rápida

```bash
# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Compilar para producción
npm run build

# Iniciar servidor de producción
npm start
```

## Estructura del Proyecto

```
.
├── .github/
│   └── copilot-instructions.md    # Guías para agentes IA
├── src/
│   ├── components/                # Componentes reutilizables
│   │   ├── CourseCard.tsx        # Tarjeta de curso
│   │   ├── Header.tsx            # Encabezado con navegación
│   │   └── Footer.tsx            # Pie de página con redes sociales
│   ├── pages/                     # Páginas de Next.js
│   │   ├── _app.tsx              # Aplicación raíz
│   │   └── index.tsx             # Página de inicio
│   └── styles/
│       └── globals.css           # Estilos globales
├── public/                        # Archivos estáticos
├── package.json                   # Dependencias
├── tsconfig.json                  # Configuración TypeScript
├── next.config.js                 # Configuración Next.js
├── tailwind.config.js             # Configuración Tailwind
└── postcss.config.js              # Configuración PostCSS
```

## Scripts Disponibles

| Script | Descripción |
|--------|-------------|
| `npm run dev` | Inicia servidor de desarrollo (http://localhost:3000) |
| `npm run build` | Compila la aplicación para producción |
| `npm start` | Inicia servidor de producción |
| `npm run lint` | Ejecuta linter de código |
| `npm test` | Ejecuta pruebas unitarias |

## Componentes

### Header
Navegación principal con:
- Logo de marca 🎁
- Enlaces a secciones
- Enlace a TikTok (@funkosporcelana1)
- Botón de registro

### Footer
Pie de página con:
- Enlaces rápidos
- Información de redes sociales
- Enlace a TikTok (@funkosporcelana1)
- Copyright

### CourseCard
Tarjeta de curso con:
- Título y descripción
- Indicador de nivel (Principiante, Intermedio, Avanzado)
- Botón de acción

## Página de Inicio

La página principal incluye:
- Sección hero con call-to-action
- Botón "Síguenos en TikTok"
- Grid responsivo de cursos destacados
- Sección dedicada a comunidad de TikTok
- Footer con enlaces y redes sociales

## Redes Sociales

- **TikTok**: [@funkosporcelana1](https://www.tiktok.com/@funkosporcelana1?is_from_webapp=1&sender_device=pc)

## Verificación de Estado

Ejecuta el script de verificación:

```bash
bash verify.sh
```

Este script verifica:
- ✓ Instalación de Node.js y npm
- ✓ Estructura de carpetas
- ✓ Archivos de configuración
- ✓ Componentes React
- ✓ Páginas del proyecto
- ✓ Dependencias instaladas

## Desarrollo Local

```bash
# 1. Instalar dependencias
npm install

# 2. Ejecutar servidor de desarrollo
npm run dev

# 3. Acceder a http://localhost:3000

# 4. Realizar cambios en src/
# Los cambios se reflejarán automáticamente (hot reload)
```

## Deploy

La aplicación está lista para desplegarse en:

### Vercel (Recomendado)
```bash
npm install -g vercel
vercel
```

### Docker
Crear `Dockerfile` para containerización

### Node.js Hosting
Cualquier servidor que soporte Node.js

## Próximos Pasos

- [ ] Crear página de cursos detallada
- [ ] Implementar autenticación de usuarios
- [ ] Agregar backend API
- [ ] Crear sistema de pagos
- [ ] Implementar panel de usuario
- [ ] Agregar tests unitarios
- [ ] Integrar formularios de contacto
- [ ] SEO optimization

---

**Estado**: ✅ Proyecto listo para desarrollo | v1.0.0 | 2026

**Comunidad**: 🎥 [@funkosporcelana1 en TikTok](https://www.tiktok.com/@funkosporcelana1?is_from_webapp=1&sender_device=pc)
