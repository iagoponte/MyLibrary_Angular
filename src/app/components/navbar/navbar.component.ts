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
import { MatToolbar, MatToolbarRow } from '@angular/material/toolbar';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { MatButtonModule } from '@angular/material/button';
import { MatNavList } from '@angular/material/list';
import { RouterLink, RouterOutlet } from '@angular/router';
import {MatMenuModule, MatMenuTrigger} from '@angular/material/menu';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    MatDrawer,
    MatDrawerContent,
    MatButtonModule,
    MatSidenav,
    MatSidenavContent,
    MatNavList,
    MatSidenavContainer,
    MatDrawerContainer,
    MatDrawer,
    MatToolbar,
    MatToolbarRow,
    MatIcon,
    SidebarComponent,
    MatMenuModule,
    RouterOutlet,
    RouterLink
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
