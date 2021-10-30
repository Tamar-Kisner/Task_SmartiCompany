import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeClassComponent } from './Home.component';
import { CarsFormComponent } from 'cars.component';
import { RouterModuleClass } from './RouterModule';
import { CountriesFormComponent } from './Countries.component';
import { PaintingsFormComponent } from './Paintings.component';

@NgModule({
  imports: [BrowserModule, FormsModule, RouterModuleClass],
  declarations: [
    AppComponent,
    HelloComponent,
    CarsFormComponent,
    HomeClassComponent,
    CountriesFormComponent,
    PaintingsFormComponent,
  ],
  bootstrap: [HomeClassComponent],
})
export class AppModule {}
