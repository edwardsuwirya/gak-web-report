import {Component, OnInit, Output, EventEmitter, Input, AfterViewInit} from '@angular/core';
import {ResponsibilityCenter} from "../../model/responsibility-center";
import {ResponsibilityCenterService} from "../../service/responsibility-center.service";

declare let $: any;
declare let Materialize: any;

@Component({
  selector: 'app-my-responsibility-center-picker',
  providers: [ResponsibilityCenterService],
  templateUrl: './my-responsibility-center-picker.component.html',
  styleUrls: ['./my-responsibility-center-picker.component.css']
})
export class MyResponsibilityCenterPickerComponent implements OnInit, AfterViewInit {
  @Input()
  rcPickerId: string;
  @Output()
  rcSelection = new EventEmitter<ResponsibilityCenter>();

  responsibilityCenters: ResponsibilityCenter[];

  rcRealCode: string;
  rcName: string;

  constructor(private responsibilityCenterService: ResponsibilityCenterService) {
  }

  ngOnInit() {
  }

  onRefreshData() {
    let respCtrRealCode: string;
    let respCtrName: string;
    if (!this.rcRealCode) {
      respCtrRealCode = '%%';
    } else {
      respCtrRealCode = this.rcRealCode;
    }
    if (!this.rcName) {
      respCtrName = '%%';
    } else {
      respCtrName = this.rcName;
    }

    this.responsibilityCenterService.getResponsibility(encodeURI(respCtrRealCode), encodeURI(respCtrName))
      .subscribe(cr => {
        let resp = cr.responseDescription;
        this.responsibilityCenters = JSON.parse(resp);
      },err=>{
        Materialize.toast('Failed to get data picker', 2500,'red');
      });
    // this.responsibilityCenterService.getAllResponsibility()
    //   .subscribe(cr => {
    //     let resp = cr.responseDescription;
    //     this.responsibilityCenters = JSON.parse(resp);
    //   })
  }

  ngAfterViewInit() {
    $('.modal').modal();
  }

  onRCSelection(responsibilityCenter: ResponsibilityCenter) {
    this.rcSelection.emit(responsibilityCenter);
    $('.modal').modal('close');
  }
}
