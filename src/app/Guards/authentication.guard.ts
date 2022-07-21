import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AssetDataService } from '../Services/asset-data.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {

  constructor(private assetDataService:AssetDataService,private router:Router ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkuserAuthentication();
  }
  

checkuserAuthentication(){
  //logic to check the user is authenticated

 let userAuthenticated =  localStorage.getItem('IsUserAuthenticated')
//  if(userAuthenticated == 'true'){
//   return true
//  }
//  else{
//  this.router.navigateByUrl("logincomonent")
//    return false
//  }
return true


 
}




}
