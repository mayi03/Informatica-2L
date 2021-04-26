let canvas = document.querySelector("#miCanvas")

let ctx = canvas.getContext("2d")
ctx.strokeStyle = "rgb(0,0,0)"
ctx.fillStyle = "rgb(0,0,0)"

//Dibujo peón negro
function dibujarPeon (xC,yC,r){
    ctx.beginPath()
    ctx.moveTo(xC,yC)
    ctx.lineTo(xC+40,yC)
    ctx.arc(xC+20,yC,r,1.0*Math.PI,0)
    ctx.moveTo(xC+20,yC-20)
    ctx.arc(xC+20,yC-25,r-10,1.5*Math.PI,0.5*Math.PI)
    ctx.arc(xC+20,yC-25,r-10,0.5*Math.PI,1.5*Math.PI)
    ctx.arc(xC+20,yC-40,r-14,0,1.0*Math.PI)
    ctx.arc(xC+20,yC-40,r-14,1.0*Math.PI,0)
    ctx.stroke()
    ctx.fill()
}
for(let x = 0;x < 430; x = x+55){
    dibujarPeon(x,60,20)
}

for(let x = 0;x < 430; x = x+55){
    dibujarPeon(x,300,20)
}