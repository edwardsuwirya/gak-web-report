import {Component, OnInit, AfterViewInit, ViewChild} from "@angular/core";
import {ReportingService} from "../shared/service/reporting.service";
import {AuthenticationService} from "../shared/service/authentication.service";
import {AppTokenService} from "../shared/service/app-token.service";
import {Subscription} from "rxjs";
import {ReportParam} from "../shared/model/report-param";
import {MyDatePickerComponent} from "../shared/component/my-date-picker/my-date-picker.component";
import {ResponsibilityCenter} from "../shared/model/responsibility-center";
import {Article} from "../shared/model/article";
import {Customer} from "../shared/model/customer";
import {ResponsibilityCenterService} from "../shared/service/responsibility-center.service";
import {CustomerService} from "../shared/service/customer.service";

declare let $: any;
declare let Materialize: any;

@Component({
  selector: 'app-delivery-order-page',
  providers: [AuthenticationService, AppTokenService, ReportingService,CustomerService,ResponsibilityCenterService],
  templateUrl: './delivery-order-page.component.html',
  styleUrls: ['./delivery-order-page.component.css']
})
export class DeliveryOrderPageComponent implements OnInit, AfterViewInit {
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
  isDisabledForProcess: boolean = false;

  rcName1: string;
  rcName2: string;
  articleName1: string;
  articleName2: string;
  customerName1: string;
  customerName2: string;

  @ViewChild('date2')
  private datePicker2: MyDatePickerComponent;

  mySub: Subscription;
  errorMessage: string = 'An error occured';

  constructor(private authService: AuthenticationService, private reportingService: ReportingService) {
  }

  ngOnInit() {
    this.authService.checkCredentials();
  }

  openPopUp(id){
    $(id).modal('open');
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


  logout() {
    this.authService.logout();
  }

  ngAfterViewInit() {
    $('.modal').modal();
  }

  cancelReport() {
    if (this.mySub) {
      this.mySub.unsubscribe();
      this.isDisabledForProcess = false;
    }
  }

  createReport(reportType: number) {
    if (this.sDate1 === null || this.sDate1 === undefined || this.sDate2 === null || this.sDate2 === undefined
      || this.sRC1 === null || this.sRC1 === undefined || this.sRC2 === null || this.sRC2 === undefined) {
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
      reportParam.userPrint = 'staff';

      this.isDisabledForProcess = true;

      this.mySub = this.reportingService.getReport(reportParam, 'listDOActivity').subscribe(() => '',
        (err) => {
          this.errorMessage = 'An error occured : ' + err;
          Materialize.toast(this.errorMessage, 2000, 'red');
          this.isDisabledForProcess = false;
        },
        () => {
          this.isDisabledForProcess = false;
        });
    }
  }

}
