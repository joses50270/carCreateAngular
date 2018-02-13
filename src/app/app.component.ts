import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { variable } from '@angular/compiler/src/output/output_ast';
import * as Vehicle from './carClass';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  doors: any;
  mpg: any;
  colors: any;
  model: any;
  carObject: any;
  carArrays = [];


  makeCar() {
    this.carObject = {
      incomingDoors: this.doors,
      incomingMpg: this.mpg,
      incomingModel: this.model,
      incomingColors: this.colors
    };
    const myNewVehicle = new Vehicle.Car(this.carObject);
    this.carArrays.push(myNewVehicle);
  }

}
