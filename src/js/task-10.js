// V A P O R C O D E

// Создайте функцию, которая будет преобразовывать строку в стиле  V A P O R W A V E. 
// Для этого нужно все буквы преобразовать в заглавные и добавить по два пробела между ними

// Пример:
//  "Lets go to the movies" 
//  //  "L  E  T  S  G  O  T  O  T  H  E  M  O  V  I  E  S"
function stringcr(str) {
  
  let upper = str.toUpperCase().replace(/\s/g, '');
  let arr = upper.split("");
  
  
  
  let strn = arr.join("  ");
  return strn
}
console.log(stringcr("Lets go to the movies"))