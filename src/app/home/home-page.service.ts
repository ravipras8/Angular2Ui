import { Injectable } from '@angular/core';

import { IPost } from './home';

@Injectable()
export class HomePageService {
    searchFilter: string = '';
    showSearchFilter: boolean = true;
    createEmptyIPost(): IPost {
        let post: IPost = { 
            descp: '', 
            id: undefined, 
            subtitle: '', 
            title: '' 
        };
        return post;
    }
}