import {Injectable} from '@angular/core';
import {Http, RequestOptions, Headers, Response, ResponseContentType} from "@angular/http";
import {ReportParam} from "../model/report-param";
import {Observable} from "rxjs";

@Injectable()
export class ReportingService {

  constructor(private http: Http) {
  }

  getReport(reportParam: ReportParam, reportName: string): Observable<void> {
    let getReportURL: string = 'http://192.168.5.20:8080/5aSec/api/report/pdf/' + reportName;
    let validToken = localStorage.getItem('usertoken');

    let headers = new Headers({
      'Accept': 'application/pdf',
      'Content-Type': 'application/json',
      'authentication': validToken
    });

    let options = new RequestOptions({headers: headers, responseType: ResponseContentType.Blob});

    return this.http.post(getReportURL, reportParam, options).map(res => this.extractContent(res, reportName)).catch(this.handleError);

  }

  getTableReport(reportParam: ReportParam, reportName: string): Observable<any> {
    let getReportURL: string = 'http://192.168.5.20:8080/5aSec/api/report/' + reportName;
    let validToken = localStorage.getItem('usertoken');
    let headers = new Headers({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'authentication': validToken
    });

    let options = new RequestOptions({headers: headers});

    return this.http.post(getReportURL, reportParam, options).map(this.extractData);

  }

  private extractData(res: Response) {
    let body = res.json();
    //    return JSON.parse(body.responseDescription) || {};
    return JSON.parse(body.responseDescription) || {};
  }

  private extractContent(res: Response, reportName: string) {
    let blob: Blob = res.blob();
    window['saveAs'](blob, reportName + '.pdf');
  }

  private handleError(error: Response) {
    console.log(error);
    return Observable.throw(error.json().error || 'Server error');
  }

}
