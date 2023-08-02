import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { IonicModule } from '@ionic/angular';


@NgModule({
  imports: [
    CommonModule,
    IonicModule.forRoot(),
  ],
  exports: [TableComponent],
  declarations: [TableComponent]
})
export class SharedModule { }
