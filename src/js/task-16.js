// Посчитать слова

// Вам дана строка, состоящая из нескольких слов и символов. За слова считаются только последовательности из латинских букв, отделенных пробелами. Посчитайте количество таких слов в строке и верните результат.

// Примеры:
// wordCount("hello there") => 2
// wordCount("I'd like to say goodbye") => 6
function wordCount(str) {
    let word = str.match(/(\w+)/g).length;
    return word
}
console.log(wordCount("hello there"))
console.log(wordCount("I'd like to say goodbye"))