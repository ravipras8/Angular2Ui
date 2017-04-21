import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ComModule } from 'app/common/com.module';
import { PostsModule } from 'app/home/posts.module';
import { PageNotFoundComponent } from 'app/common/error/page-not-found.component';


import { AppWebService } from 'app/common/webservices/app-web.services';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ComModule,
    PostsModule,
    MaterialModule.forRoot(),
    BrowserAnimationsModule,
    NgbModule.forRoot(),
    AppRoutingModule
  ],
  providers: [AppWebService],
  bootstrap: [AppComponent]
})
export class AppModule { }
