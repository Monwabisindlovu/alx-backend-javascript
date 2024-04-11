const cloneCarSymbol = Symbol('cloneCar');

class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  cloneCarSymbol {
    return new this.constructor(this._brand, this._motor, this._color);
  }

  cloneCar() {
    return thiscloneCarSymbol;
  }
}

export default Car;
