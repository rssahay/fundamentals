import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { MessageComponent } from '../message/message.component';

@Injectable({
  providedIn: 'root'
})
export class SavedGuard implements CanDeactivate<MessageComponent> {
  canDeactivate(
    component: MessageComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
          return component.canExit();
  }
  
}
