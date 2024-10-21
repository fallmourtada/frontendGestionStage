import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PostulationService } from '../postulation.service';
import { SnackbarService } from 'src/app/snackbar/snackbar.service';

@Component({
  selector: 'app-postulation',
  templateUrl: './postulation.component.html',
  styleUrls: ['./postulation.component.css']
})
export class PostulationComponent implements OnInit{
  niveaux:string[]=['Licence1','Licence2','Licence3','Master1','Master2'];
  private stageId!:number;
  postulationForm!:FormGroup;
  constructor(private activatedRoute:ActivatedRoute,
              private fb:FormBuilder,
              private router:Router,
              private postulationService:PostulationService,
              private snackbarService:SnackbarService
              ){}
  ngOnInit(): void {
    this.stageId=this.activatedRoute.snapshot.params['stageId'];
    this.postulationForm=this.fb.group({
      stageId:this.fb.control(this.stageId),
      nom:this.fb.control(''),
      prenom:this.fb.control(''),
      email:this.fb.control(''),
      niveau:this.fb.control('')
    })
  }

  savePostulation(){
    let formData=this.postulationForm.value;
    this.postulationService.savePostulation(formData).subscribe({
      next:(data)=>{
        this.snackbarService.showMessage("Postulation Added Successfully");
        this.router.navigateByUrl("/navbar/postulation-list");

      },error:(err)=>{

      }
    })
  }

}
