const pessoa = {
    nome: "João",
    idade: null,
    endereco: {
      cidade: "Petrópolis",
    }
}

const pessoa2 = {
    nome: "Maria",
    idade: null,
    endereco: {
      cidade: "Petrópolis",
    }
}


function mostrarNome({endereco}){
    return endereco.cidade;
}

console.log(mostrarNome(pessoa));

const {nome, endereco} = pessoa;
console.log(nome + endereco.cidade);

//vai pegar tudo do objeto pessoa2 menos a o atributo idade
const {idade, ...rest} = pessoa2;
console.log(rest);