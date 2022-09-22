import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumbersComponent } from './pages/numbers/numbers.component';

import { DontCommonsComponent } from './pages/dont-commons/dont-commons.component';
import { BasicsComponent } from './pages/basics/basics.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';

@NgModule({
  declarations: [
    NumbersComponent,
    DontCommonsComponent,
    BasicsComponent,
    OrdersComponent,
  ],
  imports: [CommonModule, PrimeNgModule],
  exports: [
    NumbersComponent,
    DontCommonsComponent,
    BasicsComponent,
    OrdersComponent,
  ],
})
export class SalesModule {}
