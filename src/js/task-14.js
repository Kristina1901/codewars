// Создайте функцию, которая принимает массив и оставляет в нем только элементы, которые являются числами.

// Примеры:
//  filter_list([1,2,'a','b']) == [1,2]
//  filter_list([1,'a','b',0,15]) == [1,0,15]
//  filter_list([1,2,'aasf','1','123',123]) == [1,2,123]
function Number(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i += 1) { 
        if (typeof(arr[i]) === 'number') {
         newArr.push(arr[i])
     }
    }
    return newArr
}
console.log(Number([1, 2, 'a', 'b']))
console.log(Number([1, 'a', 'b', 0, 15]))
console.log(Number([1,2,'aasf','1','123',123]))