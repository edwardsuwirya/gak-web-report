import {Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import {AuthenticationService} from '../shared/service/authentication.service';
import {AppTokenService} from '../shared/service/app-token.service';
import {User} from '../shared/model/user';
import {Router} from "@angular/router";

declare let $: any;
declare let Materialize: any;
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  providers: [AuthenticationService, AppTokenService],
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit,AfterViewInit {

  @ViewChild('userNameInput')
  userNameInput: any;

  user = new User('', '', '');

  constructor(private router: Router, private authService: AuthenticationService) {
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.userNameInput.nativeElement.focus();
  }

  login() {
    this.authService.login(this.user).subscribe((res) => {
      if (res == false) {
        Materialize.toast('Failed to login', 2000, 'red');
      } else {
        this.router.navigate(['home']);
      }
    })

  }

}
