let dia = prompt("Ingresa un día de la semana");
console.log(dia);

if (dia=='lunes') {
    console.log(`El ${dia} es el primer día de la semana.`)
}
else if (dia=='viernes') {
    console.log(`El ${dia} es el mejor día de la semana.`)
}
else if (dia=='sábado' || dia=='sabado' || dia=='domingo') {
    console.log(`El ${dia} es un día para descansar.`)
}
else{
    console.log(`El ${dia} es un día laboral.`)
}