import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-user-profile',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  public searchName: string = '';
  public tittle: String = 'Usuarios'
  public columNames: String[] = ['Id', 'Nombre', 'Apellido', 'Email', 'Teléfono', 'Acción']
  public users: User[] = [
    {
      id: 1,
      firstName: "Usuario 1",
      lastName: "Usuario 1",
      email: "usuario1@gmail.com",
      phone: "3516196398"
    },
    {
      id: 2,
      firstName: "Usuario 2",
      lastName: "Usuario 2",
      email: "usuario2@gmail.com",
      phone: "3516196399"
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
