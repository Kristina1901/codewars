function makeTurn(field, player, index) {
    for (let i = 0; i < field.length; i++) {
        if (field[index] === 0) {
            field[index] = 1
           return true 
        }
        else if (field[index] === 1) {
            field[index] = 1
           return false
        }
       
    
    }
}
// let field = new Array(9).fill(0);
// console.log(makeTurn(field, 1, 2));
// console.log(field[2]);
let field = new Array(9).fill(1);
console.log(makeTurn(field, -1, 2));
console.log(field[2]);