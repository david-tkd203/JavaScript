"use strinct";

export class Trabajador {
  constructor (CI, name, surname, position, salary) {
    this._data = {
      CI,
      name,
      surname,
      position,
      salary
    }
  }

  get data() {
    return this._data;
  }
}