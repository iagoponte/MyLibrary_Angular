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
  imports: [MatCardModule, FormsModule, ReactiveFormsModule, MatInputModule, 
    MatButtonModule, MatFormFieldModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
email: string | null = null;
senha_hash: string | null = null;

constructor(private AuthService: AuthService, private loginService: LoginService, private toastr: ToastrService,
  private router: Router
) { }
  showSucsess() {
    this.toastr.success('Login realizado com sucesso!');
  }
  showError(erro: string, mensagem: string) {
    this.toastr.error(erro, mensagem);
  }

  
  login(){
    if (this.email && this.senha_hash) {
      this.loginService.login(this.email, this.senha_hash).subscribe(
        (response) => {
          // console.log('Login successful', response);
          this.showSucsess();
          this.router.navigate(['/home']);
          const token = response.token;
          // console.log('token:', token);
          this.AuthService.saveToken(token);
          // Handle successful login here (e.g., navigate to another page)
        },
        (error) => {  
          this.showError(error.error.message, "Deu um erro no login");
          console.log('Login failed', error);
          // console.error('Login failed', error);
          // Handle login error here
        }
      );
    } else {
      console.error('Email and password must not be null');
      // Handle the case where email or password is null
    }
  }
  
}
