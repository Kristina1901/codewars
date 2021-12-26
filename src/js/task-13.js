// /Moving Zeros To The End

// Создайте алгоритм, который переместит все нули массива в его конец.

// Пример:
//  moveZeros([false,1,0,1,2,0,1,3,"a"])
//  // returns[false,1,1,2,1,3,"a",0,0]

function moveZeros(arr) {
    let newArr = [...arr] 
    for (let i = 0; i < newArr.length; i += 1) {
        if (newArr[i] === 0) {
           delete newArr[i]
        }
    }
    let num = [...newArr] 
    return num
}
console.log(moveZeros ([false,1,0,1,2,0,1,3,"a"]))