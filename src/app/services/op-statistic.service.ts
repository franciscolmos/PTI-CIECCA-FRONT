import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs";
import { OPStatistic } from "../model/OPStatistic";

@Injectable({ providedIn: "root" })
export class OPStatisticService {
  constructor(private http: HttpClient) {}

  getOPStatisticDataByOPId(id: string) {
    return this.http.get<OPStatistic>(`http://localhost:3000/order-production/${id}`).pipe(
      map((result) => {
        console.log("result", result);
        return result;
      })
    );
  }
}
