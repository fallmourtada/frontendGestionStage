import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/authService/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  loginForm!:FormGroup;

  constructor(private fb:FormBuilder,
    private authService:AuthServiceService,
    private router:Router
  ){}
  
  ngOnInit(): void {
    this.loginForm=this.fb.group({
      username:this.fb.control(''),
      password:this.fb.control('')
    })
    
  }
  saveLogin(){
    let formData=this.loginForm.value;
    let username=formData.username;
    let password=formData.password;
    if(username && password){
      this.authService.login(username,password).subscribe({
        next:(data)=>{
          this.authService.loadProfile(data);
          this.router.navigateByUrl("/navbar/dashboard");

        },error:(err)=>{
          console.log(err);
        }
      })
    }

  }

}
