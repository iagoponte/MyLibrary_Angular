import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';

export const AuthGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  const expectedRole = route.data['roles'] as string[];
  const userRole = authService.getRole();
  const accessTry = state.url;

  console.log('usuário tentando acessar:', accessTry)
  console.log("meu user:", userRole,"\nuser que espero:", expectedRole);

  if (!authService.isLogged()) {
    router.navigate(['/signin']);
    return false;
  }
  
  if (!expectedRole.includes(userRole!)) {
    router.navigate(['/unauthorized']);
    return false;
  }
  
  return true;
};
