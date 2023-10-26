const produto = {
  marca: "Samsung",
  valor: 1000,
};

console.log(produto?.marca ?? "Marca não informada");

const nome = "Ana";
const exibir = nome ?? "Usuário inexistente";
console.log(exibir);

//Coalescing Operator
console.log(`Seu nome é:${nome || "Usuário inexistente"}`);

// console.log(produto);

// console.log(produto? "produto existe" : "O produto undefined");

// if (produto) {
//     console.log("Produto existe");
// }else{
//     console.log("O produto undefined");
// }

// const pessoa = {
//   nome: "João",
//   idade: null,
//   cidade: "Petrópolis",
//   cargo: undefined,
// };

// const n = pessoa.nome ?? 'Nome não informado';
// const i = pessoa.idade ?? 'Idade não informada';
// const c = pessoa?.cargo;
// console.log(`${n} ${i}`);
// console.log(c);

const pessoa = {
  nome: "João",
  idade: null,
  endereco: {
    cidade: "Petrópolis",
  },
//   exibirDadosPessoa() {
//     return "Teste";
//   },
};
console.log(pessoa?.endereco?.bairro ?? "Bairro inexistente");
console.log(pessoa?.endereco?.cidade ?? "Cidade inexistente");
console.log(pessoa.exibirDadosPessoa?.()??'função não existe');

