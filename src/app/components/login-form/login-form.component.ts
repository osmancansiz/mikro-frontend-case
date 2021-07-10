import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RequestService } from '../../core/services/request.service'
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  loading = false;

  constructor(private formBuilder: FormBuilder, private requestService: RequestService) {}

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
      this.loading = true;
      this.requestService.logIn(this.loginForm.value.email, this.loginForm.value.password)
      .then((result) => {
        this.loading = false;
        alert("Login Successfully");
        console.log(result)
      }).catch((err) => {
        this.loading = false;
        alert(err.message);
        throw err;
      });
    }
  }
}
