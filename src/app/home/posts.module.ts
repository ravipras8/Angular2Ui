import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { PostDataComponent } from 'app/home/postdata/post-data.component';
import { HomePageComponent } from 'app/home/home-page.component';
import { PostsFilterPipe } from 'app/home/posts-filter.pipe';
import {MainLayoutComponent} from 'app/common/layout/main-layout.component';

@NgModule({
  declarations: [
    PostDataComponent,
    HomePageComponent,
    PostsFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    BrowserAnimationsModule,
    NgbModule,
    RouterModule.forChild([{ path: 'post/:id', component: MainLayoutComponent, pathMatch: 'full', children: [{ path: '',  component: PostDataComponent }] }
    ])
  ],
  providers: []
})
export class PostsModule { }
