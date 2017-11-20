// callback

// const main = function() {
//   console.log("Hola que tal");
//   console.log("como estas");
// }

// const callDouble = f => {
//   f();
//   f();
// }

const timerizer = f => {
  const delta1 = Date.now()
  f()
  const delta2 = Date.now()
  console.log(`Tu funcion se demora: ${(delta2 - delta1) / 1000} segundos`) // ${cosa}
}

timerizer(() => {
  console.log("hola");
})