import { Component } from '@angular/core';
import { AlfabetosService } from '../service/alfabetos.service';

@Component({
  selector: 'app-alfa-argentina',
  templateUrl: './alfa-argentina.component.html',
  styleUrls: ['./alfa-argentina.component.css']
})
export class AlfaArgentinaComponent {

  title: string = 'Alfabeto Argentino';

  constructor(private alfaAgentinaService: AlfabetosService) { }

  alfabeto: string[] = this.alfaAgentinaService.alfaArgentina;

}
