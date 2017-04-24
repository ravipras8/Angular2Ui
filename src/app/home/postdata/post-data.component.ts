import {Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AppWebService } from 'app/common/webservices/app-web.services';
import { IPost } from 'app/home/home';

@Component({
    templateUrl:'./post-data.component.html',
    styleUrls:['./post-data.component.css']
})
export class PostDataComponent implements OnInit{
    
    constructor(private _route: ActivatedRoute,
                private _router: Router,
                private appWebService: AppWebService) {
    }
    post: IPost;
    errorMessage:string;
    ngOnInit(): void{
        let id =+this._route.snapshot.params['id'];
        this.appWebService.getPost(id).subscribe(
            field => this.post = field,
            error => this.errorMessage = <any>error
        );
        // console.log('this ismy id:'+id);
    }
    goBack(): void{
        this._router.navigate(["/"]);
    }
}