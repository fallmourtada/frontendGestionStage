import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EntrepriseDTO } from './models/entreprise.model';

@Injectable({
  providedIn: 'root'
})
export class EntrepriseService {

  constructor(private http:HttpClient) { }

  public getListEntreprise():Observable<EntrepriseDTO[]>{
    return this.http.get<EntrepriseDTO[]>("http://localhost:8082/entreprise");
  }

  public saveEntrepriseDTO(data:EntrepriseDTO):Observable<EntrepriseDTO>{
    return this.http.post<EntrepriseDTO>("http://localhost:8082/entreprise",data);
  }

}
