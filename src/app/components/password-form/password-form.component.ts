import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-password-form',
  templateUrl: './password-form.component.html',
  styleUrls: ['./password-form.component.scss']
})
export class PasswordFormComponent implements OnInit {
  passwordForm: FormGroup;
  submitted = false;
  loading = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.initPasswordForm();
  }

  initPasswordForm() {
    this.passwordForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  get passwordFormElements() {
    return this.passwordForm.controls;
  }

  submit() {
    this.submitted = true;
    if (this.passwordForm.invalid) {
      return;
    } else {
      console.log(this.passwordForm.value);
    }
  }

}
