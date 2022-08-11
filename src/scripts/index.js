import { addDataToStorage, initializeTemplate, parseDataOfStorage } from "./modules/handleStorage.js"
import { Trabajador } from "./modules/workers.js";

const isTemplateInitialized = localStorage.getItem("planilla") ? true : false
if (!isTemplateInitialized) initializeTemplate()

const el_form_submit = document.querySelector('#submit-worker');
const el_form_worker = document.querySelector('#form-worker')

const el_list_workers = document.querySelector('#list-workers')

el_form_submit.addEventListener('click', (event) => {
  event.preventDefault();
  let worker = new Trabajador(
    document.querySelector('#CI').value,
    document.querySelector('#name').value,
    document.querySelector('#surname').value,
    document.querySelector('#position').value,
    document.querySelector('#salary').value
  )
  addDataToStorage(worker.data)
  Swal.fire(
    'Trabajador agregado con éxito',
    'El trabajador ha sido añadido con éxito',
    'success'
  )

  // Aquí actualiza para que se muestre el trabajador cuando se agrega

  el_form_worker.reset()
}) 


// Esta es la primera renderización de la planilla
const data = parseDataOfStorage()
data.forEach(worker => {
  let li = document.createElement('li')
  li.innerHTML = `Nombre : ${worker.name} ${worker.surname}; Puesto: ${worker.position}`  
  el_list_workers.appendChild(li)
})