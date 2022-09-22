import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
})
export class OrdersComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  setCase: boolean = true;
  isUppercase() {
    this.setCase = !this.setCase;
  }
}
