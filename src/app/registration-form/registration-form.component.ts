import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { equal } from './form-validators';
import { ApiService } from '../registration.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent {
  constructor(private fb: FormBuilder, private apiService: ApiService, private router: Router) { }

  showForm: boolean = true;
  showEmailField: boolean;

  form: FormGroup;
  emailCode: string;

  get email() { return this.form.controls['email']; }
  get password() { return this.form.controls['password'] }
  get passwordConfirm() { return this.form.controls['passwordConfirm']; }

  ngOnInit() {
    this.form = this.fb.group({
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      password: ['', [
        Validators.required,
        Validators.pattern(/^[A-Za-z0-9]+$/),
        Validators.minLength(6)
      ]],
      passwordConfirm: ['', [
        Validators.required,
        Validators.pattern(/^[A-Za-z0-9]+$/),
        Validators.minLength(6)
      ]]
    },
      {
        validator: equal('password', 'passwordConfirm')
      });
  }

  submit() {
    if (this.form.invalid) return;
    this.showForm = false;
    this.apiService.submitForm(this.form).subscribe(result => this.showEmailField = true)
  }

  navigate() {
    this.router.navigate(['userPage']);
  }
}
