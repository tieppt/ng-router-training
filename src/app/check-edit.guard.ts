import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CheckEditGuard implements CanDeactivate<ProductEditComponent> {
  canDeactivate(
    component: ProductEditComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return component.isEditMode$.pipe(
        tap(x => console.log(x)),
        map(isedit => !isedit));
  }
}
