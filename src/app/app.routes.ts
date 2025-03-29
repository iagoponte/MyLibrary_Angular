import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'home', component: HomeComponent }, //componente navbar e componente sidebar(com as rotas dos detalhes, um link pra uma tabela) com opções CRUD dos livros E o componente da home (dentro das pages - importando navbar e sidebar) -- pode ser tipo um modal acessado ao clicar num card de livro. Sidebar vai estar constando rotas de getById, home irá ter o getAll
];
