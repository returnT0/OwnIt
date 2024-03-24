import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent implements OnInit, OnDestroy {
  usernamePattern = /^[a-zA-Z]{2,}$/;
  emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/; // min 6 chars, at least 1 letter and 1 number

  username = '';
  email = '';
  password = '';



  showEmailInput = false;
  showPasswordInput = true;
  showSubmitButton = false;

  ngOnInit() {
  }

  ngOnDestroy() {
  }

  onEmailChange() {
    this.validateInputs();
  }

  onPasswordChange() {
    this.validateInputs();
  }

  validateInputs() {
    if (this.showPasswordInput) {
      this.showSubmitButton = this.passwordPattern.test(this.password);
    } else {
      this.showSubmitButton = false;
    }
  }

}
