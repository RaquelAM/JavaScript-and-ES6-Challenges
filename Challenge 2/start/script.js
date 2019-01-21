/* CHALLANGE 2 - Const
Answer following Qustions:
  1. Why no error is generated after the line 14?
  Por que se sigue haciendo referencia al mismo punto (arreglo), solo se agrego una entrada mas.
  2. Why after the line 19 TypeError is generated?
  Por que se quiere reasignar la variable arr, lo cual haría que se cambiara el puntero

Change one line of code so, that error will go away.
Don't change lines 14, 19.
*/

"use strict";

var arr = [1, 2];

arr.push(3);

console.log(arr);
// [1, 2, 3]

arr = [1, 2, 3, 4];
// BEFORE: Uncaught TypeError:
//   Assignment to constant variable.
// AFTER: No error

console.log(arr);
// [1, 2, 3, 4]
