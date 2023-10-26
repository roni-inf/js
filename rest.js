// function soma(...numeros) {
//   let resposta = 0;
//   for (const numero of numeros) {
//     resposta += numero;
//   }
// return resposta;
// }
// const resposta = soma(1, 5, 10, 20, 30, 100, 20);
// console.log(resposta);

const numeros = [2, 4, 90, 23, 4, 10];
//ignora os três primeiros e imprime o restante
const [a, b, c, ...rest] = numeros;
console.log(rest);

