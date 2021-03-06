import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Rx";
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HTTP_INTERCEPTORS
} from "@angular/common/http";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log("passou no interceptor");
    return next.handle(req)
    .catch((error, caught) => {

      let errorObj = error;

      if (errorObj.error) {
          errorObj = errorObj.error;
      }
      if (!errorObj.status) {
           errorObj = JSON.parse(errorObj);
      }

      console.log("Erro Detectado pelo Interceptor!!!");
      console.log(errorObj);

      return Observable.throw(errorObj);
    }) as any;
  }
}

export const ErrorInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: ErrorInterceptor,
  multi: true
};
