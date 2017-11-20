
const cuentaLetras = str => {
  const obj = {};
  str
    .split(" ") // String -> [String]
    .join("") // [String] -> String
    .split("") 
    .forEach(e => {
      obj[e] = obj[e] ? obj[e]+1 : 1
    }); // [a] -> undefined

  return obj;
};

console.log(cuentaLetras(`
  <html>
  <head>
    <title>Clase</title>
  </head>
  <body>
    <!-- <script src="index.js"></script> -->
    <script src="cuentaLetras.js"></script>
  </body>
</html>
`)); // {p: 1, a: 2, r: 2, f: 1, a: 1}