// Curry

// FUNCION NORMAL
// const sum = function(a, b) {
//   return a + b;
// }

// FUNCION CURRIFICADA
// const sum = function(a) {
//   return function(b){
//     return a + b;
//   };
// }

// const sum = (a, b) => a + b;

const sum = a => b => c => a + b + c;


// const sum2 = sum(2);
const sum39 = sum(39);
const sum40 = sum39(1);

console.log(sum40(5));

