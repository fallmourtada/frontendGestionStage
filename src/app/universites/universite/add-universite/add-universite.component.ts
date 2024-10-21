import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SnackbarService } from 'src/app/snackbar/snackbar.service';
import { UniversiteService } from '../../universite.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-universite',
  templateUrl: './add-universite.component.html',
  styleUrls: ['./add-universite.component.css']
})
export class AddUniversiteComponent implements OnInit{
  universiteForm!:FormGroup;
  constructor(private fb:FormBuilder,
    private snackBar:SnackbarService,
    private universiteService:UniversiteService,
    private router:Router
  ){}
  ngOnInit(): void {
    this.universiteForm=this.fb.group({
      name:this.fb.control(''),
      addresse:this.fb.control(''),
      email:this.fb.control(''),
      telephone:this.fb.control('')

    })
    
  }
  saveUniversite(){
    let formData=this.universiteForm.value;
    this.universiteService.saveUniversite(formData).subscribe({
      next:(data)=>{
        this.snackBar.showMessage("Universite Saved Succesfully");
        this.router.navigateByUrl("/navbar/universite");

      },error:(err)=>{
        console.log(err);
      }
    })

  }

}
