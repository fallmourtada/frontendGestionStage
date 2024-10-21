import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RapportService } from '../../services/rapport.service';
import { StageService } from 'src/app/stages/services/stage.service';
import { StageDTO } from 'src/app/stages/models/stage.model';
import { SnackbarService } from 'src/app/snackbar/snackbar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-rapport',
  templateUrl: './add-rapport.component.html',
  styleUrls: ['./add-rapport.component.css']
})
export class AddRapportComponent implements OnInit{
  rapportForm!:FormGroup;
  stages!:StageDTO[];
  constructor(private fb:FormBuilder,
              private rapportService:RapportService,
              private stageService:StageService,
              private snackBar:SnackbarService,
              private router:Router
  ){}

  ngOnInit(): void {
    this.rapportForm=this.fb.group({
      titre:this.fb.control(''),
      contenu:this.fb.control(''),
      stageId:this.fb.control(''),
      date:this.fb.control('')
    })

    this.getListStage();
    
  }


  saveRapport(){
    let formData=this.rapportForm.value;
    this.rapportService.saveRapport(formData).subscribe({
      next:(data)=>{
        this.snackBar.showMessage("Rapport Saved Succesfully");
        this.router.navigateByUrl("/navbar/rapport");

      },error:(err)=>{
        console.log(err);
      }
    })

  }

  getListStage(){
    this.stageService.getListStage().subscribe({
      next:(data)=>{
        this.stages=data;
      },error:(err)=>{
        console.log(err);
      }
    })

  }

}
