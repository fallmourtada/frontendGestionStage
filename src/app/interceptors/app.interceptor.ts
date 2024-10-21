import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthServiceService } from '../authService/auth-service.service';

@Injectable()
export class AppInterceptor implements HttpInterceptor {

  constructor(private authService:AuthServiceService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if(!request.url.includes("/auth/login")){
      let newRequest=request.clone({
        headers:request.headers.set('Authorization', `Bearer ${this.authService.accessToken}`)
      })
      return next.handle(newRequest);
    }else{
      return next.handle(request);
    }
}
}
