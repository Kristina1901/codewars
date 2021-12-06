// Создайте функцию, которая развернет строку (выведет символы в обратном порядке). 

// Примеры:
//  'world'  =>  'dlrow'
//  'word'   =>  'drow'

function reverseString(str) {

  return str.split("").reverse().join("");

}



console.log(reverseString('world'));