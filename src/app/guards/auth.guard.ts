import { Injectable } from '@angular/core';
import {  ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthServiceService } from '../authService/auth-service.service';

 // Remplacez par votre service d'authentification

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard {

  constructor( private router: Router,private authService:AuthServiceService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    //const isAuthenticated = this.authService.isAuthenticated();

   if(this.authService.isAuthenticated==true){

    return true;

   }else{
    this.router.navigateByUrl("/login");
    
    return false;
   }
    
  }
}


