
// (String, Char) -> Int
const charOcurrencies = (word, character) => {
  let contar = 0;
  for (let i = 0; i < word.length; i++) {
    if (word[i] === character)
      contar++;
  }
  return contar;
};

// (String) -> {}
const characterCount = str => {
  let stringCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  let objetoContar = {};

  for (let i = 0; i < stringCase.length; i++) {
    let currentchar = stringCase[i];
    objetoContar[currentchar] = charOcurrencies(str, currentchar);
  }
  return objetoContar;
}


console.log(characterCount("Holamundo"));

// console.log(histoletra("parrafo")); // {p: 1, a: 2, r: 2, f: 1, a: 1}