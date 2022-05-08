const matters = [10, 5, 10, 9, 8, 10];
const matters2 = [];

// la definicion va al incio, TODA junta, pero no se ejecutan en ese orden
// valor inicio; condicion; razonDeCambio
for (let i = 0; i < matters.length; i++) { // Ejecucion "inicio" //Valida la condicion
  // debugger;
  console.log(matters[i]);
  // Ejecuccion de "razonDeCambio"
}


const numbers = [0, 1, 2, 3, 4, 5, 6];
for (let i = 0; i < numbers.length; i=i+2) { 
  // debugger;
  console.log(numbers[i]);
}