import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }


  ngOnInit(): void {
    const loggedIn = sessionStorage.getItem('loggedIn');
    if (loggedIn) {
      this.router.navigate(['/main']);
    }
  }

  onSubmit() {

    const formData = this.loginForm.value;

    if (this.loginForm.valid) {
      sessionStorage.setItem('formData', JSON.stringify(formData));
      sessionStorage.setItem('loggedIn', 'true');
      this.router.navigate(['/main']);
    }
  }



}
