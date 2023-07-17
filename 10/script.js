
function calcularCosto(programa, beca) {

    const precios = {
        Course: 4999,
        Carrera: 3999,
        Master: 2999
    };
    
    const duraciones = {
        Course: 2,
        Carrera: 6,
        Master: 12
    };
    
    const descuentos = {
        Facebook: 0.2,
        Google: 0.15,
        Jesua: 0.5
    };

    let costoMensual = precios[programa];
    let duracion = duraciones[programa];

    if (descuentos.hasOwnProperty(beca)) {
        const descuento = descuentos[beca];
        costoMensual = costoMensual - costoMensual * descuento;
    }

    let costoTotal = costoMensual * duracion;

    return [costoMensual, costoTotal];
}

const programa = prompt("Por favor ingresa el programa educativo que quieres consultar (Course/Carrera/Master):");

const beca = prompt("¿Cuentas con alguna beca (Facebook/Google/Jesua)?");

// Calcular el costo
let [costoMensual, costoTotal] = calcularCosto(programa, beca);

// Mostrar resultados
alert(`El costo mensual del programa con descuento es de $${costoMensual} MXN.`);
alert(`El costo total del programa es de $${costoTotal} MXN.`);
 
