import { UserDTO } from "./user.model";

export class TuteurDTO extends UserDTO{
    specialite!:string;
    password!:string;
}