import {AfterViewInit, Component, inject, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { Livro } from '../../interface/livro';
import { LivrosService } from '../../services/livros.service';
import { ModalCrudLivrosComponent } from '../../components/modal-crud-livros/modal-crud-livros.component';
import { MatDialog } from '@angular/material/dialog';

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

  displayedColumns: string[] = ['id', 'titulo', 'autor', 'ano_publicacao', 'genero', 'preco', 'quantidade'];
  dataSource = new MatTableDataSource<Livro>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  livros: Livro[] = [];
  getLivros(){
    return this.livrosService.getLivros().subscribe(
      (data) => {
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
    readonly dialog = inject(MatDialog);

   openModalLivroCrud(livro: any) {
        const dialogRef = this.dialog.open(ModalCrudLivrosComponent, {
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