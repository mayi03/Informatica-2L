let comidas = [
    {nombre: "pan"},
    {nombre: "Arroz"},
    {nombre: "Huevos"},
    {nombre: "carne"},
    {nombre: "pescado"}
]
console.log (comidas)
let orden = document.querySelector('#Alimento')
let contenidoLista = '<ul> </ul>'
for (comida of comidas)
    {contenidoLista = contenidoLista + `<li>${comida.nombre}</li>`}
orden.innerHTML=contenidoLista
