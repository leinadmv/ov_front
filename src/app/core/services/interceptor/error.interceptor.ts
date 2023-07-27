import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((err: HttpErrorResponse) => {
        if (err.status === 400 || err.status === 401 || err.status === 404 )  {
          setTimeout( () => {
            //en espera por definir que se pondra cuando el server responda por estos errores
          }, 300);
        }else if( err.status == 500){
          setTimeout( () => {
            //en espera por definir que se pondra cuando el server responda por estos errores
          }, 300);
        }
        return throwError( err );

      })
    );
  }
}
