import {Injectable} from "@angular/core";
import {Http, RequestMethod, RequestOptions, RequestOptionsArgs,Headers} from "@angular/http";
import {Observable} from "rxjs";
import {GlobalData} from "./global-data";

@Injectable()
export class HttpService {

  constructor(private http:Http,private globalData: GlobalData,){

  }

  public request(url: string, options: RequestOptionsArgs): Observable<Response> {
    this.optionsAddToken(options);
    return Observable.create(observer => {
      // this.nativeService.showLoading();
      console.log('%c 请求前 %c', 'color:blue', '', 'url', url, 'options', options);
      this.http.request(url, options).subscribe(res => {
        // this.nativeService.hideLoading();
        console.log('%c 请求成功 %c', 'color:green', '', 'url', url, 'options', options, 'res', res);
        observer.next(res);
      }, err => {
        this.requestFailed(url, options, err);//处理请求失败
        observer.error(err);
      });
    });
  }

  public get(url: string, paramMap: any = null): Observable<Response> {
    return this.request(url, new RequestOptions({
      method: RequestMethod.Get,
      search: HttpService.buildURLSearchParams(paramMap)
    }));
  }

  public post(url: string, body: any = null): Observable<Response> {
    return this.request(url, new RequestOptions({
      method: RequestMethod.Post,
      body: body,
      headers: new Headers({
        'Content-Type': 'application/json; charset=UTF-8'
      })
    }));
  }

  public postFormData(url: string, paramMap: any = null): Observable<Response> {
    return this.request(url, new RequestOptions({
      method: RequestMethod.Post,
      search: HttpService.buildURLSearchParams(paramMap).toString(),
      headers: new Headers({
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      })
    }));
  }

  public put(url: string, body: any = null): Observable<Response> {
    return this.request(url, new RequestOptions({
      method: RequestMethod.Put,
      body: body
    }));
  }

  public delete(url: string, paramMap: any = null): Observable<Response> {
    return this.request(url, new RequestOptions({
      method: RequestMethod.Delete,
      search: HttpService.buildURLSearchParams(paramMap).toString()
    }));
  }

  public patch(url: string, body: any = null): Observable<Response> {
    return this.request(url, new RequestOptions({
      method: RequestMethod.Patch,
      body: body
    }));
  }

  public head(url: string, paramMap: any = null): Observable<Response> {
    return this.request(url, new RequestOptions({
      method: RequestMethod.Head,
      search: HttpService.buildURLSearchParams(paramMap).toString()
    }));
  }

  public options(url: string, paramMap: any = null): Observable<Response> {
    return this.request(url, new RequestOptions({
      method: RequestMethod.Options,
      search: HttpService.buildURLSearchParams(paramMap).toString()
    }));
  }

  /**
   * 将对象转为查询参数
   * @param paramMap
   * @returns {URLSearchParams}
   */
  private static buildURLSearchParams(paramMap): URLSearchParams {
    let params = new URLSearchParams();
    if (!paramMap) {
      return params;
    }
    for (let key in paramMap) {
      let val = paramMap[key];
      if (val instanceof Date) {
        // val = Utils.dateFormat(val, 'yyyy-MM-dd hh:mm:ss')
      }
      params.set(key, val);
    }
    return params;
  }

  /**
   * 处理请求失败事件
   * @param url
   * @param options
   * @param err
   */
  private requestFailed(url: string, options: RequestOptionsArgs, err): void {
    // this.nativeService.hideLoading();
    console.log('%c 请求失败 %c', 'color:red', '', 'url', url, 'options', options, 'err', err);
    let msg = '请求发生异常', status = err.status;
    // if (!this.nativeService.isConnecting()) {
    //   msg = '请求失败，请连接网络';
    // } else {
    //   if (status === 0) {
    //     msg = '请求失败，请求响应出错';
    //   } else if (status === 404) {
    //     msg = '请求失败，未找到请求地址';
    //   } else if (status === 500) {
    //     msg = '请求失败，服务器出错，请稍后再试';
    //   }
    // }
    // this.alertCtrl.create({
    //   title: msg,
    //   subTitle: '状态码:' + status,
    //   buttons: [{text: '确定'}]
    // }).present();
  }

  /**
   * headers 增加token
   * @param options
   */
  private optionsAddToken(options: RequestOptionsArgs): void {
    let token = this.globalData.token;
    if (options.headers) {
      options.headers.append('token', token);
    } else {
      options.headers = new Headers({
        'token': token
      });
    }
  }

}
