import { Component, inject, Input } from '@angular/core';
import { MatListModule, MatNavList } from '@angular/material/list';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';
// import { MatButtonModule } from '@angular/material/button';
// import { MatIconModule } from '@angular/material/icon';
// import {MatSidenavModule} from '@angular/material/sidenav';
// import {MatListModule} from '@angular/material/list';
// import {MatToolbarModule} from '@angular/material/toolbar';
// import { RouterModule } from '@angular/router';
// import { MatTooltipModule } from '@angular/material/tooltip';
// import { AuthService } from '../../services/auth.service';
// import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [ MatListModule, RouterLink, MatTooltipModule, MatIconModule, MatIconButton
    // MatToolbarModule, MatButtonModule, MatIconModule, MatSidenavModule, MatListModule, RouterModule,
    // MatTooltipModule, CardComponent
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  @Input() drawer: any; // Recebe referência do drawer (mat-drawer)
  readonly authService = inject(AuthService);
  readonly router = inject(Router);

  closeDrawer() {
    if (this.drawer) {
      this.drawer.close(); // Fecha ao clicar em um item
    }
  }

  logout(){
    this.authService.logout();
    this.router.navigate(['/signin'])
  }
}
