import { Pipe, PipeTransform } from '@angular/core';

import { IPost } from 'app/home/home';

@Pipe({
    name: 'postsFilter'
})
export class PostsFilterPipe implements PipeTransform{

    transform(value: IPost[], filterBy: string): IPost[]{
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
        return filterBy ? value.filter((post: IPost) =>
            post.title.toLocaleLowerCase().indexOf(filterBy) !== -1) : value;
    }
}