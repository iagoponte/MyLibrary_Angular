import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Livro } from '../../interface/livro';
import { LivrosService } from '../../services/livros.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-modal-crud-livros',
  standalone: true,
  imports: [ 
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDialogModule],
  templateUrl: './modal-crud-livros.component.html',
  styleUrl: './modal-crud-livros.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalCrudLivrosComponent {
    id: number | null = null;
    titulo: string | null = null;
    autor: string | null = null;
    ano_publicacao: number | null = null;
    genero: string| null = null;
    capa: string | null = null;
    sinopse: string | null = null;
    preco: number | null = null;
    quantidade: number | null = null;

    constructor(@Inject(MAT_DIALOG_DATA) public livro: any, private livrosService: LivrosService, private toastr: ToastrService) {}

    showSucsess(mensagem: string) {
      this.toastr.success(mensagem);
    }
    showError(erro: string, mensagem: string) {
      this.toastr.error(erro, mensagem);
    }

    livros: Livro[] = [];
      editLivros(livro: Livro) {
        console.log('entrou no edit!!')
        if (this.livro) {
          console.log("o meu livro é:", this.livro)
          this.livrosService.updateLivro(
            livro.id,
            livro.titulo,
            livro.autor,
            livro.ano_publicacao,
            livro.genero,
            livro.capa,
            livro.sinopse,
            livro.preco,
            livro.quantidade
          ).subscribe({
            next: (updated) => {
              console.log('usuário criado', updated);
              this.showSucsess('Livro editado com sucesso!');
            },
            error: err => {
              console.error(err);
              const errorMessage = err.error?.message || "Erro ao editar" //evitar crashar caso err.error for undefined;
              this.showError(errorMessage, "Deu erro na edição");
            }
          })
        }
      }
    
      deleteLivros(livro: Livro){
        if (this.livro) {
          this.livrosService.deleteLivro(livro.id).subscribe({
            next: () => {
              console.log('deletado!!')
            this.showSucsess("Livro deletado com sucesso!");
            },
            error: err => {
              console.error(err);
              const errorMessage = err.error?.message || "Erro ao deletar" //evitar crashar caso err.error for undefined;
              this.showError(errorMessage, "Deu erro na deleção");
            }
          })
        }
      }

      createLivros(livro: Livro){
        if (this.livro) {
          this.livrosService.createLivro(livro).subscribe({
            next: (response) => {
              console.log('livro criado', response);
            this.showSucsess('Livro Criado com sucesso!');
            },
            error: err => {
              console.error(err);
              const errorMessage = err.error?.message || "Erro ao criar" //evitar crashar caso err.error for undefined;
              this.showError(errorMessage, "Deu erro na criação");
            }
          })
        }
      }
}
