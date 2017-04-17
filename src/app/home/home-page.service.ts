import { Injectable } from '@angular/core'
import { Http,Response } from '@angular/http'
import { Observable } from 'rxjs/Observable'
import { IFields } from './home';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/catch'

@Injectable()
export class HomePageService {
    private serviceUrl: string ='http://localhost:8211/ravi/dynamic';

    constructor(private _http: Http){

    }
    getDynamicComps(): Observable<IFields> {
        return this._http.get(this.serviceUrl)
        .map((res: Response) => <IFields> res.json())
        .do(data => console.log(JSON.stringify(data)))
        .catch(this.handleErr);
        /*let fields: IFields = {
            "fields": [
                {
                    "type": "textbox",
                    "label": "Name",
                    "id": "id1"
                },
                {
                    "type": "dropdown",
                    "label": "state",
                    "id": "id2"
                },
                {
                    "type": "radio",
                    "label": "city",
                    "id": "id2"
                },
                {
                    "type": "checkbox",
                    "label": "agree",
                    "id": "id3"
                }
            ]
        };*/
    }
    private handleErr(err: Response){
        console.error(err);
        return Observable.throw(err.json().error || 'Server error');
    }
}