// Вам даны две строки - короткая и длинная.Создайте функцию, которая преобразует их в одну строку,
//     которая будет состоять из короткой строки + длинной строки + короткой строки.

// Примеры:
//  ("1", "22") --> "1221"
//  ("22", "1") --> "1221"
function adstring() {
  let arr1 = Array.from(arguments)
  let arr2 = arr1[0].split('');
  let arr3 = arr1[1].split('');
  let arr4 = [];
  if (arr2.length < arr3.length) {arr4.unshift(arr2)}
  if (arr3.length < arr2.length) {arr4.unshift(arr3)}
    
     
  
  if (arr2.length > arr3.length) {arr4.push(arr2)}
  if (arr3.length > arr2.length) {arr4.push(arr3)}
  if (arr2.length < arr3.length) {arr4.push(arr2)}
  if (arr3.length < arr2.length) {arr4.push(arr3)}
  
  
  let arr5 = arr4.flat(1).join("")
  return arr5
  }

console.log(adstring("1", "22"))
console.log(adstring("22", "1"))
console.log(adstring("33", "356"))
console.log(adstring("4", "36"))