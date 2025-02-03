import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'editor';

  isTextareaEnabled: boolean = false;

  blogText: string = "";

  footerDate: number = new Date().getFullYear();

  //Valores seleccionados
  selectedFont: string = "Arial";
  selectedSize: number = 12;
  selectedColor: string = "black";
  selectedSinglespaced: string = "1";

  //Habilitar textarea
  enableTextarea(): void {
    this.isTextareaEnabled = true;
  }

  //Borrar contenido
  textContent: string = '';
  clearText() {
    this.textContent = '';
  }
}


