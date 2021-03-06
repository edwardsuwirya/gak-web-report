import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../shared/service/authentication.service';
import {AppTokenService} from '../shared/service/app-token.service';
import {ReportingService} from '../shared/service/reporting.service';
import {Subscription} from 'rxjs';
import {ReportParam} from '../shared/model/report-param';
import {Customer} from "../shared/model/customer";
import {CustomerService} from "../shared/service/customer.service";
import {ResponsibilityCenterService} from "../shared/service/responsibility-center.service";

declare let $: any;
declare let Materialize: any;

@Component({
  selector: 'app-member-points-page',
  templateUrl: './member-points-page.component.html',
  providers: [AuthenticationService, AppTokenService, ReportingService, CustomerService, ResponsibilityCenterService],
  styleUrls: ['./member-points-page.component.css']
})
export class MemberPointsPageComponent implements OnInit {
  sCustomer1: string;
  sCustomer2: string;
  isDisabledForProcess: boolean = false;

  mySub: Subscription;

  errorMessage: string = 'An error occured';

  customerName1: string;
  customerName2: string;

  constructor(private authService: AuthenticationService, private reportingService: ReportingService) {
  }

  ngOnInit() {
    this.authService.checkCredentials();
  }

  openPopUp(id) {
    $(id).modal('open');
  }

  onCustomerSelection1(event: Customer) {
    this.sCustomer1 = event.s_customerCode;
    this.customerName1 = event.s_customerName;
    this.sCustomer2 = this.sCustomer1;
    this.customerName2 = this.customerName1;
  }

  onCustomerSelection2(event: Customer) {
    this.sCustomer2 = event.s_customerCode;
    this.customerName2 = event.s_customerName;
  }

  logout() {
    this.authService.logout();
  }

  cancelReport() {
    if (this.mySub) {
      this.mySub.unsubscribe();
      this.isDisabledForProcess = false;
    }
  }

  createReport() {
    let reportParam = new ReportParam();
    reportParam.sCompanyCode = 'GAK';
    reportParam.sMemberCodeStart = (this.sCustomer1 === null || this.sCustomer1 === undefined) ? '' : this.sCustomer1;
    reportParam.sMemberCodeEnd = (this.sCustomer2 === null || this.sCustomer2 === undefined) ? '' : this.sCustomer2;
    reportParam.userPrint = 'staff';

    this.isDisabledForProcess = true;

    this.mySub = this.reportingService.getReport(reportParam, 'memberPoint').subscribe(() => '',
      (err) => {
        this.errorMessage = 'Something\'s not good happened, redirecting to login';
        Materialize.toast(this.errorMessage, 2000, 'red');
        this.isDisabledForProcess = false;
        this.logout();
      },
      () => {
        this.isDisabledForProcess = false;
      });
  }


}
