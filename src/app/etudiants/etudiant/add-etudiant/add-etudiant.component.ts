import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { SnackbarService } from 'src/app/snackbar/snackbar.service';
import { UniversiteDTO } from 'src/app/universites/models/universite.model';
import { UniversiteService } from 'src/app/universites/universite.service';

@Component({
  selector: 'app-add-etudiant',
  templateUrl: './add-etudiant.component.html',
  styleUrls: ['./add-etudiant.component.css']
})
export class AddEtudiantComponent implements OnInit{
  etudiantForm!:FormGroup;
  universites!:UniversiteDTO[];
  niveaux:string[]=['License1','License2','License3','Master1','Master2'];

  constructor(private fb:FormBuilder,
    private universiteService:UniversiteService,
    private userService:UserService,
    private snackBar:SnackbarService,
    private router:Router
  ){}
  ngOnInit(): void {
    this.etudiantForm=this.fb.group({
      nom:this.fb.control(''),
      prenom:this.fb.control(''),
      email:this.fb.control(''),
      codePermanent:this.fb.control(''),
      niveau:this.fb.control(''),
      universiteId:this.fb.control('')
    })

    this.getListUniversite();
    
  }

  saveEtudiant(){
    let formData=this.etudiantForm.value;
    this.userService.saveEtudiant(formData).subscribe({
      next:(data)=>{
        this.snackBar.showMessage("Etudiant Saved Successfully");
        this.router.navigateByUrl("/navbar/etudiant");

      },error:(err)=>{
        console.log(err);
      }
    })

  }

  getListUniversite(){
    this.universiteService.getListUniversite().subscribe({
      next:(data)=>{
        this.universites=data;
      },error:(err)=>{
        console.log(err);
      }
    })
  }

}
