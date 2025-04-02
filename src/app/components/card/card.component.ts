import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { LivrosService } from '../../services/livros.service';
import { Router } from '@angular/router';
import { NgFor, NgForOf } from '@angular/common';
import { Livro } from '../../interface/livro';

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
        console.log(data);
        this.livros = data.sort((a, b) => a.titulo.localeCompare(b.titulo))
      }
    );
  };

  redirect(){
    return this.router.navigate(['/detalhes'])
  };
}
