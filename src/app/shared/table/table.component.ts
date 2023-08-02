import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {

  @Input() cabecera: string[] = [];
  @Input() data: any[] = [];
  @Input() acciones: any[] = [];

  @Output() accionClick = new EventEmitter<any>();
  @Output() cargarMasData = new EventEmitter<void>();

  paginaActual = 1;
  elementosPorPagina = 5;
  dataPaginada: any[] = [];
  paginador: any;

  constructor() { }

  cargarMas(event: any) {
    this.cargarMasData.emit();
    event.target.complete();
  }

  ejecutarAccion(evento: string, item: any) {
    this.accionClick.emit({ evento, item });
  }

  // Método para manejar el evento de clic en una fila
  onRowClick(item: any) {
    console.log('Fila clickeada:', item);
    // Aquí puedes agregar la lógica que deseas que ocurra cuando se hace clic en una fila
    // Por ejemplo, abrir un modal con más detalles del elemento, navegar a otra página, etc.
  }

}
