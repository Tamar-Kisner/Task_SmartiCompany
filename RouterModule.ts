import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CarsFormComponent } from './cars.component';
import { CountriesFormComponent } from './Countries.component';
import { PaintingsFormComponent } from './Paintings.component';

const routes: Routes = [
  { path: 'CarsForm', component: CarsFormComponent },
  { path: 'CountriesForm', component: CountriesFormComponent },
  { path: 'PaintingsForm', component: PaintingsFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RouterModuleClass {}
