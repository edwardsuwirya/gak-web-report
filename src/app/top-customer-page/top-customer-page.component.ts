import {Component, OnInit, ViewChild} from "@angular/core";
import {AuthenticationService} from "../shared/service/authentication.service";
import {AppTokenService} from "../shared/service/app-token.service";
import {ReportingService} from "../shared/service/reporting.service";
import {Subscription} from "rxjs";
import {ReportParam} from "../shared/model/report-param";
import {MyDatePickerComponent} from "../shared/component/my-date-picker/my-date-picker.component";
import {ResponsibilityCenter} from "../shared/model/responsibility-center";
import {Article} from "../shared/model/article";
import {Customer} from "../shared/model/customer";
import {CustomerService} from "../shared/service/customer.service";
import {ResponsibilityCenterService} from "../shared/service/responsibility-center.service";
import {Router} from "@angular/router";

declare let $: any;
declare let Materialize: any;

@Component({
  selector: 'app-top-customer-page',
  providers: [AuthenticationService, AppTokenService, ReportingService, CustomerService, ResponsibilityCenterService],
  templateUrl: './top-customer-page.component.html',
  styleUrls: ['./top-customer-page.component.css']
})
export class TopCustomerPageComponent implements OnInit {
  ddformat: string = 'DD MMM YYYY';
  labelDateText: string = 'Date';
  dateId1: string = 'date1';
  dateId2: string = 'date2';
  sDate1: string;
  sDate2: string;
  sRC1: string;
  sRC2: string;
  sArticle1: string;
  sArticle2: string;
  sCustomer1: string;
  sCustomer2: string;
  sRCCustomerBase1: string;
  sRCCustomerBase2: string;
  sType: string;
  isDisabledForProcess: boolean = false;

  rcName1: string;
  rcName2: string;
  articleName1: string;
  articleName2: string;
  customerName1: string;
  customerName2: string;
  customerBaseName1: string;
  customerBaseName2: string;

  @ViewChild('date2')
  private datePicker2: MyDatePickerComponent;

  mySub: Subscription;

  errorMessage: string = 'An error occured';

  constructor(private authService: AuthenticationService, private reportingService: ReportingService) {
  }

  ngOnInit() {
    this.authService.checkCredentials();
  }

  openPopUp(id) {
    $(id).modal('open');
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

  dateValChange(id: string, val) {
    if (id === '1') {
      this.sDate1 = val;
      this.sDate2 = val;
      this.datePicker2.setAnotherDate(new Date(val));
    } else {
      this.sDate2 = val;
    }
  }

  onRCSelection1(event: ResponsibilityCenter) {
    this.sRC1 = event.s_responsibilityCenterCode;
    this.rcName1 = event.s_responsibilityCenterName;
    this.sRC2 = this.sRC1;
    this.rcName2 = this.rcName1;

  }

  onRCSelection2(event: ResponsibilityCenter) {
    this.sRC2 = event.s_responsibilityCenterCode;
    this.rcName2 = event.s_responsibilityCenterName;
  }

  onArticleSelection1(event: Article) {
    this.sArticle1 = event.s_articleRealCode;
    this.articleName1 = event.s_articleName;
    this.sArticle2 = this.sArticle1;
    this.articleName2 = this.articleName1;
  }

  onArticleSelection2(event: Article) {
    this.sArticle2 = event.s_articleRealCode;
    this.articleName2 = event.s_articleName;
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

  onCustomerBase1(event: ResponsibilityCenter) {
    this.sRCCustomerBase1 = event.s_responsibilityCenterCode;
    this.customerBaseName1 = event.s_responsibilityCenterName;
    this.sRCCustomerBase2 = this.sRCCustomerBase1;
    this.customerBaseName2 = this.customerBaseName1;
  }

  onCustomerBase2(event: ResponsibilityCenter) {
    this.sRCCustomerBase2 = event.s_responsibilityCenterCode;
    this.customerBaseName2 = event.s_responsibilityCenterName;
  }

  createReport(reportType: number) {
    if (this.sDate1 === null || this.sDate1 === undefined || this.sDate2 === null || this.sDate2 === undefined
      || this.sRC1 === null || this.sRC1 === undefined || this.sRC2 === null || this.sRC2 === undefined
      || this.sRCCustomerBase1 === null || this.sRCCustomerBase1 === undefined
      || this.sRCCustomerBase2 === null || this.sRCCustomerBase2 === undefined) {
      this.errorMessage = 'Please fill all mandatory fields';
      Materialize.toast(this.errorMessage, 2000, 'red');
    } else {
      let reportParam = new ReportParam();
      reportParam.sCompanyCode = 'GAK';
      reportParam.sDate1 = this.sDate1;
      reportParam.sDate2 = this.sDate2;
      reportParam.sRC1 = this.sRC1;
      reportParam.sRC2 = this.sRC2;
      reportParam.sArticle1 = (this.sArticle1 === null || this.sArticle1 === undefined) ? '' : this.sArticle1;
      reportParam.sArticle2 = (this.sArticle2 === null || this.sArticle2 === undefined) ? '' : this.sArticle2;
      reportParam.sCustomer1 = (this.sCustomer1 === null || this.sCustomer1 === undefined) ? '' : this.sCustomer1;
      reportParam.sCustomer2 = (this.sCustomer2 === null || this.sCustomer2 === undefined) ? '' : this.sCustomer2;
      reportParam.sRCCustomerBase1 = this.sRCCustomerBase1;
      reportParam.sRCCustomerBase2 = this.sRCCustomerBase2;
      reportParam.sType = 'S';
      reportParam.userPrint = 'staff';

      this.isDisabledForProcess = true;

      this.mySub = this.reportingService.getReport(reportParam, 'topCustomer').subscribe(() => '',
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
}
