let boton1 = document.querySelector("#colorAleatorio")
let parrafo1 = document.querySelector("#parrafoColor")
let boton2 = document.querySelector ("#OcultarMostrar")
let parrafo2 = document.querySelector ("#parrafoMostrar")
let boton3 = document.querySelector ("#OcultarSegundos")
let parrafo3 = document.querySelector ("#parrafoSegundos")

boton1.onclick = cambiarColor
boton2.onclick = aparecerdesaparecer
boton3.onclick = Segundos

//Math.floor sacado de https://www.w3schools.com/js/js_random.asp
function cambiarColor(){
    let a = Math.floor(Math.random()*226)
    let b = Math.floor(Math.random()*226)
    let c = Math.floor(Math.random()*226)
    parrafo1.style.color = `rgb(${a},${b},${c})`;
}


function aparecerdesaparecer()
    {
    if (parrafo2.style.display == "block"){
        parrafo2.style.display = "none"
    }
    else 
    {
        parrafo2.style.display = "block"
    }
}

function Segundos (){
    parrafo3.style.display = "none"
    setTimeout (ReAparecer , 3000);
}
function ReAparecer (){
    parrafo3.style.display = "block"
}

parrafo2.style.display = "block";
parrafo1.style.color = "black"


