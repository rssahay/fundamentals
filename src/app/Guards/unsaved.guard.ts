import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { MessageComponent } from '../message/message.component';

// @Injectable({
//   providedIn: 'root'
// })
// export class UnsavedGuard implements CanDeactivate {

  
//   canDeactivate(component:MessageComponent,route: ActivatedRouteSnapshot, 
//                     state: RouterStateSnapshot,
//                    nextState: RouterStateSnapshot) : Observable<boolean> | Promise<boolean> | boolean {        
//             return component.canExit();
//      
//       }
//   }
  
