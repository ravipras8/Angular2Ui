import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ComModule } from 'app/common/com.module';
import { MainLayoutComponent } from 'app/common/layout/main-layout.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ComModule,
    MaterialModule.forRoot(),
    BrowserAnimationsModule,
    RouterModule.forRoot([
      { path: '', component: MainLayoutComponent, pathMatch: 'full' },
      { path: '**', component: MainLayoutComponent, pathMatch: 'full' }
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
