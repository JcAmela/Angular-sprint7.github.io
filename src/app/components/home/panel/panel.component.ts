
import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { WebService } from '../../services/web.service';


@Component({
  selector: 'app-panel',                 
  templateUrl: './panel.component.html',  
  styleUrls: ['./panel.component.css']    
})
export class PanelComponent {
  webForm: FormGroup;                     // Define el formulario que se usará en la plantilla
  totalCost: number;                      // Guarda el costo total calculado
  
  @Output() costUpdated: EventEmitter<number>; // Evento que se emitirá cuando se actualice el costo


  constructor(private webService: WebService) {
    this.webForm = new FormGroup({      // Inicialización del formulario
      pages: new FormControl(''),      // Control para el número de páginas
      languages: new FormControl('')   // Control para el número de idiomas
    });

    this.totalCost = 0;                 // Inicialización del costo total a 0
    this.costUpdated = new EventEmitter<number>(); // Inicialización del evento de actualización de costo
  }

  // Método que se ejecuta cuando se inicializa el componente
  ngOnInit(): void {
    this.webForm.valueChanges.subscribe(() => { // Suscripción a los cambios del formulario
      this.updateCost();                        // Actualiza el costo cada vez que cambian los valores del formulario
    });
  }

  // Método para actualizar el costo
  updateCost(): void {
    const pages = Number(this.webForm.get('pages')?.value) || 0;      // Obtiene el valor del número de páginas
    const languages = Number(this.webForm.get('languages')?.value) || 0; // Obtiene el valor del número de idiomas
    this.totalCost = this.webService.calculateCost(pages, languages); // Calcula el costo total

    this.costUpdated.emit(this.totalCost);  // Emite el evento de actualización de costo con el nuevo valor
  }

  // Método para incrementar el valor de un control del formulario
  incremento(controlName: string): void {
    const currentValue = Number(this.webForm.get(controlName)?.value) || 0;  // Obtiene el valor actual del control
    this.webForm.get(controlName)?.setValue(currentValue + 1);  // Establece el nuevo valor incrementado en 1
  }

  // Método para decrementar el valor de un control del formulario
  decremento(controlName: string): void {
    const currentValue = Number(this.webForm.get(controlName)?.value) || 0;  // Obtiene el valor actual del control
    if (currentValue > 0) {                                                 // Si el valor actual es mayor que 0
      this.webForm.get(controlName)?.setValue(currentValue - 1);  // Establece el nuevo valor decrementado en 1
    }
  }
}
