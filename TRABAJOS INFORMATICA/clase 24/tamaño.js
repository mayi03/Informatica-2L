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
for(let x = 0;x < 430; x = x+60){
    dibujarPeon(x,100,20,20,"blue")
}

for(let x = 0;x < 430; x = x+150){
    dibujarPeon(x,300,60,60,"red")
}
for(let x = 0;x < 430; x = x+25){
    dibujarPeon(x,400,10,10,"pink")
} 





