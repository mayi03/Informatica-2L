function areaCirc(r) 
{
 return Math.pow (r , 2) * Math.PI   
}

function volEsfera(r) 
{
 return 4 * Math.PI * Math.pow (r , 2)   
}

function max(a,b) 
{
 if ( a > b)
 return a
 else{
     a < b
     return b
 }
}

function masLarga(palabra1,palabra2)
{
    if (palabra1.length > palabra2.length)
    return palabra1
    else { 
        return palabra2
    }
}
let palabra1 = prompt ("ingrese una palabra")
let palabra2 = prompt ("ingrese otra palabra")
alert (`la palabra mas larga es ${masLarga(palabra1,palabra2)}`)

function masLarga(palabra1,palabra2)
{
    if (palabra1.length > palabra2.length)
    return palabra1
    else { 
        return palabra2
    }
}
let palabra3 = prompt ("ingrese una palabra")
let palabra4 = prompt ("ingrese otra palabra")
console.log (`la palabra mas larga es ${masLarga(palabra1,palabra2)}`)

function fibonacci (n)
{
    if (n>1){
        return fibonacci (n-1) + fibonacci (n-2);
    }
    else if(n==1){
        return 1;
    }
    else if (n==0){
        return 0
    }
}
