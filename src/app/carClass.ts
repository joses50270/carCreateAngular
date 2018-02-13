export interface NewCar {
    incomingModel: any;
    incomingDoors: any;
    incomingMpg: any;
    incomingColors: any;
}

export class Car {
    colors: any;
    model: any;
    doors: any;
    mpg: any;

    constructor(labelledObj: NewCar) {
        this.colors = labelledObj.incomingColors;
        this.model = labelledObj.incomingModel;
        this.doors = labelledObj.incomingDoors;
        this.mpg = labelledObj.incomingMpg;
    }
}