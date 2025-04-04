import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { ClienteService } from '../../services/cliente.service';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [MatCardModule,
      FormsModule,
      ReactiveFormsModule,
      MatInputModule,
      MatButtonModule,
      MatFormFieldModule,],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  email: string | null = null;
  nome_usuario: string | null = null;
  senha_hash: string | null = null;
  
  constructor(private AuthService: AuthService, private clienteService: ClienteService, private toastr: ToastrService,
    private router: Router) { }

  showSucsess() {
    this.toastr.success('Cadastro realizado com sucesso!');
  }
  showError(erro: string, mensagem: string) {
    this.toastr.error(erro, mensagem);
  }

  signup() {
    if (this.email && this.nome_usuario && this.senha_hash) {
      this.clienteService.createCliente(this.nome_usuario, this.email, this.senha_hash).subscribe({
        next: (response) => {
          console.log('usuário criado', response);
          this.showSucsess();
          this.router.navigate(['/signin']);
        },
        error: err => {
          console.error(err);
          const errorMessage = err.error?.message || "Erro ao cadastrar" //evitar crashar caso err.error for undefined;
          this.showError(errorMessage, "Deu erro no cadastro");
        },
        complete: () => {} //só chama se quiser, se não vai usar, pode apagar.
      })
    }
  }
}
