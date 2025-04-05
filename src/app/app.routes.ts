import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { AuthGuard } from './guards/auth.guard';
import { SignupComponent } from './components/signup/signup.component';
import { StockComponent } from './pages/stock/stock.component';
import { UnauthorizedComponent } from './pages/unauthorized/unauthorized.component';

export const routes: Routes = [
//   { path: 'signin', component: LoginComponent },
//   { path: 'signup', component: SignupComponent },
//   { path: '', component: HomeComponent }, //componente navbar e componente sidebar(com as rotas dos detalhes, um link pra uma tabela) com opções CRUD dos livros E o componente da home (dentro das pages - importando navbar e sidebar) -- pode ser tipo um modal acessado ao clicar num card de livro. Sidebar vai estar constando rotas de getById, home irá ter o getAll
//   // { path: 'perfil', component: , canActivate: [authGuard]}
//   { path: 'admin/stock', component: StockComponent }
{
    path: '',
    component: HomeComponent,
    children: [
    //   { path: '', redirectTo: 'card', pathMatch: 'full' }, // optional
      { 
        path: 'livros',
        loadComponent: () => import('./components/card/card.component').then(m => m.CardComponent),
        canActivate: [AuthGuard],
        data: { roles: ['usuario', 'admin'] }
      },
      { 
        path: 'admin/stock',
        loadComponent: () => import('./pages/stock/stock.component').then(m => m.StockComponent),
        canActivate: [AuthGuard],
        data: { roles: ['admin'] }
      },
      { path: 'unauthorized', loadComponent: () => import('./pages/unauthorized/unauthorized.component').then(m => UnauthorizedComponent) }

      // other child routes go here
    ]
  },
  { path: 'signin', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
];
