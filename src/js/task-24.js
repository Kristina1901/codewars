// Функция подсчета факториала до заданного элемента

function getF(num) {
  if (num == 1) return 1;
  return num * getF(num - 1);
}
console.log(getF(10))


