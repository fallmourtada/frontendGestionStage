import { RapportDTO } from "src/app/rapports/model/rapport.model";
import { StageDTO } from "src/app/stages/models/stage.model";

export class EvaluationDTO{
    id!:number;
    date!:Date;
    commentaire!:string;
    note!:number;
    stageDTO!:StageDTO;
    rapportDTO!:RapportDTO;
}