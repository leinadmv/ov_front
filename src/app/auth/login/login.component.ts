import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(private router: Router, private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      documentType: ['', Validators.required],
      documentNumber: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit() {
  }

  redirectToPage(): void {
    this.router.navigate(['/components']);
  }

  submitForm() {
    if (this.form.valid) {
      // Lógica para manejar el envío del formulario
    }
  }

}
