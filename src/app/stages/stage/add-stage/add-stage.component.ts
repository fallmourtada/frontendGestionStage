import { Component, OnInit } from '@angular/core';
import { StageService } from '../../services/stage.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SnackbarService } from 'src/app/snackbar/snackbar.service';
import { EntrepriseDTO } from 'src/app/entreprises/models/entreprise.model';
import { EntrepriseService } from 'src/app/entreprises/entreprise.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-stage',
  templateUrl: './add-stage.component.html',
  styleUrls: ['./add-stage.component.css']
})
export class AddStageComponent implements OnInit{
  stageForm!:FormGroup;
  entreprises!:EntrepriseDTO[];

  constructor(private stageService:StageService,
    private fb:FormBuilder,
    private snackBar:SnackbarService,
    private entrepriseService:EntrepriseService,
    private router:Router
  ){}
  ngOnInit(): void {
    this.stageForm=this.fb.group({
      titre:this.fb.control(''),
      description:this.fb.control(''),
      dateDebut:this.fb.control(''),
      dateFin:this.fb.control(''),
      entrepriseId:this.fb.control('')
    })

    this.getListEntreprise();
    
  }

  saveStage(){
    let formData=this.stageForm.value;
    this.stageService.saveStage(formData).subscribe({
      next:(data)=>{
        this.snackBar.showMessage("Stage Added Successfully");
        this.router.navigateByUrl("/navbar/stage");
      },error:(err)=>{
        console.log(err);
      }
    })

  }

  getListEntreprise(){
    this.entrepriseService.getListEntreprise().subscribe({
      next:(data)=>{
        this.entreprises=data;
      },error:(err)=>{
        console.log(err);
      }
    })

  }

}
