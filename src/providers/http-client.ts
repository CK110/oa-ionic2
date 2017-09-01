import {Injectable} from "@angular/core";
import {Http,Headers} from "@angular/http";
import {StorageService} from "./storage-service";
import {Observable} from "rxjs/Observable";
import {LoadingController} from "ionic-angular";

@Injectable()
export class HttpClient{

  constructor(private http:Http,
              private storageService:StorageService,
              private loadingCtrl:LoadingController,){

  }

  createAuthorizationHeader(headers: Headers) {
    const token = this.storageService.getToken();
    headers.append('Authorization', 'Basic ' + token );
  }

  post(url: string, body?: any, showLoading:boolean=true):Observable<Response> {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    let loading ;
    if(showLoading){
      loading = this.loadingCtrl.create();
    }

    return Observable.create(observer => {
      if(showLoading){
        loading.present()
      }
      this.http.post(url, body,{headers: headers}).subscribe(res => {
        if(showLoading) {
          loading.dismiss();
        }
        observer.next(res);
      }, err => {
        console.log('处理请求失败');
        observer.error(err);
      });
    });

  }
}
