import { routes } from './../app.routes';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { SupabaseService } from '../../service/supabase.service';
import { Router } from '@angular/router';
import { AuthService } from '../../service/Auth/auth.service';

@Component({
  selector: 'login-componet',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  public loginForm: FormGroup;
  public errorMessage: string;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.errorMessage = '';
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.email]], // Añadido validador de email
      password: ['', [Validators.required, Validators.minLength(6)]], // Añadido longitud mínima
    });
  }

  public async login() {
    if (this.loginForm.invalid) {
      throw new Error('Por favor, complete todos los campos correctamente');
      return;
    }

    const authResponse = await this.authService.signUp({
      email: this.loginForm.value.username ?? '',
      password: this.loginForm.value.password ?? '',
    });

    console.log('Auth response:', authResponse);
  }
}
