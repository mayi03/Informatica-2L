let canvas = document.querySelector("#miCanvas")

let ctx = canvas.getContext("2d")
ctx.strokeStyle = "rgb(94,21,4)"
ctx.fillStyle = "rgb(134,59,41)"

//Dibujo borrador > Lapiz

ctx.beginPath()
ctx.moveTo(20,50)
ctx.lineTo(20,30)
ctx.arc(30,30,10,1.0*Math.PI,1.5*Math.PI)
ctx.lineTo(50,20)
ctx.arc(50,30,10,1.5*Math.PI,0)
ctx.lineTo(60,50)
ctx.lineTo(20,50)
ctx.stroke()
ctx.fill()

//Dibujo parte metal

ctx.strokeStyle = "rgb(103,98,97)"
ctx.fillStyle = "rgb(129,123,122)"
ctx.beginPath()
ctx.fillRect(20,50,40, 10)
ctx.strokeRect(20,50,40,10)

//Dibujo parte lápiz > Amarilla

ctx.strokeStyle = "rgb(227,139,7)"
ctx.fillStyle = "rgb(225,147,31)"
ctx.beginPath()
ctx.moveTo(20,60)
ctx.lineTo(20,140)
ctx.lineTo(30,150)
ctx.lineTo(40,140)
ctx.lineTo(50,150)
ctx.lineTo(60,140)
ctx.lineTo(60,60)
ctx.stroke()
ctx.fill()

//Dibujo parte lápiz abajo

ctx.strokeStyle = "rgb(231,184,112)"
ctx.fillStyle = "rgb(231,184,112)"
ctx.beginPath()
ctx.moveTo(20,140)
ctx.lineTo(30,160)
ctx.lineTo(30,150)
ctx.moveTo(30,150)
ctx.lineTo(40,140)
ctx.lineTo(50,150)
ctx.moveTo(50,150)
ctx.lineTo(60,140)
ctx.lineTo(50,160)
ctx.lineTo(30,160)
ctx.lineTo(30,150)
ctx.stroke()
ctx.fill()

//Dibujo punta l'apiz

ctx.strokeStyle = "rgb(0,0,0)"
ctx.fillStyle = "rgb(70,67,64)"
ctx.beginPath()
ctx.moveTo(30,160)
ctx.lineTo(40,180)
ctx.lineTo(50,160)
ctx.stroke()
ctx.fill()

//Dibujo borde celular

ctx.strokeStyle = "rgb(0,0,0)"
ctx.fillStyle = "rgb(0,0,0)"
ctx.beginPath()
ctx.moveTo(130,170)
ctx.lineTo(130,30)
ctx.arc(140,30,10,1.0*Math.PI,1.5*Math.PI)
ctx.lineTo(220,20)
ctx.arc(220,30,10,1.5*Math.PI,0)
ctx.lineTo(230,170)
ctx.arc(220,170,10,0,0.5*Math.PI)
ctx.lineTo(140,180)
ctx.arc(140,170,10,0.5*Math.PI,1.0*Math.PI)
ctx.stroke()
ctx.fill()

//Dibujo fondo celular

ctx.strokeStyle = "rgb(48,118,113)"
ctx.fillStyle = "rgb(48,118,113)"
ctx.beginPath()
ctx.moveTo(140,150)
ctx.lineTo(140,40)
ctx.arc(150,40,10,1.0*Math.PI,1.5*Math.PI)
ctx.lineTo(210,30)
ctx.arc(210,40,10,1.5*Math.PI,0)
ctx.lineTo(220,150)
ctx.arc(210,150,10,0,0.5*Math.PI)
ctx.lineTo(150,160)
ctx.arc(150,150,10,0.5*Math.PI,1.0*Math.PI)
ctx.stroke()
ctx.fill()

//Dibujo circulo pantalla y camara

ctx.strokeStyle = "rgb(255,255,255)"
ctx.fillStyle = "rgb(255,255,255)"
ctx.beginPath()
ctx.moveTo(180,170)
ctx.arc(180,170,5,1.0*Math.PI,0)
ctx.arc(180,170,5,0,1.0*Math.PI)
ctx.moveTo(180,25)
ctx.lineTo(190,25)
ctx.moveTo(170,25)
ctx.arc(170,25,1,1.0*Math.PI,0)
ctx.arc(170,25,1,0,1.0*Math.PI)
ctx.stroke()
ctx.fill()

//Dibujo hora #1

ctx.strokeStyle = "rgb(0,0,0)"
ctx.fillStyle = "rgb(108,82,131)"
ctx.beginPath()
ctx.moveTo(150,50)
ctx.lineTo(160,40)
ctx.lineTo(160,60)
ctx.stroke()

//Dubujo hora #0

ctx.strokeStyle = "rgb(0,0,0)"
ctx.fillStyle = "rgb(0,0,0)"
ctx.beginPath()
ctx.moveTo(165,55)
ctx.lineTo(165,45)
ctx.arc(170,45,5,1.0*Math.PI,0)
ctx.lineTo(175,55)
ctx.arc(170,55,5,0,1.0*Math.PI)
ctx.stroke()

//Dibujo hora dos puntos

ctx.strokeStyle = "rgb(0,0,0)"
ctx.fillStyle = "rgb(0,0,0)"
ctx.beginPath()
ctx.moveTo(180,45)
ctx.arc(179,45,1,1.0*Math.PI,0)
ctx.arc(179,45,1,0,1.0*Math.PI)
ctx.moveTo(180,50)
ctx.arc(179,50,1,1.0*Math.PI,0)
ctx.arc(179,50,1,0,1.0*Math.PI)

ctx.stroke()

//Dibujo hora #0

ctx.strokeStyle = "rgb(0,0,0)"
ctx.fillStyle = "rgb(0,0,0)"
ctx.beginPath()
ctx.moveTo(185,55)
ctx.lineTo(185,45)
ctx.arc(190,45,5,1.0*Math.PI,0)
ctx.lineTo(195,55)
ctx.arc(190,55,5,0,1.0*Math.PI)

ctx.stroke()

//Dibujo hora #3

ctx.strokeStyle = "rgb(0,0,0)"
ctx.fillStyle = "rgb(0,0,0)"
ctx.beginPath()
ctx.moveTo(200,40)
ctx.arc(200,45,5,1.5*Math.PI,0.5*Math.PI)
ctx.arc(200,55,5,1.5*Math.PI,0.5*Math.PI)

ctx.stroke()


//Dibujo mensaje 1

ctx.strokeStyle = "rgb(61,143,138)"
ctx.fillStyle = "rgb(61,143,138)"
ctx.beginPath()
ctx.fillRect(140, 90 , 80, 20)
ctx.stroke()
ctx.fill()

//Dibujo mensaje 2

ctx.strokeStyle = "rgb(61,143,138)"
ctx.fillStyle = "rgb(61,143,138)"
ctx.beginPath()
ctx.fillRect(140, 120 , 80, 20)
ctx.stroke()
ctx.fill()


//Dibujo circulos

ctx.strokeStyle = "rgb(255,255,255)"
ctx.fillStyle = "rgb(255,255,255)"
ctx.beginPath()
ctx.arc(150,90,5,1.0*Math.PI,0)
ctx.arc(150,90,5,0,1.0*Math.PI)
ctx.stroke()
ctx.fill()

ctx.strokeStyle = "rgb(255,255,255)"
ctx.fillStyle = "rgb(255,255,255)"
ctx.beginPath()
ctx.arc(150,120,5,1.0*Math.PI,0)
ctx.arc(150,120,5,0,1.0*Math.PI)

ctx.stroke()
ctx.fill()
ctx.endPath()



