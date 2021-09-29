import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  items: MenuItem[] = [];

  constructor() { }

  ngOnInit() {
    this.items = [
        {
            label:'Listado de Especies Biologicos',
            icon:'pi pi-fw pi-list',
            routerLink: '/especies-biologicos/listado'
        }
    ];
  }

}
