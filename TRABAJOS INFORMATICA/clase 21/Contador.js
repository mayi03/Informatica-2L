let contador

if (contador >= 1) {
    let contador = 0
    localStorage.setItem("contador", JSON.stringify(contador))
    console.log("No contador")
} else {
    contador = JSON.parse(localStorage.getItem("contador"))
    contador = contador + 1
    localStorage.setItem("contador", JSON.stringify(contador))
    console.log("Si contador")
}

alert (`usted ha ingresado ${contador} veces`)