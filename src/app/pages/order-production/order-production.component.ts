import { Component, OnInit } from "@angular/core";
import { User } from "src/app/model/user";
import { OPStatisticService } from "src/app/services/op-statistic.service";

@Component({
  selector: "app-order-production",
  templateUrl: "./order-production.component.html",
  styleUrls: ["./order-production.component.scss"],
})
export class OPComponent implements OnInit {
  public searchName: string = "";
  public tittle: String = "";
  public columNames: String[] = [
    "Proceso",
    "Completado",
    "Cantidad Placas",
  ];
  public users: User[] = [
    {
      id: 1,
      firstName: "Usuario 1",
      lastName: "Usuario 1",
      email: "usuario1@gmail.com",
      phone: "3516196398",
    },
    {
      id: 2,
      firstName: "Usuario 2",
      lastName: "Usuario 2",
      email: "usuario2@gmail.com",
      phone: "3516196399",
    },
  ];

  constructor(private OPService: OPStatisticService) {}

  ngOnInit() {
    this.OPService.getOPStatisticDataByOPId("1300")
    .subscribe(
      data => {
          console.log('data', data);
      },
      error => {
          alert(error.error)
      })
  }
}
