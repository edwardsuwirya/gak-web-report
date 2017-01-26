import {Injectable} from '@angular/core';
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";
import {CommonResponse} from "../model/common-response";

@Injectable()
export class ResponsibilityCenterService {

  private getAllResponsibilityCenterUrl = 'http://192.168.5.20:8080/ifm.webservice.responsibilitycenter/api/responsibilitycenter/getall/GAK';
  private getResponsibilityCenterUrl = 'http://192.168.5.20:8080/ifm.webservice.responsibilitycenter/api/responsibilitycenter/get/GAK';

  constructor(private http: Http) {
  }

  getAllResponsibility(): Observable<CommonResponse> {
    return this.http.get(this.getAllResponsibilityCenterUrl)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  getResponsibility(rcCode: string, rcName: string): Observable<CommonResponse> {
    return this.http.get(this.getResponsibilityCenterUrl + '/' + rcCode + '/' + rcName + '/Y')
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
}
