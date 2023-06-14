import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlfaArgentinaComponent } from './alfa-argentina/alfa-argentina.component';
import { AlfabetoComponent } from './alfabeto/alfabeto.component';



@NgModule({
  declarations: [
    AlfaArgentinaComponent,
    AlfabetoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AlfaArgentinaComponent,
    AlfabetoComponent
  ]
})
export class AlfabetosModule { }
