import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    
  ],
  imports: [
    BrowserModule,
    CommonModule,
    ReactiveFormsModule 
  ],
  exports:[],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class FormsModule { }
