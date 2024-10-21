import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { SnackbarService } from 'src/app/snackbar/snackbar.service';

@Component({
  selector: 'app-add-tuteur',
  templateUrl: './add-tuteur.component.html',
  styleUrls: ['./add-tuteur.component.css']
})
export class AddTuteurComponent implements OnInit{
  tuteurForm!:FormGroup;
  constructor(private fb:FormBuilder,
    private userService:UserService,
    private snackBar:SnackbarService,
    private router:Router
  ){}
  ngOnInit(): void {
    this.tuteurForm=this.fb.group({
      nom:this.fb.control(''),
      prenom:this.fb.control(''),
      email:this.fb.control(''),
      password:this.fb.control(''),
      specialite:this.fb.control('')
    });
    
  }

  saveTuteur(){
    let formData=this.tuteurForm.value;
    this.userService.saveTuteur(formData).subscribe({
      next:(data)=>{
        this.snackBar.showMessage("Tuteur Saved Successfully");
        this.router.navigateByUrl("/navbar/tuteur");

      },error:(err)=>{
        console.log(err);
      }
    })

  }

}
