import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RequestService } from '../../core/services/request.service'
@Component({
  selector: 'app-password-form',
  templateUrl: './password-form.component.html',
  styleUrls: ['./password-form.component.scss']
})
export class PasswordFormComponent implements OnInit {
  passwordForm: FormGroup;
  submitted = false;
  loading = false;

  constructor(private formBuilder: FormBuilder, private requestService: RequestService) {}

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
      this.loading = true;
      this.requestService.resetPassword(this.passwordForm.value.email)
      .then((result) => {
        this.loading = false;
        alert("Reset Password Request Successfully, Please control your e-mail.");
        console.log(result)
      }).catch((err) => {
        this.loading = false;
        alert(err.message);
        throw err;
      });
    }
  }

}
