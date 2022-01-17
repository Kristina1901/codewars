// Функция подсчета суммы в диапазоне целых чисел

function getCorrectForm(count, one, few, many) {  
    let arr = arguments
    let newarr =  [...arr]
    let words = newarr.slice(1, 4)
    let copy = count
  
   
    let num = Math.abs(copy) % 100; 
    let n1 = num % 10;
    if (copy > 10 && copy < 20) { return`${count} ${words[2]} `}
    if (n1 > 1 && n1 < 5) { return `${count} ${words[1]} `}
    if (n1 == 1) { return `${count} ${words[0]} `}
    return `${count} ${words[2]} `;
}
console.log(getCorrectForm(1, 'банан', 'банана', 'бананов'))
console.log(getCorrectForm(11, 'банан', 'банана', 'бананов'))
console.log(getCorrectForm (123, 'банан', 'банана', 'бананов'))