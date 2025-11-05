/*class Appliance {
    turnOn() {
        throw new Error("Method 'turnOn()' must be implemented in subclass");
    }
}


class WashingMachine extends Appliance {
    turnOn() {
        console.log("Washing Machine is now washing clothes...");
    }
}


class Fridge extends Appliance {
    turnOn() {
        console.log("Fridge is now cooling food...");
    }
}


const washer = new WashingMachine();
const fridge = new Fridge();

washer.turnOn(); 
fridge.turnOn(); */

class Shape {
  area() {
    throw new Error("Method 'area()' must be implemented");
  }
}

class circle extends Shape{
    constructor(radius){
        super();
        this.radius=radius
    }
    area(){
        return Math.PI * this.radius *this.radius;
    }
}
const a = new circle(5);
console.log(a.area());
 