import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { SupabaseService } from '../../service/supabase.service';

@Component({
  selector: 'login-componet',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  public loginForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private supabaseService: SupabaseService
  ) {
    this.formBuilder = new FormBuilder();
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  public async login() {
    if (this.loginForm.invalid) {
      alert('Formulario inválido');
      return;
    }
    try {
      const users = await this.supabaseService.obtenerUsuario();
      console.log(users);
    } catch (error) {
      console.error("Error al obtener usuarios:", error);
    }
  }
}
