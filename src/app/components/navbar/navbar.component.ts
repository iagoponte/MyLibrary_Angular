import { Component, EventEmitter, Output } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatDrawer, MatDrawerContainer, MatDrawerContent, MatSidenav, MatSidenavContainer, MatSidenavContent } from '@angular/material/sidenav';
import { MatToolbar, MatToolbarRow } from '@angular/material/toolbar';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { MatButtonModule } from '@angular/material/button';
import { MatNavList } from '@angular/material/list';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatDrawer, MatDrawerContent, MatButtonModule, MatSidenav, MatSidenavContent, MatNavList, MatSidenavContainer, MatDrawerContainer, MatDrawer, MatToolbar, MatToolbarRow, MatIcon, SidebarComponent, RouterOutlet],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  showFiller = false;
  @Output() menuClicked = new EventEmitter<void>();

  menuClick() {
    this.menuClicked.emit(); // Emite o evento para abrir/fechar o drawer
  }
}
