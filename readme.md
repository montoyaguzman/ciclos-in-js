# Sintesis de la asesoria

## **Operadores**

Simbolos que indican como se manipulan los elementos (operandos).

**Incremento**

Dado:

```
let num = 0;
```

El operador de *post-incremento* newNum valdria 0 y num 1, ya que el incremento viene después de la asignación:

```
let newNum = num++
```

El operador de *pre-incremento* newNum valdria 1 y num 1, ya que el incremento viene antes de la asignación:

```
let newNum = ++num
```

**Decremento**

Dado:

```
let num = 4;
```

El operador de *post-decremento* newNum valdria 4 y num 3, ya que el incremento viene después de la asignación:

```
let newNum = num--
```

El operador de *pre-decremento* newNum valdria 3 y num 3, ya que el incremento viene antes de la asignación:

```
let newNum = --num
```

**Asignación suma**

Se puede simplificar la acumulación de suma con la simplificación que nos brinda este operador:

```
const numbers = [1, 2, 3, 4, 5];
let result = 0;
for (let i=0; i < numbers.length; i++) {
	// result = result + numbers[i];
	result += numbers[i];
}
```

**Asignación resta**

Se puede simplificar la acumulación de resta con la simplificación que nos brinda este operador:

const numbers = [1, 2, 3, 4, 5];
let result = 0;
for (let i=0; i < numbers.length; i++) {
	// result = result - numbers[i];
	result -= numbers[i];
}

## **Ciclos o bucles**

Es una secuencia de instrucciones de código que se ejecuta repetidas veces, hasta que la condición asignada a dicho bucle deja de cumplirse.

Los 3 bucles más utilizados en programación son:

* While.
* For.
* Do-while.

**Iteración**

Es una "vuelta" de un ciclo.

**Sintáxis While**

```
let i = 0; // valorInicial
while (i < myArray.length) { // condicion
	// sentences
	i++; // razonDeCambio
}
```

**Sintáxis Do While**

```
let i = 0; // valorInicial
do {
	// sentences (siempre se ejecuta al menos una vez)
	i++; // razonDeCambio
} while (i < myArray.length) // condicion
```

**Sintáxis de For**

```
// (valorInicial; condicion; razonDeCambio)
for (let i=0; i < myArray.length; i++) {
	// sentences
}
```

**Break**

Se usa en condiciones para terminar un ciclo.

**Continue**

Se usa en condiciones para saltar una iteración o vuelta de un ciclo.

## **Condiciones**

En programación son muy usadas para comprobar reglas y son asociativas, es importante asociarlas correctamente con AND (&&) u OR (||) para evitar obtener resultados distintos a lo esperado.

**Tabla de verdad de AND**

```
V && V = V
V && F = F
F && V =F
F && F= F
```


**Tabla de verdad de OR**

```
V || V = V
V || F = V
F || V = V
F || F = F
```

**Tabla de verdad de NEGATION**

```
!V = F
!F = V
```
