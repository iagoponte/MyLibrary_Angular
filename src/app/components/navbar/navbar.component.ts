import { Component } from '@angular/core';
import { MatDrawer, MatDrawerContainer, MatSidenav, MatSidenavContainer } from '@angular/material/sidenav';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatSidenav, MatSidenavContainer, MatDrawerContainer, MatDrawer],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  showFiller = false;
}
