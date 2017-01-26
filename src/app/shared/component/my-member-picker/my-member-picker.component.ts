import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {CustomerService} from "../../service/customer.service";
import {ResponsibilityCenter} from "../../model/responsibility-center";
import {ResponsibilityCenterService} from "../../service/responsibility-center.service";
import {Customer} from "../../model/customer";

declare let $: any;
declare let Materialize: any;

@Component({
  selector: 'app-my-member-picker',
  templateUrl: './my-member-picker.component.html',
  styleUrls: ['./my-member-picker.component.css']
})
export class MyMemberPickerComponent implements OnInit {
  @Input()
  memberPickerId: string;

  @Output()
  memberSelection = new EventEmitter<Customer>();

  members: Customer[];
  responsibilityCenters: ResponsibilityCenter[];

  memberCode: string;
  memberName: string;
  memberResponsibilityCode: string;
  memberTypeCode: string;

  constructor(private memberService: CustomerService, private responsibilityCenterService: ResponsibilityCenterService) {
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

  onMemberSelection(member: Customer) {
    this.memberSelection.emit(member);
    $('.modal').modal('close');
  }

  onRefreshData() {
    let memberCode: string;
    let memberName: string;
    let memberResponsibilityCode: string;
    let memberTypeCode: string;

    if (!this.memberCode) {
      memberCode = '%%';
    } else {
      memberCode = this.memberCode;
    }
    if (!this.memberName) {
      memberName = '%%';
    } else {
      memberName = this.memberName;
    }
    this.memberResponsibilityCode = $('#member_respcode').val();
    if (!this.memberResponsibilityCode) {
      memberResponsibilityCode = '%%';
    } else {
      memberResponsibilityCode = this.memberResponsibilityCode;
    }
    if (!this.memberTypeCode) {
      memberTypeCode = '%%';
    } else {
      memberTypeCode = this.memberTypeCode;
    }


    this.memberService.getMember('GAK', encodeURI(memberCode), encodeURI(memberName), encodeURI(memberResponsibilityCode), encodeURI(memberTypeCode)
    ).subscribe(cr => {
      let resp = cr.responseDescription;
      this.members = JSON.parse(resp);
    }, err => {
      Materialize.toast('Failed to get data picker', 2500, 'red');
    });

  }

}
