// Вам даны два массива чисел. Необходимо просуммировать все числа этих двух массивов.

// Примеры:
//  arrayPlusArray([1, 2, 3], [4, 5, 6]) =>  21
//  arrayPlusArray([-1, -2, -3], [-4, -5, -6]) =>  -21
//  arrayPlusArray([0, 0, 0], [4, 5, 6]) => 15
//  arrayPlusArray([100, 200, 300], [400, 500, 600]) => 2100
function arrayPlusArray(mas1, mas2) {
    const value = [...mas1, ...mas2];
    console.log(value)
    let sum = 0;
  for (let i = 0; i < value.length; i += 1) {
  sum += value[i];
}
  return sum
   
}
console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]));
console.log(arrayPlusArray([-1, -2, -3], [-4, -5, -6]));
console.log(arrayPlusArray([0, 0, 0], [4, 5, 6]));
