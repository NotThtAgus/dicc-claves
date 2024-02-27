import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { EntradaComponent } from './entrada/entrada.component';
import { EnvComponent } from './env/env.component'; 

const routes: Routes = [
  { path: 'ent', component: EntradaComponent },
  { path: 'env', component: EnvComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
