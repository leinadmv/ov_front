import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prueba2',
  templateUrl: './prueba2.component.html',
  styleUrls: ['./prueba2.component.scss']
})
export class Prueba2Component implements OnInit {

  // Datos para la tabla
  cabecera: string[] = ['ID', 'Nombre', 'Edad'];
  datos: any[] = [
    { id: 1, nombre: 'Juan', edad: 25 },
    { id: 2, nombre: 'María', edad: 30 },
    { id: 3, nombre: 'Luis', edad: 28 },
  ];
  acciones: any[] = [
    { icono: 'pencil', evento: 'editar' },
    { icono: 'trash', evento: 'eliminar' },
  ];

  constructor() { }

  ngOnInit() {
  }

  // Método para cargar más datos
  cargarMasDatos() {
    // Aquí cargaríamos más datos desde una fuente externa y actualizaríamos el arreglo "datos"
    // Por ejemplo, podemos hacer una llamada a una API y agregar los nuevos elementos al arreglo.
    // En este ejemplo, simplemente agregaremos algunos objetos manualmente.
    const nuevosDatos = [
      { id: 4, nombre: 'Eva', edad: 28 },
      { id: 5, nombre: 'Pedro', edad: 35 },
      { id: 6, nombre: 'Laura', edad: 23 },
      { id: 7, nombre: 'Carlos', edad: 29 },
    ];
    this.datos = [...this.datos, ...nuevosDatos];
  }

  // Método para manejar las acciones de la tabla
  ejecutarAccion(event: any) {
    const { evento, item } = event;
    // Aquí puedes implementar la lógica para cada acción, por ejemplo, mostrar un mensaje de confirmación antes de eliminar un registro.
    if (evento === 'eliminar') {
      // Código para eliminar el registro
      console.log('Eliminar registro:', item);
    } else if (evento === 'editar') {
      // Código para editar el registro
      console.log('Editar registro:', item);
    }
  }

}
