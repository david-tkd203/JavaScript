"use strict";

const TEMPLATE_KEY = 'planilla';

// initializeTemplate() : void
export function initializeTemplate() {
  localStorage.setItem(TEMPLATE_KEY, JSON.stringify([]))
}

// getItemsOfStorage() : string
export function getItemsOfStorage() {
  return localStorage.getItem(TEMPLATE_KEY)
}

// parseDataOfStorage() : Array<>
export function parseDataOfStorage() {
  return JSON.parse(getItemsOfStorage());
}

// addDataToStorage( data: object ) : void
export function addDataToStorage(data) {
  const actual_template = parseDataOfStorage();
  localStorage.setItem(
    TEMPLATE_KEY,
    JSON.stringify([...actual_template, data])
  )
}

// updateTemplate(newTemplate: []object) : void 
export function updateTemplate(newTemplate) {
  localStorage.setItem(
    TEMPLATE_KEY,
    newTemplate
  )
}