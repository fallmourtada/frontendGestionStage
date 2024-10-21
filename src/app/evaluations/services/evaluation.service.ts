import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EvaluationDTO } from '../models/Evaluation.model';
import { AddEvaluationDTO } from '../models/AddEvaluation.model';

@Injectable({
  providedIn: 'root'
})
export class EvaluationService {

  constructor(private http:HttpClient) { }

  public getEvaluations():Observable<EvaluationDTO[]>{
    return this.http.get<EvaluationDTO[]>("http://localhost:8082/evaluations");
  }

  public saveEvaluation(addEvaluationDTO:AddEvaluationDTO):Observable<EvaluationDTO>{
    return this.http.post<EvaluationDTO>("http://localhost:8082/evaluations",addEvaluationDTO);
  }

  public getEvaluationById(evaluationId:number):Observable<EvaluationDTO>{
    return this.http.get<EvaluationDTO>(`http://localhost:8082/evaluations/${evaluationId}`);
  }
}
