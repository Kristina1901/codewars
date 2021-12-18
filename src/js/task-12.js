// Sum of two lowest positive integers

// Создайте функцию, которая принимает массив чисел и возвращает сумму двух наименьших положительных чисел этого массива.

// Примеры:
//  [19, 5, 42, 2, 77] //7.
//  [10, 343445353, 3453445, 3453545353453] //3453455.
function minsum(arr) {
    let newarr = [...arr]
    let res = newarr.sort((a, b) => a - b).slice(0, 2);
    let sum = res[0] +res[1]
    console.log(sum);
}
console.log(minsum([19, 5, 42, 2, 77]))
console.log(minsum([10, 343445353, 3453445, 3453545353453]))