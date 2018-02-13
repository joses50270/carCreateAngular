import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  doors: any = '4';
  mpg: any = '15';
  carType: any = 'honda';
  color: any = 'red';
  carArray = [];
  newCar = [] ;
  addCar() {
    this.newCar.push(this.doors, this.mpg, this.carType, this.color);
    this.carArray.push(this.newCar);
    console.log(this.carArray);
  }
}
