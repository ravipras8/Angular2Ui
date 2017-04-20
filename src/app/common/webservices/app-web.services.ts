import { Injectable } from '@angular/core'
import { Http,Response } from '@angular/http'
import { Observable } from 'rxjs/Observable'
import { IFields } from 'app/home/home';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/catch'

@Injectable()
export class AppWebService {
    private serviceUrl: string ='http://localhost:8211/ravi/dynamic';

    constructor(private _http: Http){

    }
    getDynamicComps(): Observable<IFields> {
        return this._http.get(this.serviceUrl)
        .map((res: Response) => <IFields> res.json())
        .do(data => console.log(JSON.stringify(data)))
        .catch(this.handleErr);
    }
    private handleErr(err: Response){
        console.error(err);
        return Observable.throw(err.json().error || 'Server error');
    }
}