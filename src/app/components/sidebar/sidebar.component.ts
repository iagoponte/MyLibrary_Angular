import { Component, Input } from '@angular/core';
import { MatNavList } from '@angular/material/list';
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
  imports: [ MatNavList
    // MatToolbarModule, MatButtonModule, MatIconModule, MatSidenavModule, MatListModule, RouterModule,
    // MatTooltipModule, CardComponent
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  @Input() drawer: any; // Recebe referência do drawer (mat-drawer)

  closeDrawer() {
    if (this.drawer) {
      this.drawer.close(); // Fecha ao clicar em um item
    }
  }
}
