import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsComponent } from './components.component';
import { IonicModule } from '@ionic/angular';
import { ComponentsRoutingModule } from './components-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { Prueba1Component } from './prueba1/prueba1.component';
import { Prueba2Component } from './prueba2/prueba2.component';


@NgModule({
  imports: [
    CommonModule,
    IonicModule.forRoot(),
    ComponentsRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    ComponentsComponent, 
    Prueba1Component, 
    Prueba2Component]
})
export class ComponentsModule { }
