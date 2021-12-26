// Создайте функцию, которая принимает число в качестве аргумента и возвращает true, если число является простым.

// Простое число — натуральное число, имеющее ровно два различных натуральных делителя — единицу и самого себя.

// Примеры:
//  is_prime(1)  /* false */
//  is_prime(2)  /* true  */
//  is_prime(-1) /* false */
// function is_prime (num)  {
//     if (num < 2) return false;
        
//     if(num < 4) return true;
//     if(num % 2 == 0 || num % 3 == 0) return false;
//     for(let i = 5, N = Math.sqrt(num); i <= N; i += 2)
//         if(num % i == 0) return false;
//     return true;
// }
function is_prime(num) {

    let value = true;
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            return  value = false;
            break; // выйдем из цикла
        }
    }
    if (num < 2) {
        return value = false
    }
    return value
}

console.log(is_prime(1))
console.log(is_prime(2))
console.log(is_prime(-1))
console.log(is_prime(14))
console.log(is_prime(21))
console.log(is_prime(11))