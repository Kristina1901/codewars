// Friend or Foe?

// Создайте функцию, которая отфильтрует массив строк, вернув только строчки, состоящие из четырех символов.

// Пример:
//  friend(["Ryan", "Kieran", "Mark"]) // ["Ryan", "Mark"]
function friend(arr) {
  let arrNew = arr.map((el) => el.split(''))
  let dividedArr = []
  for (let i = 0; i < arrNew.length; i++) {
    if (arrNew[i].length == 4) {
      arrNew[i].join('')
      dividedArr.push(arrNew[i])
     
    }
  }
  
  let cleanArr = dividedArr.map((el) => el.join(''))
  return cleanArr
}
console.log(friend(["Ryan", "Kieran", "Mark"]))
console.log(friend(["Ryan", "Kieran", "Mark", "Toha", "Kristina"]))