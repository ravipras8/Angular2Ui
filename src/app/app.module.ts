import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ComModule } from 'app/common/com.module';
import { PostsModule } from 'app/home/posts.module';
import { HomePageComponent } from 'app/home/home-page.component';
import { MainLayoutComponent } from 'app/common/layout/main-layout.component';
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
    RouterModule.forRoot([
      { path: '', component: MainLayoutComponent, pathMatch: 'full', children: [{ path: '',  component: HomePageComponent }] },
      { path: '**', component: PageNotFoundComponent, pathMatch: 'full' }
    ]),
  ],
  providers: [AppWebService],
  bootstrap: [AppComponent]
})
export class AppModule { }
