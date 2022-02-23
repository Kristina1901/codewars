
// println(sum);

// function addTo(n)
// {
//     if (n == 0)
//         return 0;

//     return n + addTo(n - 1);
// }
// console.log(addTo(10))
// function factorial(n)
// {
//     if (n <= 1)
//         return 1;

//     return n * factorial(n - 1);
// }
// console.log(factorial(10))
function findFibonacci(n)
{
    if (n == 0)
        return 0;

    if (n == 1)
        return 1;

    return findFibonacci(n - 1) + findFibonacci(n - 2);
    
}
console.log(findFibonacci(10))