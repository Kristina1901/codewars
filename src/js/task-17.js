// Создайте функцию, которая принимает строку или массив и возвращает все уникальные элементы входного значения по порядку.

// Примеры:
//  uniqueInOrder('AAAABBBCCDAABBB')
//  // ['A', 'B', 'C', 'D', 'A', 'B']

//  uniqueInOrder('ABBCcAD')
//  //['A', 'B', 'C', 'c', 'A', 'D']

//  uniqueInOrder([1,2,2,3,3])
//  //[1,2,3]
function unique(arr) {
    return arr.filter((el, i, arr) => arr.indexOf(el) === arr.lastIndexOf(el))
} 
console.log(unique(['A', 'B', 'C', 'D', 'A', 'B']))
console.log(unique(['A', 'B', 'C', 'c', 'A', 'D']))
console.log(unique([1,2,2,3,3]))
