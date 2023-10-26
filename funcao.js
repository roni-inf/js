//function declaration
function mensagem(texto){
    console.log(texto);
}

mensagem("Curso - 2023");

//function expression

const msg = function(texto){
    console.log(texto);
}

msg("Curso - 2023/2");

//arrow function
const m = (texto)=>console.log(texto);
m('Curso 2023/2- Arrow');

//função para calcular  média.
const media = (nota1, nota2) => console.log(`A média é ${(nota1 + nota2) / 2}`);
media(8,7);

