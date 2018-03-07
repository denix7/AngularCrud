import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Angular crud';

  employees = [
    {name: 'Dennis', position: 'Programmer', email: 'denis.1594@gmail.com'},
    {name: 'Brian', position: 'DevOps', email: 'brian.7@gmail.com'},
    {name: 'Padilla', position: 'DBadmin', email: 'padilla89@gmail.com'}
  ];

  //este objeto contendra los datos temporales para luego actualizar el array
  model: any = {};

  addEmployee(): void{
    this.employees.push(this.model);
  }

  deleteEmployee(): void{

  }

  editEmployee(): void{

  }

  updateEmployee(): void {

  }
}
