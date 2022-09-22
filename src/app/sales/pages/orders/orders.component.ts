import { Component } from '@angular/core';
import { Color, Heroe } from '../../interfaces/sales.interfaces';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
})
export class OrdersComponent {
  setCase: boolean = true;
  order: string = '';
  heroes: Heroe[] = [
    {
      name: 'spider man',
      fly: true,
      color: Color.red,
    },
    {
      name: 'Dead pool',
      fly: true,
      color: Color.red,
    },
    {
      name: 'Batman',
      fly: false,
      color: Color.black,
    },
  ];
  isUppercase() {
    this.setCase = !this.setCase;
  }

  changeOrder(value: string) {
    this.order = value;
  }
}
