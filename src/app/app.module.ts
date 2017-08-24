import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialComponentsImport } from './material-imports/material.module';
import { RouterModule, Routes } from '@angular/router'; 
import { HttpModule } from '@angular/http';
import { ParticlesModule } from 'angular-particle';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { WeightConverterComponent } from './components/weight-converter/weight-converter.component';
import { CurrencyConverterComponent } from './components/currency-converter/currency-converter.component';
import { TempConverterComponent } from './components/temp-converter/temp-converter.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'weight', component: WeightConverterComponent},
  {path: 'currency', component: CurrencyConverterComponent},
  {path: 'temp', component: TempConverterComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    WeightConverterComponent,
    CurrencyConverterComponent,
    TempConverterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialComponentsImport,
    RouterModule.forRoot(appRoutes),
    HttpModule,
    ParticlesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
