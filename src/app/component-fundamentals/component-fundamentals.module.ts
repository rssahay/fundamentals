import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentFundamentalsRoutingModule } from './component-fundamentals-routing.module';
import { TemplatesComponent } from './templates/templates.component';
import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { ParentTrainingComponent } from './parent-training/parent-training.component';
import { ChildTrainingComponent } from './child-training/child-training.component';
import { BrowserModule } from '@angular/platform-browser';
import { HiglightDirective } from '../Directives/higlight.directive';
import { MyhighlighterDirective } from '../Directives/myhighlighter.directive';
import { FormsComponent } from './forms/forms.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormsExampleComponent } from './reactive-forms-example/reactive-forms-example.component';
import { ListofMoviesComponent } from './listof-movies/listof-movies.component';
import { ListofHerosComponent } from './listof-heros/listof-heros.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { RxjsFundamentalsComponent } from './rxjs-fundamentals/rxjs-fundamentals.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { LifecyclechildComponent } from './lifecycle/lifecyclechild/lifecyclechild.component';


@NgModule({
  declarations: [
    TemplatesComponent,
    StructuralDirectivesComponent,
    ParentComponent,
    ChildComponent,
    ParentTrainingComponent,
    ChildTrainingComponent,
    HiglightDirective,
    MyhighlighterDirective,
    FormsComponent,
    ReactiveFormsExampleComponent,
    ListofMoviesComponent,
    ListofHerosComponent,
    PagenotfoundComponent,
    RxjsFundamentalsComponent,
    LifecycleComponent,
    LifecyclechildComponent

  ],
  imports: [
    BrowserModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ComponentFundamentalsRoutingModule,
  ],
  exports:[TemplatesComponent,
    StructuralDirectivesComponent,
    ParentComponent,
    ChildComponent,
    ParentTrainingComponent,
    FormsComponent
    ,
    ReactiveFormsExampleComponent,
    ChildTrainingComponent],

    providers: [],

  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ComponentFundamentalsModule { }
