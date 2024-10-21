import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AddRapportDTO } from '../model/addRapport.model';
import { Observable } from 'rxjs';
import { RapportDTO } from '../model/rapport.model';

@Injectable({
  providedIn: 'root'
})
export class RapportService {

  constructor(private http:HttpClient) { }

  public getListRapport():Observable<RapportDTO[]>{
    return this.http.get<RapportDTO[]>("http://localhost:8082/rapports");
  }

  public saveRapport(data:AddRapportDTO):Observable<RapportDTO>{
    return this.http.post<RapportDTO>("http://localhost:8082/rapports",data);
  }

  public getRapportById(rapportId:number):Observable<RapportDTO>{
    return this.http.get<RapportDTO>(`http://localhost:8082/rapports/${rapportId}`);
  }

  public deleteRapport(rapportId:number):Observable<any>{
    return this.http.delete<any>(`http://localhost:8082/rapports/${rapportId}`);
  }
}
