let masa;
let altura;
do {
    masa = parseFloat(prompt("Escriba su masa en kilogramos"))
    altura = parseFloat(prompt("escriba su altura en metros"))
} while (isNaN (masa) || isNaN (altura) || masa<0 || altura<0)
let IMC= masa/Math.pow (altura,altura)
console.log(IMC)
if (IMC <= 18.5){
    alert ("underweight")
} else 
if (18.5<IMC<24.99){
    alert("Normal")
} else
if (IMC >= 25){
    alert ("overweight")
} else 
if (IMC <= 30){
    alert("obese")
}