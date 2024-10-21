import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StageDTO } from '../models/stage.model';
import { AddStageDTO } from '../models/addStage.model';

@Injectable({
  providedIn: 'root'
})
export class StageService {

  constructor(private http:HttpClient) { }
  public getListStage():Observable<StageDTO[]>{
    return this.http.get<StageDTO[]>("http://localhost:8082/stages");

  }

  public saveStage(data:AddStageDTO):Observable<StageDTO>{
    return this.http.post<StageDTO>("http://localhost:8082/stages",data);
  }
}
