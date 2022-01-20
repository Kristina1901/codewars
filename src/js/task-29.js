function gameStatus(field) {
    let zeroarr = []
    let nozeroarr = []
    let newarr = [] 
    let somarr = []
    let orrarr = []
    let krr = []
    let anotherarr = []
    let fg = []
    let k = []
    let l = []
    let a = []
   
    for (let i = 0; i < field.length; i++) {
          
        if (field[i] === 0) {
            zeroarr.push(field[i])
        }
       

        if (field[i] !== 0) {
            nozeroarr.push(field[i])
        }


        if ((field[0] === field[4] && field[8] === field[0])) {
            newarr.push(field[0])
        }
        
        if (field[3] === field[4] && field[4] === field[3]) {
             somarr.push(field[3])
        }
             if (field[0] === field[1] && field[2] === field[0]) {
             krr.push(field[0])
        }
        
        if ((field[2] === field[4] && field[7] === field[2])) {
           orrarr.push(field[0])
        }
            if ((field[6] === field[7] && field[6] === field[8])) {
         anotherarr.push(field[0])
        }
             if ((field[0] === field[3] && field[6] === field[0])) {
         l.push(field[0])
        }
           if ((field[2] === field[5] && field[8] === field[2])) {
         a.push(field[0])
        }
           
         
       
            
        }
    
    
    
    
    
    

    if (nozeroarr.length == 9) {
           return 'end'
    }
    else if (zeroarr.length == 9) {
           return 'turn'
    }
    
    else if (newarr[0] == -1) {
        return '0'
    }
    else if (newarr[0] == 1) {
        return 'x'
    }
    else if (somarr[0] == -1) {
        return '0'
    }
    else if (somarr[0] == 1) {
        return 'x'
    }
    else if (orrarr[0] == -1) {
        return '0'
    }
    else if (orrarr[0] == 1) {
        return 'x'
    }
    else if (krr[0] == -1) {
        return '0'
    }
    else if (krr[0] == 1) {
        return 'x'
    }
    else if (anotherarr[0] == -1) {
        return '0'
    }
    else if (anotherarr[0] == 1) {
        return 'x'
    }
    else if (fg[0] == -1) {
        return '0'
    }
    else if (fg[0] == 1) {
        return 'x'
    }
    else if (k[0] == -1) {
        return '0'
    }
    else if (k[0] == 1) {
        return 'x'
    }
    else if (l[0] == -1) {
        return '0'
    }
    else if (l[0] == 1) {
        return 'x'
    }
    else if (a[0] == 1) {
        return 'x'
    }
    else if (a[0] == -1) {
        return '0'
    }
    else {
        return 'turn'
    }
    
}
console.log(gameStatus([ 0, 0, 0, 0, 0, 0, 0, 0, 0,]))
console.log(gameStatus([ 1, -1, 1,-1, 1, -1,-1, 1, -1,]))
console.log(gameStatus([1, 0, -1, 0, 1, -1, 0, 0, 1,]))
console.log(gameStatus([1, 1, -1, -1, -1, -1, 1, 1, 0,]))
console.log(gameStatus([1, -1, 0, 1, -1, -1, 1, 1, 0,]))
console.log(gameStatus([1, -1, -1, -1, 1, 0, 1, 0, 1,]))
console.log(gameStatus([0, 0, -1, 0, 1, 0, 0, 0, 0]))
console.log(gameStatus([ 1, -1, 0, 1, -1, -1, 1, 1, 0,]))