import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { IPost } from './home';
import { AppWebService } from 'app/common/webservices/app-web.services';
import { HomePageService } from 'app/home/home-page.service';

@Component({
    selector: 'home-page',
    moduleId: module.id,
    templateUrl: 'home-page.component.html',
    styleUrls: ['home-page.component.css']
})
export class HomePageComponent implements OnInit {
    // title = 'ravi';
    errorMessage: string;
    posts: IPost[];

    constructor(private _appWebService: AppWebService,
        private _router: Router,
    public homePageService: HomePageService) {

    }

    ngOnInit(): void {
        // this.title = this.title + 'p';
        this._appWebService.getDynamicComps().subscribe(
            fields => this.posts = fields,
            error => this.errorMessage = <any>error
        );
        this.homePageService.showSearchFilter = true;
    }
    /* navToPostData(): void {
         this._router.navigate(['/post']);
     }*/
}