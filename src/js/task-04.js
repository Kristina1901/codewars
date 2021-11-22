// Вам дано число, состоящее из нескольких цифр. Его нужно превратить в одну цифру. Для этого нужно перевести данное число в двоичный вид, а затем сложить все единицы двоичного представления.

// Примеры:
//  5665 --> (binary) 1011000100001
//  1011000100001 --> (sum of binary digits) 5

//  123456789 --> (binary) 111010110111100110100010101
//  111010110111100110100010101 --> (sum of binary digits) 16
//  16 --> (binary) 10000
//  10000 --> (sum of binary digits) 1

function dec2bin(dec){
  let number = (dec >>> 0).toString(2);
  let numberSecond = Array.from(String(number), Number)
  let sum = 0;
  for (let i = 0; i < numberSecond.length; i += 1) {
  sum += numberSecond[i];
}
  console.log(sum);
  
  
  
}
console.log(dec2bin(5665));
console.log(dec2bin(123456789));
console.log(dec2bin(16));

  
