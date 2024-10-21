import { UniversiteDTO } from "src/app/universites/models/universite.model";

export  class StageDTO{
    id!:number;
    titre!:string;
    description!:string;
    dateDebut!:Date;
    dateFin!:Date;
    universiteDTO!:UniversiteDTO;
}