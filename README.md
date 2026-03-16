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

- **Angular 21** - Framework frontend
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
- Node.js 18+ 
- Angular CLI 21+

### Pasos para levantar el servidor

1. **Clonar el repositorio**
   ```bash
   git clone <repository-url>
   cd mutant-detector
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Iniciar servidor de desarrollo**
   ```bash
   ng serve
   ```

4. **Abrir la aplicación**
   - Navegar a http://localhost:4200
   - La aplicación se recargará automáticamente al modificar archivos

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
