import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions} from "@angular/http";
import {User} from "../model/user";
import {Observable} from "rxjs/Rx";
import {MyToken} from "../model/my-token";

@Injectable()
export class AppTokenService {

  private getTokenUrl = 'http://192.168.5.20:8080/5aSec/common/token/create';

  constructor(private http: Http) { }

  getToken(body: User): Observable<MyToken> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers, method: 'post' });

    return this.http.post(this.getTokenUrl, body, options)
      .map(res => {
        let r = res.json();
        return r;
      })
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
}
