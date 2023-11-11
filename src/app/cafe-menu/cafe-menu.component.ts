import { Component } from '@angular/core';

@Component({
  selector: 'app-cafe-menu',
  templateUrl: './cafe-menu.component.html',
  styleUrls: ['./cafe-menu.component.scss']
})
export class CafeMenuComponent {
  ClassicsImage = true;
  ChillersImage = false;
  ChillersImage2 = false;
  DelightsImage = false;
  SweetToothImage = false;
  InfoImage = false;

  ClassicsBtn(){
    this.ClassicsImage = true;
    this.ChillersImage = false;
    this.ChillersImage2 = false;
    this.DelightsImage = false;
    this.SweetToothImage = false;
    this.InfoImage = false;
  };
  ChillersBtn(){
    this.ClassicsImage = false;
    this.ChillersImage = true;
    this.ChillersImage2 = false;
    this.DelightsImage = false;
    this.SweetToothImage = false;
    this.InfoImage = false;
  };
  Chillers2Btn(){
    this.ClassicsImage = false;
    this.ChillersImage = false;
    this.ChillersImage2 = true;
    this.DelightsImage = false;
    this.SweetToothImage = false;
    this.InfoImage = false;
  };
  DelightsBtn(){
    this.ClassicsImage = false;
    this.ChillersImage = false;
    this.ChillersImage2 = false;
    this.DelightsImage = true;
    this.SweetToothImage = false;
    this.InfoImage = false;
  };
  SweetToothBtn(){
    this.ClassicsImage = false;
    this.ChillersImage = false;
    this.ChillersImage2 = false;
    this.DelightsImage = false;
    this.SweetToothImage = true;
    this.InfoImage = false;
  };
  InfoBtn(){
    this.ClassicsImage = false;
    this.ChillersImage = false;
    this.ChillersImage2 = false;
    this.DelightsImage = false;
    this.SweetToothImage = false;
    this.InfoImage = true;
  };
}
