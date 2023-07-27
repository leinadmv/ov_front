import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, finalize } from 'rxjs';
import { LoadingController } from '@ionic/angular';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {

  skipApiCall = [

  ];

  constructor(private loadingController: LoadingController) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (this.isValidRequestForInterceptor(request.url)) {

      this.presentLoading(); // Mostrar el loader al iniciar la petición

      return next.handle(request).pipe(

        finalize(
          () => this.dismissLoading()
        )

      );
    } else {
      return next.handle(request);
    }
  }

  private isValidRequestForInterceptor(requestUrl: string): boolean {
    let positionIndicator = 'api/';
    let position = requestUrl.indexOf(positionIndicator);
    if (position > 0) {
      let destination: string = requestUrl.substr(position + positionIndicator.length);
      for (let address of this.skipApiCall) {
        if (new RegExp(address).test(destination)) {
          return false;
        }
      }
    }
    return true;
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Cargando...', // Mensaje que se mostrará en el loader
      translucent: true, // Permite que el loader sea semi-transparente
      backdropDismiss: false, // Evita que el usuario cierre el loader tocando fuera de él
    });
    await loading.present();
  }

  async dismissLoading() {
    await this.loadingController.dismiss();
  }
}
