/* import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginService } from '../services/login.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor{

  constructor(
    private loginService: LoginService
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const token = this.loginService.getToken();

    const isApiUrl = request.url.startsWith (environment.cartRestApi)
    if (token && isApiUrl){
      request = request.clone({
        setHeaders: {Authorization:`Bearer ${token}`}
      });
    }

    return next.handle(request);
  }

}
 */

import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment.prod';
import { LoginService } from '../services/login.service';

@Injectable({ providedIn: 'root' })

export class InterceptorService implements HttpInterceptor {
  constructor(
    private loginService: LoginService,
    private router: Router) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.loginService.getToken()
    const apiLocal = request.url.startsWith(environment.cartRestApi)
      if (token && apiLocal) {
        request = request.clone({ setHeaders: { Authorization: `Bearer ${token}` }
     });
    }
    return next.handle(request).pipe(catchError((err: HttpErrorResponse) => {
      if (err.status === 401){
        console.log("Error 401 mío");
      this.router.navigate(['login']);
    }
    return throwError(() => err);
  }));
}

}

