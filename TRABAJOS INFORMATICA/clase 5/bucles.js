let total = 0
let sumando = 1
while (sumando <= 100) {
    console.log (`Total: ${total}. Sumando: ${sumando}`);
    total= total + sumando;
    sumando = sumando + 1;
 }
 console.log (`la suma es: ${total}`);

 let numero;
 do {
     numero= prompt ("Ingrese un numero");
 } while (isNaN (numero) || numero < 0);
 console.log(`La raiz cuadradada es: ${Math.sqrt(numero)}`);
