import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MainLayoutComponent } from 'app/common/layout/main-layout.component';
import { HomePageComponent } from 'app/home/home-page.component';
import { AppWebService } from 'app/common/webservices/app-web.services';

@NgModule({
  declarations: [
      MainLayoutComponent,
      HomePageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    BrowserAnimationsModule,
    RouterModule.forChild([
            { path: 'home', component: HomePageComponent }
        ])
  ],
  providers: [AppWebService]
})
export class ComModule { }
