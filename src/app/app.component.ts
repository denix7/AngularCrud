import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Angular crud';

  employees: [
    {'name': 'Dennis', position: 'Programmer'},
    {'name': 'Brian', position: 'DevOps'},
    {'name': 'Padilla', position: 'DBadmin'}
  ];

  //este objeto contendra los datos temporales para luego actualizar el array
  model: any = {};

  addEmployee(): void{

  }

  deleteEmployee(): void{

  }

  editEmployee(): void{

  }

  updateEmployee(): void {

  }
}
