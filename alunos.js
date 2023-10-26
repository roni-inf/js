const alunos = [
  { nome: "Ana", idade: 30, email: "ana@gmail.com" },
  { nome: "José", idade: 22, email: "jose@gmail.com" },
  { nome: "Carla", idade: 12, email: "carla@gmail.com" },
  { nome: "Maria", idade: 65, email: "maria@gmail.com" }
];

//filtrar todos alunos maiores que 20 anos
const idadeFiltro = alunos.filter((aluno)=> aluno.idade > 20);
console.log(idadeFiltro);
//imprimir somente o nome dos alunos
const nomesDosAlunos = alunos.map((aluno) => aluno.nome);
//console.log(`Nomes dos alunos: ${nomesDosAlunos}`);
//A média de idades dos alunos

const totalIdades = alunos.reduce((total, aluno) => total + aluno.idade, 0);
const mediaIdades = totalIdades / alunos.length;
console.log(`Média de idades dos alunos:, ${mediaIdades}`);