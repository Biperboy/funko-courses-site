#!/bin/bash

# Colores para output
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}================================================${NC}"
echo -e "${BLUE}  Verificación de Estado - Funko Courses Site${NC}"
echo -e "${BLUE}================================================${NC}\n"

# 1. Verificar Node.js
echo -e "${YELLOW}1. Verificando Node.js...${NC}"
if command -v node &> /dev/null; then
    NODE_VERSION=$(node -v)
    echo -e "${GREEN}✓ Node.js instalado: $NODE_VERSION${NC}"
else
    echo -e "${RED}✗ Node.js no encontrado${NC}"
    echo "   Descarga desde https://nodejs.org/"
    exit 1
fi

# 2. Verificar npm
echo -e "\n${YELLOW}2. Verificando npm...${NC}"
if command -v npm &> /dev/null; then
    NPM_VERSION=$(npm -v)
    echo -e "${GREEN}✓ npm instalado: $NPM_VERSION${NC}"
else
    echo -e "${RED}✗ npm no encontrado${NC}"
    exit 1
fi

# 3. Verificar estructura de carpetas
echo -e "\n${YELLOW}3. Verificando estructura del proyecto...${NC}"
REQUIRED_DIRS=("src" "src/components" "src/pages" "src/styles" "public" ".github")
for dir in "${REQUIRED_DIRS[@]}"; do
    if [ -d "$dir" ]; then
        echo -e "${GREEN}✓ Carpeta '$dir' encontrada${NC}"
    else
        echo -e "${RED}✗ Carpeta '$dir' no encontrada${NC}"
    fi
done

# 4. Verificar archivos de configuración
echo -e "\n${YELLOW}4. Verificando archivos de configuración...${NC}"
REQUIRED_FILES=("package.json" "tsconfig.json" "next.config.js" "tailwind.config.js" "postcss.config.js" ".gitignore")
for file in "${REQUIRED_FILES[@]}"; do
    if [ -f "$file" ]; then
        echo -e "${GREEN}✓ Archivo '$file' encontrado${NC}"
    else
        echo -e "${RED}✗ Archivo '$file' no encontrado${NC}"
    fi
done

# 5. Verificar componentes
echo -e "\n${YELLOW}5. Verificando componentes React...${NC}"
COMPONENTS=("src/components/Header.tsx" "src/components/CourseCard.tsx")
for comp in "${COMPONENTS[@]}"; do
    if [ -f "$comp" ]; then
        echo -e "${GREEN}✓ Componente $(basename $comp) encontrado${NC}"
    else
        echo -e "${RED}✗ Componente $(basename $comp) no encontrado${NC}"
    fi
done

# 6. Verificar páginas
echo -e "\n${YELLOW}6. Verificando páginas...${NC}"
PAGES=("src/pages/index.tsx" "src/pages/_app.tsx")
for page in "${PAGES[@]}"; do
    if [ -f "$page" ]; then
        echo -e "${GREEN}✓ Página $(basename $page) encontrada${NC}"
    else
        echo -e "${RED}✗ Página $(basename $page) no encontrada${NC}"
    fi
done

# 7. Verificar si node_modules existe
echo -e "\n${YELLOW}7. Verificando dependencias instaladas...${NC}"
if [ -d "node_modules" ]; then
    echo -e "${GREEN}✓ node_modules encontrado${NC}"
else
    echo -e "${YELLOW}⚠ node_modules no encontrado (ejecuta 'npm install')${NC}"
fi

# 8. Mostrar próximos pasos
echo -e "\n${BLUE}================================================${NC}"
echo -e "${BLUE}  PRÓXIMOS PASOS${NC}"
echo -e "${BLUE}================================================${NC}"

if [ ! -d "node_modules" ]; then
    echo -e "\n${YELLOW}1. Instalar dependencias:${NC}"
    echo "   npm install"
fi

echo -e "\n${YELLOW}2. Ejecutar el servidor de desarrollo:${NC}"
echo "   npm run dev"

echo -e "\n${YELLOW}3. Acceder a la aplicación:${NC}"
echo "   http://localhost:3000"

echo -e "\n${YELLOW}4. Compilar para producción:${NC}"
echo "   npm run build"

echo -e "\n${YELLOW}5. Iniciar servidor de producción:${NC}"
echo "   npm start"

echo -e "\n${BLUE}================================================${NC}"
echo -e "${GREEN}✓ Verificación completada${NC}"
echo -e "${BLUE}================================================${NC}\n"
