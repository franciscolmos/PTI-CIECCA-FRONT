import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Painter } from 'src/app/model/painter';
@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {
  
  public searchName: string = ''
  public tittle: String = 'Pintores'
  public columNames: String[] = ['Id', 'Nombre', 'Apellido', 'Email', 'Teléfono', 'Acción']
  public painters: Painter[] = [
    {
      id: 1,
      firstName: "Francisco",
      lastName: "Olmos",
      email: "francisco.olmos@gmail.com",
      phone: "3516196398"
    },
    {
      id: 2,
      firstName: "Cristian",
      lastName: "Novarino",
      email: "eskoria.eskoria@gmail.com",
      phone: "3516196399"
    },
    {
      id: 3,
      firstName: "Eduardo",
      lastName: "Eduardo",
      email: "Eduardo.Eduardo@gmail.com",
      phone: "3516196400"
    },
    {
      id: 4,
      firstName: "Emilio",
      lastName: "Emilio",
      email: "Emilio.Emilio@gmail.com",
      phone: "351619301"
    },
    {
      id: 5,
      firstName: "Camila",
      lastName: "Camila",
      email: "Camila.Camila@gmail.com",
      phone: "3516196302"
    },
    {
      id: 6,
      firstName: "yohana",
      lastName: "yohana",
      email: "yohana.yohana@gmail.com",
      phone: "3516196304"
    },
    {
      id: 7,
      firstName: "Nami",
      lastName: "Nami",
      email: "Nami.Nami@gmail.com",
      phone: "3516196305"
    },
    {
      id: 8,
      firstName: "Eskoria",
      lastName: "Eskoria",
      email: "Eskoria.Eskoria@gmail.com",
      phone: "3516196306"
    },
  ];

  constructor(private router: Router,) { }

  ngOnInit() {
  }

  getPainters(){
    /* this.painerService.login(this.f.username.value, this.f.password.value) */
  }

  painterDetail(id: number){
    console.log('id', id)
    this.router.navigate(['/painter-detail']);
  }

  modifyPainter(id: number){
    console.log('id', id)
    this.router.navigate(['/modify-painter']);
  }

  deletePainter(id: number){
    console.log('id', id)
    this.router.navigate(['/delete-painter']);
  }
}
