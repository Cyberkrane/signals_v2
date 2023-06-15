import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArgentinaComponent } from './argentina/argentina.component';
import { PaisComponent } from './pais/pais.component';
import { SharedModule } from "../shared/shared.module";



@NgModule({
    declarations: [
        ArgentinaComponent,
        PaisComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        SharedModule
    ]
})
export class TraductoresModule { }
