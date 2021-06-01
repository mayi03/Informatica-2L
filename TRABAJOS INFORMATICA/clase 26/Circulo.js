let canvas = document.querySelector("#miCanvas")

let ctx = canvas.getContext("2d")


function dibujarCirculo (xC,yC,r,color){
    ctx.beginPath();
    ctx.strokeStyle = color
    ctx.fillStyle = color;
    // console.log(ctx.strokeStyle)
    ctx.arc(xC, yC, r, 0, 2*Math.PI);
    ctx.stroke();
    ctx.fill();

}

let x = 250 
let y = 0;
let r = 20
let color = "red";
let vY = 10; // velocidad en px/s
let dT = 30; // en milisegundo
function moverCirculo(){
    ctx.clearRect(0,0,500,700)
    let dY = (dT/1000) * vY; // desplazamiento
    y = y + dY; // se cambia el valor de la x
    dibujarCirculo(x,y,r,color)
}

function arrancarOParar(){
    if (vY > 0){
        vY = 0;
    }
    else{
        vY = 10;
    }
}

window.setInterval(moverCirculo, dT);

// Quiero que arranque o pare cuando presiones la tecla espacio.
// Para hacer esto se debe usar un event listener.

window.onkeyup = function(event){
    //La función que se ejecuta cuando el evento ocurre puede resivir un argumentoy este tienen los detalles del argumento.
    console.log(event.code)
    if(event.code == "Space"){
        arrancarOParar();
    }
    if (event.code == "NumpadAdd") {
        r = r + 1
    }
    if (event.code == "NumpadSubtract") {
        r = r - 1
    }
    
}
function cambiarColorPelota(){
    color = "#" + Math.floor(Math.random()*16777215).toString(16);
}
window.onclick = function(event){
    //console.log(`Se hizo click en las coordenadas ${event.offsetX}, ${event.offsetY}`);
    //console.log(`Las coordenadas de la pelota son ${y}, y el radio es ${r}`)
    // Si se hizo click sobre la pelota
    // Cambiar su color a uno aleatorio.
    let Xm = event.offsetX
    let Ym = event.offsetY
    distancia =   Math.sqrt (Math.pow (Xm - x,2) + Math.pow (Ym - y,2))
    if (distancia <= r) {
        cambiarColorPelota();
    }
    else {vY = -vY}
    
}