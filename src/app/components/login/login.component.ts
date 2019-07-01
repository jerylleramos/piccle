import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private signUp = false;

  constructor() { }

  ngOnInit() {
  }

  showSignUp() {
    this.signUp = true;
  }

  hideSignUp() {
    this.signUp = false;
  }

}
