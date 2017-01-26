import {Component, OnInit, AfterViewInit, Input, Output, EventEmitter} from '@angular/core';
import {Customer} from "../../model/customer";
import {CustomerService} from "../../service/customer.service";
import {ResponsibilityCenterService} from "../../service/responsibility-center.service";
import {ResponsibilityCenter} from "../../model/responsibility-center";

declare let $: any;
declare let Materialize: any;

@Component({
  selector: 'app-my-customer-picker',
  templateUrl: './my-customer-picker.component.html',
  styleUrls: ['./my-customer-picker.component.css']
})
export class MyCustomerPickerComponent implements OnInit,AfterViewInit {
  @Input()
  customerPickerId: string;

  @Output()
  customerSelection = new EventEmitter<Customer>();

  customers: Customer[];
  responsibilityCenters: ResponsibilityCenter[];

  customerCode: string;
  customerName: string;
  customerResponsibilityCode: string;

  constructor(private customerService: CustomerService, private responsibilityCenterService: ResponsibilityCenterService) {
  }

  ngOnInit() {
    this.responsibilityCenterService.getAllResponsibility()
      .subscribe(cr => {
        let resp = cr.responseDescription;
        this.responsibilityCenters = JSON.parse(resp);
      });
  }

  ngAfterViewInit() {
    $('.modal').modal();
    $('select').select2();
  }

  onCustomerSelection(customer: Customer) {
    this.customerSelection.emit(customer);
    $('.modal').modal('close');
  }

  onRefreshData() {
    let customerCode: string;
    let customerName: string;
    let customerResponsibilityCode: string;
    if (!this.customerCode && !this.customerName) {
      Materialize.toast('Please fill code or name', 2000, 'red');
    } else {
      if (!this.customerCode) {
        customerCode = '%%';
      } else {
        customerCode = this.customerCode;
      }
      if (!this.customerName) {
        customerName = '%%';
      } else {
        customerName = this.customerName;
      }
      this.customerResponsibilityCode = $('#customer_respcode').val();
      if (!this.customerResponsibilityCode) {
        customerResponsibilityCode = '%%';
      } else {
        customerResponsibilityCode = this.customerResponsibilityCode;
      }


      this.customerService.getCustomer('GAK', encodeURI(customerCode), encodeURI(customerName), encodeURI(customerResponsibilityCode))
        .subscribe(cr => {
          let resp = cr.responseDescription;
          this.customers = JSON.parse(resp);
        }, err => {
          Materialize.toast('Failed to get data picker', 2500, 'red');
        });
    }

  }
}
