import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MainLayoutComponent } from 'app/common/layout/main-layout.component';
import { PageNotFoundComponent } from 'app/common/error/page-not-found.component';
import { HomePageComponent } from 'app/home/home-page.component';

const ROUTES = [
    { path: '', component: MainLayoutComponent, pathMatch: 'full', children: [{ path: '', component: HomePageComponent }] },
    { path: '**', component: PageNotFoundComponent, pathMatch: 'full' }
];
@NgModule({
    imports: [RouterModule.forRoot(ROUTES)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}