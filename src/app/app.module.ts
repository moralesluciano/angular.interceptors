import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MockHttpCalIInterceptor } from './interceptors/http.interceptor'


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: MockHttpCalIInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
