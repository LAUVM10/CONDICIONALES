let topping = prompt("Bienvenido a Fast Food. Por favor escoge el topping que quieres para tu helado");
console.log(topping);

if (topping=='sin topping' || topping=='ninguno') {
    console.log(`El helado te cuesta 50 MXN sin ningún topping.`)
}
else if (topping=='oreo') {
    console.log(`El helado te cuesta 60 MXN con el topping Oreo.`)
}
else if (topping=='kitkat') {
    console.log(`El helado te cuesta 65 MXN con el topping KitKat.`)
}
else if (topping=='brownie') {
    console.log(`El helado te cuesta 70 MXN con el topping Brownie.`)
}
else{
    console.log(`No tenemos ese topping, lo sentimos. El precio del helado sin ningún topping es de 50 MXN.`)
}