import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UniversiteDTO } from './models/universite.model';

@Injectable({
  providedIn: 'root'
})
export class UniversiteService {

  constructor(private http:HttpClient) { }

  public getListUniversite():Observable<UniversiteDTO[]>{
    return this.http.get<UniversiteDTO[]>("http://localhost:8082/universites")
  }

  public saveUniversite(data:UniversiteDTO):Observable<UniversiteDTO>{
    return this.http.post<UniversiteDTO>("http://localhost:8082/universites",data);
  }
}
