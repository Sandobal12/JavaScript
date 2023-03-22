// // Definimos la lista de tareas como un Array de Objetos.
// let tareas = [];

// // Función para renderizar la lista de tareas.
// function renderizarTareas() {
//   const listaTareas = document.getElementById('lista-tareas');
//   listaTareas.innerHTML = '';
//   tareas.forEach(tarea => {
//     const li = document.createElement('li');
//     li.textContent = tarea.nombre;
//     if (tarea.completada) {
//       li.classList.add('completada');
//     }
//     li.addEventListener('click', () => {
//       tarea.completada = !tarea.completada;
//       li.classList.toggle('completada');
//     });
//     listaTareas.appendChild(li);
//   });
// }

// // Función para agregar una tarea a la lista.
// function agregarTarea(nombre) {
//   const nuevaTarea = {
//     id: Date.now(),
//     nombre: nombre,
//     completada: false
//   };
//   tareas.push(nuevaTarea);
//   renderizarTareas();
// }

// // Manejador de eventos para el formulario de agregar tarea.
// const formularioTarea = document.getElementById('formulario-tarea');
// formularioTarea.addEventListener('submit', event => {
//   event.preventDefault();
//   const tareaInput = document.getElementById('tarea');
//   const nuevaTareaNombre = tareaInput.value.trim();
//   if (nuevaTareaNombre !== '') {
//     agregarTarea(nuevaTareaNombre);
//     tareaInput.value = '';
//     tareaInput.focus();
//   }
// });

// // Cargamos los datos desde un JSON local utilizando fetch.
// fetch('./js/data.json')
//   .then(response => response.json())
//   .then(data => {
//     tareas = data;
//     renderizarTareas();
//   })
//   .catch(() => {
//     console.log('No se pudo cargar el archivo de datos.');
//   });


// Definimos la lista de tareas como un Array de Objetos.
let tareas = [];

// Función para renderizar la lista de tareas.
function renderizarTareas() {
    const listaTareas = document.getElementById('lista-tareas');
    listaTareas.innerHTML = '';

    tareas.forEach(tarea => {

        const li = document.createElement('li');
        li.textContent = tarea.nombre;
        if (tarea.completada) {
            li.classList.add('completada');
        }
        li.addEventListener('click', () => {
            tarea.completada = !tarea.completada;
            li.classList.toggle('completada');
            guardarTareas();
        });

		const btnEliminar = document.createElement('button');
		btnEliminar.textContent = 'Eliminar';
		btnEliminar.addEventListener('click', () => {
			  eliminarTarea(tarea.id);
		});

		li.appendChild(btnEliminar);
		listaTareas.appendChild(li);
    });
}

function eliminarTarea(id) {
	tareas = tareas.filter(tarea => tarea.id !== id);
	renderizarTareas();
	guardarTareas();
  }
  

// Función para agregar una tarea a la lista.
function agregarTarea(nombre) {
    const nuevaTarea = {
		id: Date.now(),
		nombre: nombre,
		completada: false,
		btnEliminar: `
		  <button onclick="eliminarTarea(${Date.now()})">
			Eliminar
		  </button>
		`
	  };

		// Crear un nuevo elemento li
	const tarea = document.createElement('li');

		// Agregar una clase al elemento li
	tarea.classList.add('tarea');

		// Crear un nuevo elemento span para el texto de la tarea
	const textoTarea = document.createElement('span');
	textoTarea.classList.add('texto-tarea');
	textoTarea.textContent = nuevaTarea;

		// Crear un nuevo botón de eliminar
	const btnEliminar = document.createElement('button');
	btnEliminar.classList.add('eliminar-tarea');
	btnEliminar.textContent = 'X';

		// Agregar el botón de eliminar al elemento li
	tarea.appendChild(btnEliminar);

		// Agregar el texto de la tarea al elemento li
	tarea.appendChild(textoTarea);

		// Agregar el elemento li a la lista de tareas
	listaTareas.appendChild(tarea);

	  tareas.push(nuevaTarea);
	  renderizarTareas();
	  guardarTareas();
	}	  

// Función para guardar las tareas en el almacenamiento local.
function guardarTareas() {
    localStorage.setItem('tareas', JSON.stringify(tareas));
}

// Función para cargar las tareas desde el almacenamiento local.
function cargarTareas() {
    const tareasGuardadas = localStorage.getItem('tareas');
    if (tareasGuardadas) {
        tareas = JSON.parse(tareasGuardadas);
        renderizarTareas();
    } else {
        // Si no hay datos en el almacenamiento local, cargamos los datos desde un JSON local utilizando fetch.
        fetch('./data.json')
            .then(response => response.json())
            .then(data => {
                tareas = data;
                renderizarTareas();
            });
    }
}

// Manejador de eventos para el formulario de agregar tarea.
const formularioTarea = document.getElementById('formulario-tarea');
formularioTarea.addEventListener('submit', event => {
    event.preventDefault();
    const tareaInput = document.getElementById('tarea');
    const nuevaTareaNombre = tareaInput.value.trim();
    if (nuevaTareaNombre !== '') {
        agregarTarea(nuevaTareaNombre);
        tareaInput.value = '';
        tareaInput.focus();
    }
});

// Cargamos las tareas al cargar la página.
cargarTareas();


