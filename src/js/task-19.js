// Maximum Product

// Вам дан массив из чисел. Обработайте его и верните наибольший результат умножения двух чисел из этого массива.

// Пример:
//  adjacentElementsProduct([1, 2, 3]); ==> return 6
function  adjacentElementsProduct(arr) {
    let newarr = [...arr]
    let res = newarr.sort((a, b) => b - a).slice(0, 2);
    let sum = res[0] * res[1]
  return sum;
}
console.log(adjacentElementsProduct([1,2,3]))