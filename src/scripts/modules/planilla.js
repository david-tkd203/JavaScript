"use strict";

import { addDataToStorage, parseDataOfStorage, updateTemplate } from "./handleStorage.js";

export class Planilla {
  constructor (list_of_workers = []) {
    this.list_of_workers = list_of_workers;
  }

  // addWorker(worker: object) : void
  addWorker(worker) {
    addDataToStorage(worker);
  }

  // removeWorker(CI: number) : void
  removeWorker(CI) {
    const actual_template = parseDataOfStorage();
    const new_template = actual_template.filter(worker => worker.CI !== CI)
    updateTemplate(new_template)
  }
}