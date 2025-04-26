import { Component, EventEmitter, Output, viewChild } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import {
  MatDrawer,
  MatDrawerContainer,
  MatDrawerContent,
  MatSidenav,
  MatSidenavContainer,
  MatSidenavContent,
} from '@angular/material/sidenav';
import { MatToolbar } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import {MatMenuModule, MatMenuTrigger} from '@angular/material/menu';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    MatButtonModule,
    MatToolbar,
    MatIcon,
    MatMenuModule,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  // showFiller = false;
  readonly menuTrigger = viewChild.required(MatMenuTrigger);

  @Output() menuClicked = new EventEmitter<void>();

  menuClick() {
    this.menuClicked.emit(); // Emite o evento para abrir/fechar o drawer
  }
}
