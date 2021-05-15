let canvas = document.querySelector("#miCanvas")

let ctx = canvas.getContext("2d")
ctx.strokeStyle = "rgb(0,0,0)"
ctx.fillStyle = "rgb(0,0,0)"

//Dibujo peón negro
function dibujarPeon (xC,yC,r,t,color){
    ctx.fillStyle = color
    ctx.beginPath()
    ctx.moveTo(xC,yC)
    ctx.arc(xC+t,yC,r,Math.PI,0)
    ctx.moveTo(xC+t,yC-t)
    ctx.arc(xC+t,yC-(t+5),r/2,-Math.PI,Math.PI)
    ctx.moveTo(xC+t,yC-t*2)
    ctx.arc(xC+t,yC-(t+5)-r/1.5,r/4,Math.PI,-Math.PI)
    ctx.stroke()
    ctx.fill()

}

let y = 0;
let vY = 200; // velocidad en px/s
let dT = 30; // en milisegundo
function moverPeón(){
    ctx.clearRect(0,0,500,700)
    let dY = (dT/1000) * vY; // desplazamiento
    y = y + dY; // se cambia el valor de la x
    dibujarPeon(250,y,40,40,"purple")
}


// se debe ejecutar la función cada dT milisegundo

window.setInterval(moverPeón, dT);