// Can we divide it?

// Ваша задача - создать функцию isDivideBy, которая принимает 3 числа и определяет, делится ли первое число на два других.
// Примеры:
//  (-12, 2, -6)  ->  true
//  (-12, 2, -5)  ->  false
//  (45, 1, 6)    ->  false
//  (45, 5, 15)   ->  true
//  (4, 1, 4)     ->  true
//  (15, -5, 3)   ->  true

function isDivideBy() {
    const value = Array.from(arguments);
    const collection = value.slice(1, 3);
    
    if (value[0] % collection[1] == 0 || value[0] % collection[0]) {
        return true
    }
    else {
   return false
}
}

console.log(isDivideBy(-12, 2, -6));
console.log(isDivideBy(-12, 2, -5));
console.log(isDivideBy(45, 1, 6));
console.log(isDivideBy(45, 5, 15));