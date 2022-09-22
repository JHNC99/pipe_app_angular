import { Component } from '@angular/core';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
})
export class BasicsComponent {
  upperCaseName: string = 'jonathan hernandez';
  lowerCaseName: string = 'JONATHAN HERNANDEZ CASTELLANOS';
  titleCaseName: string = 'jonathan hernandez castellanos';

  date: Date = new Date();
  /* 
  ngOnInit(): void {} */
}
