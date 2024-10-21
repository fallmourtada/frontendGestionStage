import { UserDTO } from "src/app/tuteurs/models/user.model";

export class EtudiantDTO extends UserDTO{
    codePermanent!:number;
    niveau!:string;
}