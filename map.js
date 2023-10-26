const nums = [2, 10, 30, 40, 50];

//map - transformar
const numsTriplo = nums.map((n) => n * 3);
console.log(numsTriplo);

//filter - condicional
const numsFiltro = nums.filter((n) => n < 30);
console.log(numsFiltro);

const numsFind = nums.find((n) => n < 30);
console.log(numsFind);

const numsReduce = nums.reduce((total, n) => total + n, 0);
console.log(numsReduce);
