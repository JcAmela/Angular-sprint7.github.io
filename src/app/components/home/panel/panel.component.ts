import { FormGroup, FormControl } from '@angular/forms';
import { WebService } from '../../services/web.service'; 
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css'] 
})
export class PanelComponent {
  webForm = new FormGroup({
    pages: new FormControl(''),
    languages: new FormControl('')
  });

  @Output() costUpdated: EventEmitter<number> = new EventEmitter<number>();

  totalCost: number = 0;

  constructor(private webService: WebService) { }

  updateCost() {
    const pages = Number(this.webForm.get('pages')?.value) || 0;
    const languages = Number(this.webForm.get('languages')?.value) || 0;     
    this.totalCost = this.webService.calculateCost(pages, languages);

    this.costUpdated.emit(this.totalCost);
  }
  ngOnInit() {
    this.webForm.valueChanges.subscribe(() => {
        this.updateCost();
    });


}



}
