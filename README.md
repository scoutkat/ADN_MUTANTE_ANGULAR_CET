# Mutant Detector

Aplicación Angular para detectar si un humano es mutante basándose en su secuencia de ADN.

## Descripción del Problema

Un humano es mutante si encuentra **más de una secuencia** de cuatro letras iguales de forma oblicua, horizontal o vertical en una matriz de ADN NxN.

### Ejemplo Mutante
```
ATGCGA
CAGTGC  
TTATGT
AGAAGG
CCCCTA  
TCACTG
```
Secuencias encontradas:
1. Vertical: "AAAA" 
2. Horizontal: "CCCC"

Resultado: **MUTANTE**

## Características

- Algoritmo eficiente con complejidad O(n²)
- Interfaz moderna y responsiva
- Validación de entrada en tiempo real
- Visualización colorida de bases nitrogenadas
- Ejemplos predefinidos
- Animaciones y transiciones suaves

## Tecnologías Utilizadas

- **Angular 20** - Framework frontend
- **TypeScript** - Lenguaje tipado
- **Tailwind CSS** - Framework CSS para diseño moderno
- **SCSS** - Preprocesador CSS para estilos personalizados
- **Signals** - Gestión de estado reactiva

## Estructura del Proyecto
```
src/
├── app/
│   ├── app.ts              # Componente principal
│   ├── app.html            # Template HTML
│   ├── app.scss            # Estilos CSS
│   └── services/
│       └── mutant-detector.ts  # Lógica del algoritmo
├── main.ts                 # Punto de entrada
└── styles.scss             # Estilos globales
```

## Algoritmo de Detección

### Método Principal
```typescript
isMutant(dna: string[]): boolean
```

### Estrategia de Optimización
1. **Validación inicial**: Verificar matriz NxN y bases válidas (A,T,C,G)
2. **Búsqueda horizontal**: Por cada fila, buscar 4 caracteres consecutivos
3. **Búsqueda vertical**: Por cada columna, buscar 4 caracteres consecutivos  
4. **Búsqueda diagonal**: Buscar en ambas direcciones diagonales
5. **Corte temprano**: Detener al encontrar 2 secuencias

### Complejidad
- **Tiempo**: O(n²) - óptimo para este problema
- **Espacio**: O(1) - sin estructuras adicionales

## Interfaz de Usuario

### Características UI/UX
- **Diseño Tailwind CSS** con estilos modernos y limpios
- **Esquema de colores amarillo y azul oscuro** para identidad visual única
- **Grid interactivo** de 6x6 para entrada de ADN
- **Colores distintivos** para cada base nitrogenada:
  - **A** - Adenina (verde)
  - **T** - Timina (amarillo)  
  - **C** - Citosina (azul)
  - **G** - Guanina (morado)
- **Animaciones** de carga y transiciones suaves
- **Diseño responsivo** para móviles y desktop
- **Feedback visual** inmediato
- **Gradientes modernos** y sombras elegantes

## Instalación y Ejecución

### Prerrequisitos

Antes de levantar el servidor local, asegúrate de tener instalado:

1. **Node.js** (versión 18 o superior)
   ```bash
   # Verificar versión instalada
   node --version
   # Si no está instalado, descargar desde: https://nodejs.org/
   ```

2. **Angular CLI** (versión 20 - IMPORTANTE)
   ```bash
   # Instalar versión específica compatible
   npm install -g @angular/cli@20
   # Verificar versión
   ng version
   ```

3. **Git** (para clonar el repositorio)
   ```bash
   # Verificar instalación
   git --version
   # Si no está instalado, descargar desde: https://git-scm.com/
   ```

### ⚠️ IMPORTANTE: Problema de Compatibilidad

Si ves este error:
```
Error: The current version of "@angular/build" supports Angular versions ^20.0.0,
but detected Angular version 21.2.4 instead.
```

**Solución:**
```bash
# 1. Desinstalar Angular CLI global
npm uninstall -g @angular/cli

# 2. Instalar versión correcta
npm install -g @angular/cli@20

# 3. Limpiar caché
npm cache clean --force

# 4. Eliminar dependencias locales
rm -rf node_modules package-lock.json

# 5. Reinstalar dependencias del proyecto
npm install

# 6. Verificar versiones
ng version
# Debe mostrar: Angular CLI: 20.x.x, Angular: 20.x.x
```

### Pasos para Instalar y Levantar el Servidor

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/scoutkat/ADN_MUTANTE_ANGULAR_CET.git
   cd ADN_MUTANTE_ANGULAR_CET
   ```

2. **Instalar dependencias del proyecto**
   ```bash
   # Instalar todas las dependencias necesarias
   npm install
   ```
   
   Esto instalará automáticamente:
   - Angular 20
   - TypeScript
   - Tailwind CSS
   - PostCSS
   - Autoprefixer
   - Todas las dependencias de desarrollo

3. **Verificar instalación de Tailwind CSS**
   ```bash
   # Verificar que Tailwind esté instalado
   npx tailwindcss --version
   ```

4. **Iniciar servidor de desarrollo**
   ```bash
   # Opción 1: Iniciar en puerto por defecto (4200)
   ng serve
   
   # Opción 2: Iniciar en puerto específico
   ng serve --port 4200
   
   # Opción 3: Iniciar con host accesible desde red
   ng serve --host 0.0.0.0 --port 4200
   ```

5. **Abrir la aplicación**
   - Navegar a: http://localhost:4200
   - La aplicación se recargará automáticamente al modificar archivos

### Posibles Problemas y Soluciones

#### Si Tailwind CSS no funciona:
```bash
# Reinstalar Tailwind CSS
npm uninstall tailwindcss postcss autoprefixer
npm install -D tailwindcss@^3.4.0 postcss@^8.4.0 autoprefixer@^10.4.0

# Reiniciar servidor
ng serve
```

#### Si hay problemas de permisos en Windows:
```bash
# Ejecutar PowerShell como Administrador
# O usar:
npm install --force
```

#### Si el puerto 4200 está ocupado:
```bash
# Usar otro puerto
ng serve --port 4300
# O matar procesos en el puerto
npx kill-port 4200
```

### Verificación de Instalación Correcta

El servidor está funcionando correctamente cuando vees:
- ✅ Gradiente azul oscuro a amarillo en el fondo
- ✅ Cards blancas con sombras
- ✅ Inputs de ADN con colores distintivos
- ✅ Botones funcionales con efectos hover
- ✅ Sin errores en la consola del navegador

### Construcción para Producción
```bash
# Construir para producción
ng build

# Los archivos se generan en dist/
```

## Pruebas

### Ejecutar pruebas unitarias
```bash
ng test
```

### Ejecutar pruebas e2e
```bash
ng e2e
```

## Uso de la Aplicación

1. **Ingresar ADN**: Complete la matriz 6x6 con las bases A, T, C, G
2. **Validación**: El sistema valida automáticamente las entradas
3. **Análisis**: Click en "Analizar ADN"
4. **Resultado**: Visualización inmediata si es mutante o humano normal

### Funciones Adicionales
- **Cargar Ejemplo**: Carga un caso mutante predefinido
- **Limpiar**: Reinicia toda la matriz
- **Validación en tiempo real**: Solo permite caracteres válidos

## Casos de Prueba

### Mutante (Positivo)
```javascript
const dna = [
  "ATGCGA",
  "CAGTGC", 
  "TTATGT",
  "AGAAGG",
  "CCCCTA",
  "TCACTG"
];
// Resultado: true (2 secuencias encontradas)
```

### Humano (Negativo)
```javascript
const dna = [
  "ATGCGA",
  "CAGTGC", 
  "TTATGT",
  "AGACGG",
  "GCTTCA",
  "TCACTG"
];
// Resultado: false (0 secuencias encontradas)
```

## Desafíos Cumplidos

1. **Algoritmo eficiente** - Complejidad O(n²) con corte temprano
2. **Interfaz creativa** - Diseño moderno con Tailwind CSS, esquema de colores amarillo/azul oscuro
3. **Proyecto documentado** - README completo y código comentado
4. **Validaciones robustas** - Manejo de errores y entradas inválidas
5. **Sin emojis** - Interfaz limpia y profesional

## Mejoras Futuras

- [ ] Soporte para matrices NxN variables
- [ ] Visualización gráfica de secuencias encontradas
- [ ] Historial de análisis
- [ ] Exportación de resultados
- [ ] Modo oscuro/claro

## Contribuciones

1. Fork del proyecto
2. Crear feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push al branch (`git push origin feature/AmazingFeature`)
5. Abrir Pull Request

## Licencia

Este proyecto está bajo la Licencia MIT. 

## Autor

Desarrollado para prueba técnica de detección de mutantes

---
