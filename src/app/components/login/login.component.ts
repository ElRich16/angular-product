import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  getAuth,
} from 'firebase/auth';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { auth } from '../../../firebase-init';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, InputTextModule, ButtonModule,],
  templateUrl: './login.component.html',
})
export class LoginComponent {
  loading = false;

  loginform : any;


  constructor(private fb: FormBuilder, private router: Router) {
      this.loginform = this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required]],
      });
  }

  loginWithEmail() {
    if (this.loginform.invalid) return;
    this.loading = true;

    const { email, password } = this.loginform.value;
    const authorization = auth;

    signInWithEmailAndPassword(authorization, email!, password!)
      .then(() => {
        this.router.navigate(['/home']);
      })
      .catch((err) => {
        alert('Errore: ' + err.message);
      })
      .finally(() => {
        this.loading = false;
      });
  }

  loginWithGoogle() {
    console.log('loginWithGoogle')
    this.loading = true;
    const provider = new GoogleAuthProvider();
    const authorization = auth;

    signInWithPopup(authorization, provider)
      .then(() => {
        this.router.navigate(['/home']);
      })
      .catch((err) => {
        alert('Errore con Google: ' + err.message);
      })
      .finally(() => {
        this.loading = false;
      });
  }
}
