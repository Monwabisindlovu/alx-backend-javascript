import Building from './5-building';

class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft); // Assign sqft to the parent class Building
    this._floors = floors; // Store floors in an underscore attribute version
  }

  // Getter for the 'floors' attribute
  get floors() {
    return this._floors;
  }

  // Override the method named evacuationWarningMessage
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}

export default SkyHighBuilding;
