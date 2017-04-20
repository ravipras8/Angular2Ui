import { Component, OnInit } from '@angular/core';
import { IFields,IField } from './home';
import { AppWebService } from 'app/common/webservices/app-web.services';

@Component({
    selector:'home-page',
    moduleId: module.id,
    templateUrl:'home-page.component.html',
    styleUrls: ['home-page.component.css']
})
export class HomePageComponent implements OnInit{
   title= 'ravi';
   errorMessage: string;
   fields: IField[];

   constructor(private _appWebService: AppWebService){

   }
   
   ngOnInit(): void{
       this.title = this.title + 'p';
       this._appWebService.getDynamicComps().subscribe(
           fields => this.fields = fields.fields,
           error => this.errorMessage = <any> error
       ); 
   }
}