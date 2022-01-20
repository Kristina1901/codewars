function renderField(field) {
    let output = '';
    let newarr = []
    let str = ['|','|','\n','---+---+---','\n','|','|','\n','---+---+---','\n','\n','|','|']
    let number = [...field]
    
    
    for (let i = 0; i < field.length; i++) {
          
        if (field[i] !== 0) {
            newarr.push(field[i])
        }
              
    }
    for (let i = 0; i < number.length; i++) {
          
        if (number[i] === 1) {
            number[i] = 'x'
        }
        if (number[i] === -1) {
            number[i] = '0'
        }
        if (number[i] === 0) {
            number[i] = ' '
        }
              
    }
   
    //  let k = [number[0], str[0], number[1], str[1], number[2], str[2], number[3],
    //     str[3], number[4], str[4], number[5], str[5], number[6], str[6], number[7], str[7], number[8], str[8], str[9], str[10],].join(' ')
    
    




    if (newarr.length < 1) {
         output =`   ${'|   |'}\n${'---+---+---'}\n   ${'|   |'}\n${'---+---+---'}\n   ${ '|   |'}`
       
    }
    
    
  
    else {

        output = ` ${number[0]} ${'|'} ${number[1]} ${'|'} ${number[2]} \n${'---+---+---'}\n ${number[3]} ${'|'} ${number[4]} ${'|'} ${number[5]} \n${'---+---+---'}\n ${number[6]} ${'|'} ${number[7]} ${'|'} ${number[8]}`
    
       
    } 
    
    
    
  
   
    
    
    return output
    
}
console.log(renderField([0, 0, 0, 0, 0, 0, 0, 0, 0]))
console.log(renderField([0, -1, 0, 0, 1, 0, 0, 0, 0]))
console.log(renderField([1, -1, 0, 0, 1, 0, 0, 0, -1]))

