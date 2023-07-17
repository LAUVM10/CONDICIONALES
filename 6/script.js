let numero1 = prompt("Digita el primer número");
console.log(numero1);
let numero2 = prompt("Digita el segundo número");
console.log(numero2);
let numero3 = prompt("Digita el tercer número");
console.log(numero3);


if (numero1<numero2 && numero2>=numero3) {
    console.log(`El número mayor es el ${numero2}`)
}
else if (numero2<numero1 && numero1>=numero3) {
    console.log(`El número mayor es el ${numero1}`)
}
else if (numero1<numero3 && numero3>=numero2) {
    console.log(`El número mayor es el ${numero3}`)
}
else if (numero3<numero2 && numero2>=numero1) {
    console.log(`El número mayor es el ${numero2}`)
}
else if (numero3<numero1 && numero1>=numero2) {
    console.log(`El número mayor es el ${numero1}`)
}
else if (numero2<numero3 && numero3>=numero1) {
    console.log(`El número mayor es el ${numero3}`)
}
else{
    console.log(`Error`)
}