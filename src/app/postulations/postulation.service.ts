import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PostulationDTO } from './models/postulation.model';
import { PostulerStageDTO } from './models/postulerStage.model';

@Injectable({
  providedIn: 'root'
})
export class PostulationService {
 // private baseUrl="http://localhost:8082"

  constructor(private http:HttpClient) { }

  public getListPostulation():Observable<PostulationDTO[]>{
    return this.http.get<PostulationDTO[]>("http://localhost:8082/postulations");
  }

  public savePostulation(data:PostulerStageDTO):Observable<PostulationDTO>{
    return this.http.post<PostulationDTO>("http://localhost:8082/postulation/stage",data);
  }

  public validerPostulation(postulationId: number): Observable<any> {
    // Ajout de null pour le body
    return this.http.post<any>(`http://localhost:8082/postulations/valider/${postulationId}`, null);
  }

  public annulerPostulation(postulationId: number): Observable<any> {
    // Ajout de null pour le body
    return this.http.post<any>(`http://localhost:8082/postulations/annuler/${postulationId}`, null);
  }

  public postulationValider():Observable<PostulationDTO[]>{
    return this.http.get<PostulationDTO[]>("http://localhost:8082/postulations/valider");
  }

  public postulationAnnuler():Observable<PostulationDTO[]>{
    return this.http.get<PostulationDTO[]>("http://localhost:8082/postulations/annuler");
  }
  
}
