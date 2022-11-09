import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { IOPControl, IOPRework, IOProduction, IProductionModule } from "src/app/model/OPStatistic";
import { OPStatisticService } from "src/app/services/op-statistic.service";

@Component({
  selector: "app-order-production",
  templateUrl: "./order-production.component.html",
  styleUrls: ["./order-production.component.scss"],
})
export class OPComponent implements OnInit {
  
  public opForm: FormGroup = new FormGroup({
    nroOrden: new FormControl(),
  });
  public tittle: String = "Producción";
  public columNames: String[] = ["Proceso", "Completado", "Cantidad Placas"];
  public opStatistics: IOProduction;

  public tittle1: String = "Control";
  public columNames1: String[] = ["Proceso", "Placas OK", "Placas NC"];
  public opControl: IOPControl;

  public tittle2: String = "Retrabajo";
  public columNames2: String[] = ["Proceso", "Cantidad de Placas"];
  public opRework: IOPRework;


  constructor(private OPService: OPStatisticService) {}

  ngOnInit() {}

  onSubmit() {
    this.OPService.getOPStatisticDataByOPId(
      this.opForm.value.nroOrden
    ).subscribe(
      (data) => {
        this.opStatistics = data.production;
        this.opControl = data.control;
        this.opRework = data.rework;
      },
      (error) => {
        alert(error.error);
      }
    );
  }
}
