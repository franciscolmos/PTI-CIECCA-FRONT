import { Component, OnInit } from "@angular/core";
import { OPStatistic } from "src/app/model/OPStatistic";
import { OPStatisticService } from "src/app/services/op-statistic.service";

@Component({
  selector: "app-order-production",
  templateUrl: "./order-production.component.html",
  styleUrls: ["./order-production.component.scss"],
})
export class OPComponent implements OnInit {
  public opStatistics: OPStatistic;
  public searchName: string = "";
  public tittle: String = "";
  public columNames: String[] = ["Proceso", "Completado", "Cantidad Placas"];

  constructor(private OPService: OPStatisticService) {}

  ngOnInit() {
    this.OPService.getOPStatisticDataByOPId("1300").subscribe(
      (data) => {
        this.opStatistics = data;
      },
      (error) => {
        alert(error.error);
      }
    );
  }
}
