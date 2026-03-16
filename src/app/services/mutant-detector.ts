import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MutantDetectorService {
  
  private readonly SEQUENCE_LENGTH = 4;
  private readonly VALID_BASES = ['A', 'T', 'C', 'G'];

  isMutant(dna: string[]): boolean {
    // Validaciones iniciales
    if (!this.isValidDna(dna)) {
      return false;
    }

    let secuenciasEncontradas = 0;
    const n = dna.length;

    // 1. Búsqueda horizontal
    secuenciasEncontradas += this.buscarHorizontales(dna, n);
    if (secuenciasEncontradas > 1) return true;

    // 2. Búsqueda vertical
    secuenciasEncontradas += this.buscarVerticales(dna, n);
    if (secuenciasEncontradas > 1) return true;

    // 3. Búsqueda diagonal
    secuenciasEncontradas += this.buscarDiagonales(dna, n);
    
    return secuenciasEncontradas > 1;
  }

  private isValidDna(dna: string[]): boolean {
    // Verificar que no esté vacío
    if (!dna || dna.length === 0) return false;

    const n = dna.length;

    // Verificar que sea una matriz NxN
    for (let i = 0; i < n; i++) {
      if (dna[i].length !== n) return false;
      
      // Verificar que solo contenga bases válidas
      for (let j = 0; j < n; j++) {
        if (!this.VALID_BASES.includes(dna[i][j])) {
          return false;
        }
      }
    }

    return true;
  }

  private buscarHorizontales(dna: string[], n: number): number {
    let secuencias = 0;

    for (let i = 0; i < n; i++) {
      for (let j = 0; j <= n - this.SEQUENCE_LENGTH; j++) {
        if (this.verificarSecuencia(dna[i], j, 0, 1)) {
          secuencias++;
          if (secuencias > 1) return secuencias;
        }
      }
    }

    return secuencias;
  }

  private buscarVerticales(dna: string[], n: number): number {
    let secuencias = 0;

    for (let j = 0; j < n; j++) {
      for (let i = 0; i <= n - this.SEQUENCE_LENGTH; i++) {
        if (this.verificarSecuenciaVertical(dna, i, j)) {
          secuencias++;
          if (secuencias > 1) return secuencias;
        }
      }
    }

    return secuencias;
  }

  private buscarDiagonales(dna: string[], n: number): number {
    let secuencias = 0;

    // Diagonales principales (izquierda a derecha, abajo)
    for (let i = 0; i <= n - this.SEQUENCE_LENGTH; i++) {
      for (let j = 0; j <= n - this.SEQUENCE_LENGTH; j++) {
        if (this.verificarSecuenciaDiagonal(dna, i, j, 1, 1)) {
          secuencias++;
          if (secuencias > 1) return secuencias;
        }
      }
    }

    // Diagonales secundarias (derecha a izquierda, abajo)
    for (let i = 0; i <= n - this.SEQUENCE_LENGTH; i++) {
      for (let j = this.SEQUENCE_LENGTH - 1; j < n; j++) {
        if (this.verificarSecuenciaDiagonal(dna, i, j, 1, -1)) {
          secuencias++;
          if (secuencias > 1) return secuencias;
        }
      }
    }

    return secuencias;
  }

  private verificarSecuencia(fila: string, startCol: number, dirX: number, dirY: number): boolean {
    const base = fila[startCol];
    
    for (let i = 1; i < this.SEQUENCE_LENGTH; i++) {
      if (fila[startCol + i * dirX] !== base) {
        return false;
      }
    }

    return true;
  }

  private verificarSecuenciaVertical(dna: string[], startRow: number, col: number): boolean {
    const base = dna[startRow][col];
    
    for (let i = 1; i < this.SEQUENCE_LENGTH; i++) {
      if (dna[startRow + i][col] !== base) {
        return false;
      }
    }

    return true;
  }

  private verificarSecuenciaDiagonal(dna: string[], startRow: number, startCol: number, dirRow: number, dirCol: number): boolean {
    const base = dna[startRow][startCol];
    
    for (let i = 1; i < this.SEQUENCE_LENGTH; i++) {
      if (dna[startRow + i * dirRow][startCol + i * dirCol] !== base) {
        return false;
      }
    }

    return true;
  }
}
