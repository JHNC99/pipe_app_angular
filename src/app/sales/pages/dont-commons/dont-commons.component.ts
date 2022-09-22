import { Component } from '@angular/core';
import { interval } from 'rxjs';
/* import { PrimeNGConfig } from 'primeng/api' */ @Component({
  selector: 'app-dont-commons',
  templateUrl: './dont-commons.component.html',
})
export class DontCommonsComponent {
  name: String = 'Jonathan';
  gender: string = 'male';
  inviteMap = {
    male: 'send him',
    female: 'send her',
  };
  isHide: Boolean = true;
  //I18nPluralPipe
  clients: string[] = ['Jonathan', 'Teodoro', 'Juana'];
  clientsMap = {
    '=0': 'no tenemos ningun cliente esperando',
    '=1': 'tenemos 1 cliente esperando',
    '=2': 'tenemos 2 clientes esperando',
    other: 'actualmente tenemos # esperando',
  };

  /* set name   */

  changeName() {
    this.name = 'Teodoro';
    this.gender = 'male';
  }

  show() {
    this.isHide = !this.isHide;
    console.log(this.isHide);
  }
  removeClient(): void {
    this.clients.pop();
  }
  //Key value pipe

  person = {
    name: 'Jonathan',
    age: 23,
    direction: 'Ottawa,Canada',
  };

  //Json pipe

  people = [
    {
      name: 'Jonathan',
      age: 23,
    },
    {
      name: 'Jonathan',
      age: 23,
    },
    {
      name: 'Jonathan',
      age: 23,
    },
    {
      name: 'Jonathan',
      age: 23,
    },
  ];

  //Async pipe
  myObservable = interval(2000);

  valuePromise = new Promise((resolve) => {
    setTimeout(() => {
      resolve('There data of promise');
    }, 3500);
  });
}
