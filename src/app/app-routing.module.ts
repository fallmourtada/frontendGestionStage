import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar/navbar.component';
import { EntrepriseComponent } from './entreprises/entreprise/entreprise.component';
import { TuteurComponent } from './tuteurs/tuteur/tuteur.component';
import { StageComponent } from './stages/stage/stage.component';
import { UniversiteComponent } from './universites/universite/universite.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { EtudiantComponent } from './etudiants/etudiant/etudiant.component';
import { LoginComponent } from './login/login/login.component';
import { PostulationComponent } from './postulations/postulation/postulation.component';
import { PostulationListComponent } from './postulations/postulation-list/postulation-list.component';
import { AddEntrepriseComponent } from './entreprises/entreprise/add-entreprise/add-entreprise.component';
import { AddUniversiteComponent } from './universites/universite/add-universite/add-universite.component';
import { AddEtudiantComponent } from './etudiants/etudiant/add-etudiant/add-etudiant.component';
import { AddTuteurComponent } from './tuteurs/tuteur/add-tuteur/add-tuteur.component';
import { AddStageComponent } from './stages/stage/add-stage/add-stage.component';
import { RapportComponent } from './rapports/rapport/rapport/rapport.component';
import { AddRapportComponent } from './rapports/rapport/add-rapport/add-rapport.component';
import { AddEvaluationComponent } from './evaluations/add-evaluation/add-evaluation.component';
import { AuthenticationGuard } from './guards/auth.guard';
import { validateHorizontalPosition } from '@angular/cdk/overlay';
import { PostulationValiderComponent } from './postulations/postulation-valider/postulation-valider.component';
import { SendMessageComponent } from './postulations/send-message/send-message.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'',component:LoginComponent},
  {path:'navbar',component:NavbarComponent,canActivate:[AuthenticationGuard],children:[
    {path:'entreprise',component:EntrepriseComponent},
    {path:'tuteur',component:TuteurComponent},
    {path:'stage',component:StageComponent},
    {path:'universite',component:UniversiteComponent},
    {path:'dashboard',component:DashboardComponent},
    {path:'etudiant',component:EtudiantComponent},
    {path:'postulations/:stageId',component:PostulationComponent},
    {path:'postulation-list',component:PostulationListComponent},
    {path:'add-entreprise',component:AddEntrepriseComponent},
    {path:'add-universite',component:AddUniversiteComponent},
    {path:'add-etudiant',component:AddEtudiantComponent},
    {path:'add-tuteur',component:AddTuteurComponent},
    {path:'add-stage',component:AddStageComponent},
    {path:'rapport',component:RapportComponent},
    {path:'add-rapport',component:AddRapportComponent},
    {path:'add-evaluation/:rapportId',component:AddEvaluationComponent},
    {path:'valider-postulation',component:PostulationValiderComponent},
    {path:'message/:id',component:SendMessageComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
