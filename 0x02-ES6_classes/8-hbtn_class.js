class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  // Method to cast the class into a Number
  valueOf() {
    return this._size;
  }

  // Method to cast the class into a String
  toString() {
    return this._location;
  }
}

export default HolbertonClass;
