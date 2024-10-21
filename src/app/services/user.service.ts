import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TuteurDTO } from '../tuteurs/models/tuteur.model';
import { EtudiantDTO } from '../etudiants/models/etudiant.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  public getListTuteurs():Observable<TuteurDTO[]>{
    return this.http.get<TuteurDTO[]>("http://localhost:8082/tuteurs");
  }

  public saveTuteur(data:TuteurDTO):Observable<TuteurDTO>{
    return this.http.post<TuteurDTO>("http://localhost:8082/tuteurs",data);
  }

  public getListEtudiant():Observable<EtudiantDTO[]>{
    return this.http.get<EtudiantDTO[]>("http://localhost:8082/etudiants");
  }

  public saveEtudiant(data:EtudiantDTO):Observable<EtudiantDTO>{
    return this.http.post<EtudiantDTO>("http://localhost:8082/etudiants",data);
  }
}
