##Credit: AsarelCastellanos
Link - https://github.com/AsarelCastellanos/makeACarChallenge-Angular5

# CarCreate

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.8.

The challenge was to recreate the challenge of creating a car from user input with JS. However this time it had to be done with Angular.

#How it works

The way that the app works is it all starts with the inputs. The inputs are binded two ways, this way the data edited in the view will be changed in the model as well. Then, once the user clicks the button, which is event binded, the function makeCar will run. This will put all of the users input into an object. That object is then placed in a variable which is later pushed in an array. That array is then called by with ngFor. Once all of that is done the car the user created is then shown in the view.
