// Can we divide it?

// Ваша задача - создать функцию isDivideBy, которая принимает 3 числа и определяет, делится ли первое число на два других.

// Примеры:
//  (-12, 2, -6)  ->  true
//  (-12, 2, -5)  ->  false
//  (45, 1, 6)    ->  false
//  (45, 5, 15)   ->  true
//  (4, 1, 4)     ->  true
//  (15, -5, 3)   ->  true 
function isDivideBy(num) {
  num = [...arguments]
  let numf = [num[0]]
  let numall = num.slice(1)
  let bol = [];
  let key = true;
  
  for (let i = 0; i < numall.length; i += 1) {
    
    bol.push(Number.isInteger(numf[0] / numall[i]))
    
    
  }
  for (let i = 0; i < bol.length; i += 1) {
    if (bol[i] !== true) {
      return key = false;
      break
    }
    
   
  }
  return key
}
console.log(isDivideBy(-12, 2, -6))
console.log(isDivideBy(-12, 2, -5))
console.log(isDivideBy(45, 1, 6))
console.log(isDivideBy(45, 5, 15))
console.log(isDivideBy(4, 1, 4))
console.log(isDivideBy(15, -5, 3))