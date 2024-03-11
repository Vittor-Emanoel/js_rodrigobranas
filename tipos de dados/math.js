/*

  Constantes matemáticas

  Math.PI
  Math.E
  Math.LN10
  Math.LN2
  Math.LOG10E
  Math.LOG2E
  Math.SQRT1_2
  Math.SQRT2

  operaçãoes

  ceil =>  teto
  floor => chao
  round => de 5 a 9 ele sobe de 1 a 3 ele cai (fronteira é o 5)
  trunc => elimina a parte decimal do número, tornando-o um inteiro


  operações aritméticas / triconometricas



*/

// let number = [1, 2, 3, 4, 5, 6];

// let maxNumber = Math.max(...number);

for (i = 0; i < 10; i++) {
  const randomNumbers = Math.trunc(Math.random() * 100);
  // const randomNumbers = Math.floor(Math.random() * 100);
  // const randomNumbers = Math.ceil(Math.random() * 100);

  console.log(`${Math.floor(i)} números aleatórios: ${randomNumbers}`);
}
