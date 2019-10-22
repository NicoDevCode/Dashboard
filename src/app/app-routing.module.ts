import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {CanalesComponent} from './components/canales/canales.component';
import {TemasComponent} from './components/temas/temas.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'temas_destacados', component: TemasComponent},
  {path: 'temas', component: CanalesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
