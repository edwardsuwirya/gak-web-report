import {Injectable} from '@angular/core';
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";

@Injectable()
export class CustomerService {
  private getCustomerUrl = 'http://192.168.5.20:8080/ifm.webservice.customer/api/customer/get';
  private getMemberUrl = 'http://192.168.5.20:8080/ifm.webservice.customer/api/member/get';

  constructor(private http: Http) {
  }

  getCustomer(companyCode: string, customerCode: string, customerName: string, customerResponsibilityCenterCode: string) {
    return this.http.get(this.getCustomerUrl + "/" + companyCode + "/" + customerCode + "/" + customerName + "/" + customerResponsibilityCenterCode + "/Y")
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  getMember(companyCode: string, memberCode: string, memberName: string, memberResponsibilityCenterCode: string, memberTypeCode: string) {
    return this.http.get(this.getMemberUrl + "/" + companyCode + "/" + memberCode + "/" + memberName + "/" + memberResponsibilityCenterCode + "/" + memberTypeCode + "/Y")
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
}
