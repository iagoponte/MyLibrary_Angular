import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { LivrosService } from '../../services/livros.service';
import { Router } from '@angular/router';
import { AsyncPipe, NgFor, NgForOf } from '@angular/common';
import { Livro } from '../../interface/livro';
import { ModalLivroComponent } from '../modal-livro/modal-livro.component';
import { MatDialog } from '@angular/material/dialog';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, NgFor, NgForOf, AsyncPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  constructor (private livrosService: LivrosService, private router: Router) {}
  livros$!: Observable<Livro[]>;
  livros: Livro[] = [];

ngOnInit(): void {
  this.livros$ = this.livrosService.getLivros().pipe(
    map((data => data.sort((a, b) => a.titulo.localeCompare(b.titulo))))
  );
}

  getLivros(){
    return this.livrosService.getLivros().subscribe({
      next: (data) => {
        console.log('Cadê esses livros pqp', data);
        this.livros = data.sort((a, b) => a.titulo.localeCompare(b.titulo))
      },
      error: (err) => {
        console.error(err.error.message);
      }
    });
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
