import { Component, OnInit } from '@angular/core';
import { IFields,IField } from './home';
import { HomePageService }  from './home-page.service';

@Component({
    selector:'home-page',
    moduleId: module.id,
    templateUrl:'home-page.component.html',
    styleUrls: ['home-page.component.css'],
    providers:[HomePageService]
})
export class HomePageComponent implements OnInit{
   title= 'ravi';
   errorMessage: string;
   fields: IField[];

   constructor(private _homePageService: HomePageService){

   }
   
   ngOnInit(): void{
       this.title = this.title + 'p';
       this._homePageService.getDynamicComps().subscribe(
           fields => this.fields = fields.fields,
           error => this.errorMessage = <any> error
       ); 
   }
}