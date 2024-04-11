class Airport {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  // Getters
  get name() {
    return this._name;
  }

  get code() {
    return this._code;
  }

  // Setters
  set name(newName) {
    this._name = newName;
  }

  set code(newCode) {
    this._code = newCode;
  }

  // Default string description of the class
  toString() {
    return `[object ${this._code}]`;
  }
}

export default Airport;
