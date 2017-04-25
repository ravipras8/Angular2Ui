import { Injectable } from '@angular/core';

import { IPost } from './home';

@Injectable()
export class HomePageService {
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