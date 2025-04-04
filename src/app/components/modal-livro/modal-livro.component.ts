import { NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject, inject, InjectionToken } from '@angular/core';
import { MatButton, MatButtonModule } from '@angular/material/button';
import {MatDialog, MatDialogModule, MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'conteudo-modal',
  standalone: true,
  templateUrl: './modal-livro.component.html',
  styleUrl: './modal-livro.component.scss',
  imports: [ MatDialogModule, MatButtonModule, NgFor],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class ModalLivroComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public livro: any) {} 
} 

