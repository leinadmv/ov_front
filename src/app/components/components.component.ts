import { Component, OnInit, ViewChild } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss']
})
export class ComponentsComponent implements OnInit {

  titleHeader: string = 'Home';
  showMenu: boolean = false;

  public menus: any[] = [
    {
      title: "Operaciones",
      items: [
        { title: 'Consultas', url: '/components/prueba1', icon: 'mail' },
        { title: 'Pagos', url: '/components/prueba2', icon: 'paper-plane' },
        { title: 'Transferencias', url: '/folder/favorites', icon: 'heart' },
        { title: 'Recargas', url: '/folder/archived', icon: 'archive' },
        { title: 'Retiros', url: '/folder/trash', icon: 'trash' }
      ]
    },
    {
      title: "Encuéntranos",
      items: [
        { title: 'Oficinas', url: '/components/prueba3', icon: 'mail' },
        { title: 'Corresponsales', url: '/components/prueba4', icon: 'paper-plane' }
      ]
    },
    {
      title: "Contáctanos",
      items: [
        { title: 'Mándanos un email', url: '/components/prueba5', icon: 'mail' },
        { title: 'Llámanos', url: '/components/prueba6', icon: 'paper-plane' }
      ]
    },
    {
      title: "Documentos",
      items: [
        { title: 'Extractos', url: '/components/prueba7', icon: 'mail' },
        { title: 'Paz y salvo', url: '/components/prueba8', icon: 'paper-plane' },
        { title: 'Certificaciones', url: '/folder/favorites', icon: 'heart' }
      ]
    }
  ];

  public menuUser: any[] = [
    {
      title: "Mi perfil",
      items: [
        { title: 'Cambio de claves', url: '/components/prueba1', icon: 'mail' },
        { title: 'Cambio de preguntas de seguridad', url: '/components/prueba2', icon: 'paper-plane' },
        { title: 'Actualiza tus datos', url: '/folder/favorites', icon: 'heart' }
      ]
    },
    {
      title: "Ajustes",
      items: [
        { title: 'Limites transaccionales', url: '/components/prueba1', icon: 'mail' },
        { title: 'programación de pago de cuota', url: '/components/prueba2', icon: 'paper-plane' },
        { title: 'Administrar cuentas', url: '/folder/favorites', icon: 'heart' },
        { title: 'Administrar mis facturas', url: '/folder/favorites', icon: 'heart' }
      ]
    },
  ];

  constructor(private menuController: MenuController) { }

  ngOnInit() {
  }

  /**
   * @author Daniel Martinez Vargas
   * @date 18/07/2023
   * Metodo que captura el menu seleccionado por el usuario y lo pasa a una variable para que se escriba su titulo en el header
   * @param menu menu seleccionado por el usuario
   */
  selectedMenu(menu: string): void {
    this.titleHeader = menu;
  }


}
