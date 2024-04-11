import Car from './10-car';

class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color); // Call the parent class constructor
    this._range = range; // Initialize range
  }

  // Override the cloneCar method
  cloneCar() {
    // Return a new Car instance with undefined properties
    return new this.constructor(undefined, undefined, undefined);
  }
}

export default EVCar;
