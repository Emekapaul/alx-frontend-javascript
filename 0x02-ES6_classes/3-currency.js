export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  // Getter for _code
  get code() {
    return this._code;
  }

  // Setter for _code
  set code(code) {
    this._code = code;
  }

  // Getter for _name
  get name() {
    return this._name;
  }

  // Setter for _name
  set name(name) {
    this._name = name;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
