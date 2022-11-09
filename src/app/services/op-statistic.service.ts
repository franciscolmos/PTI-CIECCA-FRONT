import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map, Observable } from "rxjs";
import { IProductionModule } from "../model/OPStatistic";

@Injectable({ providedIn: "root" })
export class OPStatisticService {
  constructor(private http: HttpClient) {}

  getOPStatisticDataByOPId(id: string): Observable<IProductionModule> {
    return this.http
      .get<IProductionModule>(`http://localhost:3000/order-production/${id}`)
      .pipe(
        map((result) => {
          return result;
        })
      );
  }
}
