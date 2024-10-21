import { StageDTO } from "src/app/stages/models/stage.model";
import { StatusPostulation } from "../enum/StatuPostulation.enum";
import { EtudiantDTO } from "src/app/etudiants/models/etudiant.model";

export class PostulationDTO{
    id!:number;
    date!:Date;
    status!:StatusPostulation;
    stageDTO!:StageDTO;
    etudiantDTO!:EtudiantDTO;
}