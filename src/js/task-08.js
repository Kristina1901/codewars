// Создайте функцию, которая будет конвертировать доллары в юань по курсу 1 к 6.75. 
// Результат должен быть строкой, представляющей цифру с двумя знаками после точки.
// Примеры:
//  usdcny(15)  => '101.25 Chinese Yuan'
//  usdcny(465) => '3138.75 Chinese Yuan'
function usdcny(quantity) {
    let course = 6.75;
    let sum = quantity * course;
    let sumAround = sum.toFixed(2);
    return `${sumAround} Chinese Yuan`
}
console.log(usdcny(15));
console.log(usdcny(465));