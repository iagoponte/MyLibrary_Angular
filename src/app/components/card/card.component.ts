import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { LivrosService } from '../../services/livros.service';
import { Router } from '@angular/router';
import { NgFor, NgForOf } from '@angular/common';
import { Livro } from '../../interface/livro';
import { ModalLivroComponent } from '../modal-livro/modal-livro.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, NgFor, NgForOf],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  constructor (private livrosService: LivrosService, private router: Router) {}
  livros: Livro[] = [];

  ngOnInit(): void {
    this.getLivros();
  }

  getLivros(){
    return this.livrosService.getLivros().subscribe(
      (data) => {
        // console.log(data);
        this.livros = data.sort((a, b) => a.titulo.localeCompare(b.titulo))
      }
    );
  };

  // redirect(){
  //   return this.router.navigate(['/detalhes'])
  // };

  //para o modal rodar pelo card::
    readonly dialog = inject(MatDialog);
  
    openModalLivro(livro: any) {
      const dialogRef = this.dialog.open(ModalLivroComponent, {
        data: livro,
        width: '70%',
        height: '80%'
      });
  
      dialogRef.afterClosed().subscribe({
        next: result => console.log(`Dialog result: ${result}`),
        error: err => {
          console.error(err);
        },
        complete: () => {console.log('completo modal-dialog')}
      })
    }
}
