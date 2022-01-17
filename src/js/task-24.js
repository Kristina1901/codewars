// Функция подсчета факториала до заданного элемента

function getF(num) {
  let multy = 1;
  for (let i = 1; i < num; i++) {
    multy *= i
  }
  return multy
  

}
console.log(getF(4))