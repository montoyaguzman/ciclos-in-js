const serie = [10, 4, 20, 30, 40, 50, 2, 60, 70, 80, 2];

console.log('con continue...');
for(let l = 0; l < serie.length; l++) {
  debugger;
  if (serie[l] % 10 !== 0) {
    continue;
  }
  console.log(serie[l]);
}

console.log('con break...');
for(let l = 0; l < serie.length; l++) {
  debugger;
  if (serie[l] % 10 !== 0) {
    break;
  }
  console.log(serie[l]);
}