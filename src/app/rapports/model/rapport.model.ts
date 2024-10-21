import { StageDTO } from "src/app/stages/models/stage.model";

export class RapportDTO{
    id!:number;
    titre!:string;
    contenu!:string;
    date!:Date;
    stageDTO!:StageDTO;
}