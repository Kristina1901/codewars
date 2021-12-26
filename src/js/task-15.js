// Простое сжатие

// Вам дана строка, состоящая из повторяющихся символов. Создайте функцию, которая обработает эту строку и преобразует её в массив, состоящий из кортежей (число повторений, символ).

// Примеры:
//  string1="aaaaaaaaaaaaaaaaaaaaaaaaaabaaaaaaaaaaaaaaaaaa"
//  output1='[[26,"a"],[1,"b"],[18,"a"]]'

//  string="aaaaaaaabaaaa"
//  compressed=[[8,"a"],[1,"b"],[4,"a"]]
function compressed(str) {
    let arr = [...str]
    let copyArr = [...arr]
    let duplicates = []
    let mono = []
    
  
    
    for (let i = 0; i < arr.length; i += 1) {
        if (arr[i] === arr[i + 1]) {
            duplicates.push(arr[i])
           
            
                     
        }
        else {
            break
        }
     




    }
    for (let i = 0; i < arr.length; i += 1) {
        if (arr[i] !== arr[i + 1]) {
            mono.push(arr[i])
          
        }
       
    }
    let monoNew = mono.slice(1, 2);
    


    for (let i = 0; i < copyArr.length; i += 1) {
        if (copyArr[i] === copyArr[i + 1]) {
           
            delete copyArr[i]
           
            
                     
        }
        else {
            delete copyArr[i]
           
            break
            
        }
        
    }
    let negvh = [...copyArr]
    let seconsArr = negvh.filter(function (f) { return f !== undefined })
    let thirdarr = []

    for (let i = 0; i < seconsArr.length; i += 1) {
        if (seconsArr[i] === seconsArr[i + 1]) {
            thirdarr.push(seconsArr[i])
                           
        }

       
    }

    console.log(thirdarr, duplicates, monoNew)
}
console.log(compressed("aaaaaaaaaaaaaaaaaaaaaaaaaabaaaaaaaaaaaaaaaaaa"))
console.log(compressed("aaaaaaaabaaaa"))