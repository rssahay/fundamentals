import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { ComponentFundamentalsModule } from './component-fundamentals/component-fundamentals.module';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { TestInterceptorService } from 'src/app/Interceptors/test-interceptor.service'
import { HttpInterceptorService } from './Interceptors/http-interceptor.service';
import { MessageComponent } from './message/message.component';

@NgModule({
  declarations: [
    AppComponent,
    LifecycleComponent,
    MessageComponent
    
    
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    ComponentFundamentalsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: TestInterceptorService, multi: true }
  
  ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
