import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map, Observable } from "rxjs";
import { OPStatistic } from "../model/OPStatistic";

@Injectable({ providedIn: "root" })
export class OPStatisticService {
  constructor(private http: HttpClient) {}

  getOPStatisticDataByOPId(id: string): Observable<OPStatistic> {
    return this.http.get<OPStatistic>(`http://localhost:3000/order-production/${id}`).pipe(
      map((result) => {
        return result;
      })
    );
  }
}
