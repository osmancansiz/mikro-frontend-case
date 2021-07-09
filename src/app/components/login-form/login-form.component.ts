import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  loading = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.initLoginForm();
  }

  initLoginForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  get loginFormElements() {
    return this.loginForm.controls;
  }

  submit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    } else {
      console.log(this.loginForm.value);
    }
  }
}
