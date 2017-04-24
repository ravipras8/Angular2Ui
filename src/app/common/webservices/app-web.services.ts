import { Injectable } from '@angular/core'
import { Http,Response } from '@angular/http'
import { Observable } from 'rxjs/Observable'
import { IPost } from 'app/home/home';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/catch'

@Injectable()
export class AppWebService {
    private serviceUrl: string ='api/posts';
    private jsFile: string = 'posts-json.json';

    constructor(private _http: Http){

    }
    getDynamicComps(): Observable<IPost[]> {
        return this._http.get(`${this.serviceUrl}/${this.jsFile}`)
        .map((res: Response) => <IPost[]> res.json())
        .do(data => console.log(JSON.stringify(data)))
        .catch(this.handleErr);
    }
    getPost(id: number): Observable<IPost> {
        // id= id % 
        return this._http.get(`${this.serviceUrl}/${id}`)
        .map((res: Response) => <IPost> res.json())
        .do(data => console.log(JSON.stringify(data)))
        .catch(this.handleErr);
    }
    private handleErr(err: Response){
        console.error(err);
        return Observable.throw(err.json().error || 'Server error');
    }
}