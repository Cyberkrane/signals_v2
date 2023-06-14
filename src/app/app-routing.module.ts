import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ArgentinaComponent } from './traductores/argentina/argentina.component';
import { AlfaArgentinaComponent } from './alfabetos/alfa-argentina/alfa-argentina.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'traductor', component: ArgentinaComponent
  },
  {
    path: 'alfabeto', component: AlfaArgentinaComponent
  },
  {
    path: '**', component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
