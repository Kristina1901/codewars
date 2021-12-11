// Вам дано число N.
// Найдите сумму всех чисел, находящихся между 1 и N, включая 1 и N.

// Примеры:
// # N = 4
// 1 + 2 + 3 + 4 = 10

// # N = 10
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + (1 + 0) = 46

// # N = 12
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + (1 + 0) + (1 + 1) + (1 + 2) = 51

function Num(N) {
    let arr = Array.apply(null, { length: N + 1 }).map(Number.call, Number)
    console.log(arr)
    let numf = [];
  let bas = [];
  let str = [];
  
  
  

  // for (let i = 0; i < arr.length; i += 1) {
  //     let str = []
  //   if (arr[i] >= 10) {
  //     let str = arr[i].toString()
  //   }
  //       numf = str.split('')
      
      
  //   }
  
  // console.log(numf)
  let arrw = arr.map(function (fig) {
    if (fig >= 10) {
      str.push(fig.toString())
      }
    });
  console.log(str) 
  
  for (let i = 0; i < str.length; i += 1) { 
    numf.push(str[i].split(''));
  }
  
  let massive = numf.flat(2)
  console.log(massive)
  var doubles = massive.map(function(num) {
           return Number(num);
});
    console.log(doubles)
    
          for (let i = 0; i < arr.length; i += 1) {
        if (arr[i] >= 10) 
        bas = arr.splice(arr[i])
    }
    console.log(arr)
    let newarr = [...arr, ...doubles]
    console.log(newarr)
  let sum = 0;
  for (let i = 0; i < newarr.length; i += 1) {
      sum += newarr[i];
    }
    console.log(sum)
}
console.log(Num(4))
console.log(Num(10))
console.log(Num(12))