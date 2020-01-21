// //type of function defination

// function Car(make, model, year) {
//     this.make = make;
//     this.model = model;
//     this.year = year;
//     this.run = function() {
//         return "speed up to 200"
//     }
// }




//type of class defination

class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    run() {
        return "speed up to 200"
    }
}


let car1 = new Car("Ford", "Mustang", 1997);
let car2 = new Car("sipa", "pride", 1396);
console.log(car1);
console.log(car2);