import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export default class ProductDetailGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const Id = Number(route.paramMap.get('id'));
    if (isNaN(Id) || Id < 0) {
      alert('bad');
      this.router.navigate(['/products']);
      return false;
    }
    return true;
  }
}
