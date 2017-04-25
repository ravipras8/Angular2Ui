import { Component } from '@angular/core';
import { HomePageService } from 'app/home/home-page.service';

@Component({
  selector: 'main-layout',
  templateUrl: './main-layout.component.html'
})
export class MainLayoutComponent {
  constructor(public homePageService: HomePageService){

  }
  title = 'Angular2 Helloworld';
  onSrcHoverFlag:boolean = false;
  menuDropdown = ['option1', 'option2'];

  changeHover($event: any): void {
    this.onSrcHoverFlag = $event.type === 'mouseover' ? true : false;
  }
}
