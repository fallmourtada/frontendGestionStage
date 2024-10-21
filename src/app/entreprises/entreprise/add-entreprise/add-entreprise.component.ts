import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EntrepriseService } from '../../entreprise.service';
import { SnackbarService } from 'src/app/snackbar/snackbar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-entreprise',
  templateUrl: './add-entreprise.component.html',
  styleUrls: ['./add-entreprise.component.css']
})
export class AddEntrepriseComponent implements OnInit{
  entrepriseForm!:FormGroup;


  constructor(private fb:FormBuilder,
    private entrepriseService:EntrepriseService,
    private snackBar:SnackbarService,
    private router:Router
  ){}
  ngOnInit(): void {
    this.entrepriseForm=this.fb.group({
      nom:this.fb.control(''),
      adresse:this.fb.control(''),
      telephone:this.fb.control(''),
      email:this.fb.control('')
    })
    
  }

  saveEntreprise(){
    let formData=this.entrepriseForm.value;
    this.entrepriseService.saveEntrepriseDTO(formData).subscribe({
      next:(data)=>{
        this.snackBar.showMessage("Entreprise Saved Succsessfully");
        this.router.navigateByUrl("/navbar/entreprise");

      },error:(err)=>{
        console.log(err);
      }
    })

  }

}
