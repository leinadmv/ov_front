import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Prueba1Component } from './prueba1/prueba1.component';
import { Prueba2Component } from './prueba2/prueba2.component';

const routes: Routes = [
	{
		path: '',
		component: Prueba1Component
	},
	{
		path: 'prueba1',
		component: Prueba1Component
	},
	{
		path: 'prueba2',
		component: Prueba2Component
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class ComponentsRoutingModule {}
