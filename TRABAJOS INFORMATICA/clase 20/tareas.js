let tareas = JSON.parse (localStorage.getItem("tareas"));
if (tareas == null) tareas = [ ];
let tabla = document.querySelector ('#tareas')
function llenarTabla(){
    let contenidoTabla='<tr><th>Materia</th><th>Descripción</th><th>Fecha</th><th>Borrar</th></tr>'
    for (tarea of tareas){
        contenidoTabla = contenidoTabla + `<tr><td>${tarea.materia}</td><td>${tarea.descripción}</td><td>${tarea.fecha}</td></tr>`
    }
    tabla.innerHTML = contenidoTabla
}

let form = document.querySelector("#formularioAdd");
function addTarea(){
    let materiaNueva = document.querySelector("input[name=materia]").value
    let descripciónNueva = document.querySelector("input[name=descripción]").value
    let fechaNueva = document.querySelector("input[name=entregaTarea]").value

//crear nueva Tarea

    let tareaNueva = {materia:materiaNueva, descripción:descripciónNueva, fecha:fechaNueva}
    console.log ("Ahora voy a añadir la siguiente tarea");
    console.log(tareaNueva)

    tareas.push(tareaNueva)
    llenarTabla()
    localStorage.setItem("tareas", JSON.stringify(tareas));
}

form.onsubmit = addTarea;
llenarTabla()

let formBorrar = document.querySelector("#formularioDelete");

function deleteTarea(){
    let nombreTareaABorrar = document.querySelector("#formularioDelete input[name=materia]").value

//Borrar tarea
    console.log("Ahora voy a borrar la siguiente tarea")
    console.log(nombreTareaABorrar)

    let aBorrar = tareas.findIndex(tarea => tarea.materia == nombreTareaABorrar);
    if (aBorrar == -1) alert("tarea no encontrada")
    tareas.splice(aBorrar,1)
    llenarTabla()
    localStorage.setItem("tareas", JSON.stringify(tareas));  
}

formBorrar.onsubmit = deleteTarea;
llenarTabla()

