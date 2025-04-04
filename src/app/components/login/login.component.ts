import { Component } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  email: string | null = null;
  senha_hash: string | null = null;

  constructor(
    private AuthService: AuthService,
    private loginService: LoginService,
    private toastr: ToastrService,
    private router: Router
  ) {}
  showSucsess() {
    this.toastr.success('Login realizado com sucesso!');
  }
  showError(erro: string, mensagem: string) {
    this.toastr.error(erro, mensagem);
  }

  login() {
    if (this.email && this.senha_hash) {
      this.loginService.login(this.email, this.senha_hash).subscribe({
        next: (response) => {
          // console.log('Login successful', response);
          this.showSucsess();
          this.router.navigate(['/home']);
          const token = response.token;
          // console.log('token:', token);
          this.AuthService.saveToken(token);
        },
        error: (err) => {
          console.error('Login failed', err);
          const errorMessage = err.error?.message || 'Erro no login'; //evitar crashar caso err.error for undefined;
          this.showError(errorMessage, 'Deu erro no login');
        },
        complete: () => {
          console.log('Completou a função.');
        }, //só chama se quiser, se não vai usar, pode apagar.
      });
    }
  }
}
