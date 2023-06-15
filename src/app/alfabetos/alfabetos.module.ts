import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlfaArgentinaComponent } from './alfa-argentina/alfa-argentina.component';
import { AlfabetoComponent } from './alfabeto/alfabeto.component';
import { SharedModule } from "../shared/shared.module";



@NgModule({
    declarations: [
        AlfaArgentinaComponent,
        AlfabetoComponent
    ],
    exports: [
        AlfaArgentinaComponent,
        AlfabetoComponent
    ],
    imports: [
        CommonModule,
        SharedModule
    ]
})
export class AlfabetosModule { }
