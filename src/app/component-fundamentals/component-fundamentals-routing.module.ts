import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from '../Guards/authentication.guard';
import { SavedGuard } from '../Guards/saved.guard';


import { WelcomeComponent } from '../user-profile/welcome/welcome.component';
import { ChildComponent } from './child/child.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { ListofHerosComponent } from './listof-heros/listof-heros.component';
import { ListofMoviesComponent } from './listof-movies/listof-movies.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ReactiveFormsExampleComponent } from './reactive-forms-example/reactive-forms-example.component';
import { RxjsFundamentalsComponent } from './rxjs-fundamentals/rxjs-fundamentals.component';

const routes: Routes = [

  { path: '', component: ChildComponent },
  { path: 'childview',  redirectTo:'listofHeros'},

  { path: 'reactive', component: ReactiveFormsExampleComponent,canActivate:[AuthenticationGuard] },

  { path: 'listofHeros', component: ListofHerosComponent ,
  canActivate:[AuthenticationGuard],
//  canDeactivate:[SavedGuard] 
},

  { path: 'listofMovies', component: ListofMoviesComponent,canActivate:[AuthenticationGuard]  },
  { path: 'rxjs', component: RxjsFundamentalsComponent },

  {path:'lifecycle',component:LifecycleComponent},
  { path: '**', component: PagenotfoundComponent }



  //wildcardroute

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentFundamentalsRoutingModule { }
