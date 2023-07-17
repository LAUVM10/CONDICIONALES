// Crear un array vacío
const numerosAleatorios = [];

// Generar 10 números aleatorios y guardarlos en el array
for (let i = 0; i < 10; i++) {
  const numero = Math.floor(Math.random() * 100); // Genera un número aleatorio entre 0 y 99
  numerosAleatorios.push(numero);
}

// Mostrar el resultado en la consola
console.log(numerosAleatorios);