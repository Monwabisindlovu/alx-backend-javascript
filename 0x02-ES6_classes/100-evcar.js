import Car from './10-car.js';

class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super();
    if (typeof brand !== 'string') {
      throw new TypeError('Brand must be a string');
    }
    if (typeof motor !== 'string') {
      throw new TypeError('Motor must be a string');
    }
    if (typeof color !== 'string') {
      throw new TypeError('Color must be a string');
    }
    if (typeof range !== 'string') {
      throw new TypeError('Range must be a string');
    }
    this._brand = brand;
    this._motor = motor;
    this._color = color;
    this._range = range;
  }

  cloneCar() {
    return new Car(this._brand, this._motor, this._color);
  }
}
