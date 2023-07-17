let calificacion = prompt("Ingresa tu calificacíón de 1 a 10");
console.log(calificacion);

if (0>calificacion || calificacion>10) {
    console.log(`Error.`)
}
else if (calificacion<6) {
    console.log(`Reprobaste.`)
}
else if (calificacion>=6 && calificacion<=8) {
    console.log(`Regular.`)
}
else if (calificacion==9) {
    console.log(`Bien.`)
}
else if (calificacion==10) {
    console.log(`Excelente.`)
}
else{
    console.log('Error')
}