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

let x1 = 0
let vX1 = 40; // velocidad en px/s
let dT = 30; // en milisegundo
function moverPeón(){
    ctx.clearRect(0,0,500,700)
    let dX1 = (dT/1000)*vX1; // desplazamiento
    x1 = x1 + dX1; // se cambia el valor de la x
    dibujarPeon(x1,250,40,40,"pink")
}


// se debe ejecutar la función cada dT milisegundo

window.setInterval(moverPeón, dT)





