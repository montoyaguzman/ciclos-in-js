/**
  * Ejemplo de posibles errores logicos (no hay un error de sintaxis que el navegador identifique)
*/
let num = 3;
let other_num = 6;
num++;
num++;
num++;
num--;
--num;
+num; // ++num, num++, let algo = num + num2

const result = other_num + num;
console.log('result: ', result);

