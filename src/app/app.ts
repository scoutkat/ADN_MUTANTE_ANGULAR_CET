import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MutantDetectorService } from './services/mutant-detector';

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Mutant Detector');
  
  dnaMatrix = signal<string[][]>(Array(6).fill(null).map(() => Array(6).fill('')));
  isAnalyzing = signal(false);
  result = signal<{ isMutant: boolean | null; message: string }>({
    isMutant: null,
    message: ''
  });
  
  constructor(private mutantDetector: MutantDetectorService) {}

  analyzeDna() {
    this.isAnalyzing.set(true);
    
    // Convertir matriz a array de strings
    const dnaStrings = this.dnaMatrix().map(row => row.join(''));
    
    // Validar que todas las filas estén completas
    const validDna = dnaStrings.filter(row => row.trim() !== '');
    
    if (validDna.length !== 6) {
      this.result.set({
        isMutant: false,
        message: 'Por favor, complete todas las 6 filas de ADN'
      });
      this.isAnalyzing.set(false);
      return;
    }

    // Validar que cada fila tenga 6 caracteres
    const invalidRows = validDna.filter(row => row.length !== 6);
    if (invalidRows.length > 0) {
      this.result.set({
        isMutant: false,
        message: 'Cada fila debe tener exactamente 6 caracteres (A, T, C, G)'
      });
      this.isAnalyzing.set(false);
      return;
    }

    // Realizar la detección
    setTimeout(() => {
      const isMutant = this.mutantDetector.isMutant(validDna);
      
      if (isMutant) {
        this.result.set({
          isMutant: true,
          message: '¡MUTANTE DETECTADO! Se encontraron más de una secuencia de 4 bases nitrogenadas idénticas.'
        });
      } else {
        this.result.set({
          isMutant: false,
          message: 'Humano normal. No se encontraron suficientes secuencias mutantes.'
        });
      }
      
      this.isAnalyzing.set(false);
    }, 500);
  }

  resetForm() {
    this.dnaMatrix.set(Array(6).fill(null).map(() => Array(6).fill('')));
    this.result.set({ isMutant: null, message: '' });
  }

  onDnaChange(rowIndex: number, colIndex: number, value: string) {
    const currentMatrix = [...this.dnaMatrix()];
    currentMatrix[rowIndex][colIndex] = value.toUpperCase();
    this.dnaMatrix.set(currentMatrix);
  }

  loadExample() {
    const exampleDna = [
      ["A","T","G","C","G","A"],
      ["C","A","G","T","G","C"], 
      ["T","T","A","T","G","T"],
      ["A","G","A","A","G","G"],
      ["C","C","C","C","T","A"],
      ["T","C","A","C","T","G"]
    ];
    this.dnaMatrix.set(exampleDna);
    this.result.set({ isMutant: null, message: '' });
  }

  isValidCharacter(char: string): boolean {
    return ['A', 'T', 'C', 'G'].includes(char.toUpperCase());
  }

  getCharacterClass(char: string): string {
    if (!char) return '';
    switch(char.toUpperCase()) {
      case 'A': return 'bg-green-100 text-green-800 border-green-300';
      case 'T': return 'bg-yellow-100 text-yellow-800 border-yellow-300';
      case 'C': return 'bg-blue-100 text-blue-800 border-blue-300';
      case 'G': return 'bg-purple-100 text-purple-800 border-purple-300';
      default: return '';
    }
  }
}
