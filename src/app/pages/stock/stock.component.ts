import {AfterViewInit, Component, inject, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { Livro } from '../../interface/livro';
import { LivrosService } from '../../services/livros.service';

/**
 * @title Table with pagination
 */
@Component({
  selector: 'app-stock',
  styleUrl: './stock.component.scss',
  templateUrl: './stock.component.html',
  imports: [MatTableModule, MatPaginatorModule],
  standalone: true
})

export class StockComponent implements AfterViewInit {
  readonly livrosService = inject(LivrosService)

  displayedColumns: string[] = ['id', 'titulo', 'autor', 'ano_publicacao', 'genero', 'capa', 'sinopse', 'preco', 'created_at'];
  dataSource = new MatTableDataSource<Livro>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  livros: Livro[] = [];
  getLivros(){

    return this.livrosService.getLivros().subscribe(
      (data) => {
        // console.log(data);
        //ver se vai dar certo
        this.livros = data.sort((a, b) => a.id - b.id);
        this.dataSource.data = this.livros;
      }
    );
  };

  ngOnInit() {
    this.getLivros();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  
}