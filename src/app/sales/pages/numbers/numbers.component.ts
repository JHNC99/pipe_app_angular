import { Component } from '@angular/core';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
})
export class NumbersComponent {
  netSale: number = 232334.1212;
  percentage: number = 0.32;
  ngOnInit(): void {}
}
