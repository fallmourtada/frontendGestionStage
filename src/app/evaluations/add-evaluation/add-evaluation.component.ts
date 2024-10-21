import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EvaluationService } from '../services/evaluation.service';
import { StageService } from 'src/app/stages/services/stage.service';
import { StageDTO } from 'src/app/stages/models/stage.model';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarService } from 'src/app/snackbar/snackbar.service';

@Component({
  selector: 'app-add-evaluation',
  templateUrl: './add-evaluation.component.html',
  styleUrls: ['./add-evaluation.component.css']
})
export class AddEvaluationComponent implements OnInit{
  AddEvaluationForm!:FormGroup;
  stages!:StageDTO[];
  rapportId!:number;
  constructor(private fb:FormBuilder,
              private evaluationService:EvaluationService,
              private stageService:StageService,
              private activatedRoute:ActivatedRoute,
              private snackBar:SnackbarService
  ){}
  ngOnInit(): void {
    this.AddEvaluationForm=this.fb.group({
      note:this.fb.control(''),
      commentaire:this.fb.control(''),
      date:this.fb.control(''),
      rapportId:this.fb.control(''),
      stageId:this.fb.control('')
      
    });


    this.getListStage();
    this.rapportId=this.activatedRoute.snapshot.params['rapportId'];
    
  }

  saveEvaluation(){
    let formData=this.AddEvaluationForm.value;
    this.evaluationService.saveEvaluation(formData).subscribe({
      next:(data)=>{
        this.snackBar.showMessage("Evaluation Saved Successfully");

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
