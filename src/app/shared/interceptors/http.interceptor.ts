import { HttpHandler, HttpInterceptor, HttpRequest, HttpEvent } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";
import { Observable } from "rxjs";

@Injectable()
export class CustomHttpInterceptor implements HttpInterceptor {

    intercept(request: HttpRequest<any>, next: HttpHandler): 
                                                        Observable<HttpEvent<any>> {
        
        let url = request.url;  //<---- remover last slash "/"

         const dupReq = request.clone({
             url: environment.API + "/" + url
         });
        
        return next.handle(dupReq);
    }
}
