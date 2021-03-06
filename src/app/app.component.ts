import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Angular crud';
  msg: string = '';

  employees = [
    {name: 'Dennis', position: 'Programmer', email: 'denis.1594@gmail.com'},
    {name: 'Brian', position: 'DevOps', email: 'brian.7@gmail.com'},
    {name: 'Padilla', position: 'DBadmin', email: 'padilla89@gmail.com'}
  ];

  //este objeto contendra los datos temporales para luego actualizar el array
  model: any = {};
  model2: any = {};
  hideUpdate: boolean = true;

  addEmployee(): void{
    this.employees.push(this.model);
    this.model = {};
    this.msg = 'Campo agregado';
  }

  deleteEmployee(i): void{
    var answer = confirm('Seguro que desea eliminar?');
    if(answer){
      this.employees.splice(i, 1); //splice agrega y elimina dado un indice
      this.msg = 'Campo eliminado';
    }
  }

  myvalue;
  editEmployee(i): void{
    this.hideUpdate = false;
    this.model2.name = this.employees[i].name;
    this.model2.position = this.employees[i].position;
    this.model2.email = this.employees[i].email;

    this.myvalue = i;
  }

  updateEmployee(): void {
    let i = this.myvalue;
    for (let j=0; j<this.employees.length; j++){
      if(i==j){
        this.employees[i] = this.model2;
        this.msg = 'Campo actualizado';
        this.model2 = {};
      }
    }
  }

  closeAlert(): void {
    this.msg = '';
  }
}
