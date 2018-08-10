import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { TemplateService } from './app.service';


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    HttpModule,
    AlertModule.forRoot(),
    BrowserModule
  ],
  providers: [TemplateService],

  bootstrap: [AppComponent]
})
export class AppModule { }
