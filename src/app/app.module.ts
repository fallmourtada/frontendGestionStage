import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NavbarComponent } from './navbar/navbar/navbar.component';
import { StageComponent } from './stages/stage/stage.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { EtudiantComponent } from './etudiants/etudiant/etudiant.component';
import { TuteurComponent } from './tuteurs/tuteur/tuteur.component';
import { UniversiteComponent } from './universites/universite/universite.component';
import { EntrepriseComponent } from './entreprises/entreprise/entreprise.component';
import { LoginComponent } from './login/login/login.component';
import { PostulationComponent } from './postulations/postulation/postulation.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostulationListComponent } from './postulations/postulation-list/postulation-list.component';
import { AddTuteurComponent } from './tuteurs/tuteur/add-tuteur/add-tuteur.component';
import { AddEtudiantComponent } from './etudiants/etudiant/add-etudiant/add-etudiant.component';
import { AddEntrepriseComponent } from './entreprises/entreprise/add-entreprise/add-entreprise.component';
import { AddUniversiteComponent } from './universites/universite/add-universite/add-universite.component';
import { AddStageComponent } from './stages/stage/add-stage/add-stage.component';
import { RapportComponent } from './rapports/rapport/rapport/rapport.component';
import { AddRapportComponent } from './rapports/rapport/add-rapport/add-rapport.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { EvaluationComponent } from './evaluations/evaluation/evaluation.component';
import { AddEvaluationComponent } from './evaluations/add-evaluation/add-evaluation.component';
import { AppInterceptor } from './interceptors/app.interceptor';
import { PostulationValiderComponent } from './postulations/postulation-valider/postulation-valider.component';
import { SendMessageComponent } from './postulations/send-message/send-message.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    StageComponent,
    DashboardComponent,
    EtudiantComponent,
    TuteurComponent,
    UniversiteComponent,
    EntrepriseComponent,
    LoginComponent,
    PostulationComponent,
    PostulationListComponent,
    AddTuteurComponent,
    AddEtudiantComponent,
    AddEntrepriseComponent,
    AddUniversiteComponent,
    AddStageComponent,
    RapportComponent,
    AddRapportComponent,
    EvaluationComponent,
    AddEvaluationComponent,
    PostulationValiderComponent,
    SendMessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatTableModule,
    MatIconModule,
    MatPaginatorModule,
    MatSelectModule,
    MatSidenavModule,
    MatSortModule,
    MatListModule,
    MatMenuModule,
    MatToolbarModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatCardModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatSnackBarModule,
    MatDatepickerModule,
    MatNativeDateModule
    
    
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:AppInterceptor,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
