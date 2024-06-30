export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    } else {
      this._name = name;
    }

    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    } else {
      this._length = length;
    }

    if (Array.isArray(students)) {
      this._students = students;
    } else {
      throw new TypeError('Length must be an array of strings');
    }
  }

  // Getter for name
  get name() {
    return this._name;
  }

  // setter for _name
  set name(name) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = name;
  }

  // Getter for _length
  get length() {
    return this._length;
  }

  // Setter for _length
  set length(length) {
    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = length;
  }

  // Getter for _students
  get students() {
    return this._students;
  }

  // Setter for _students
  set students(students) {
    if (Array.isArray(students)) {
      this._students = students;
    } else {
      throw new TypeError('Students must be an array of strings');
    }
  }
}
