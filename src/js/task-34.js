function k () {
    var bob = {
        name: 'Bob',
        sayName: function () {
            return this.name
        }  
    } 
    var alice = {
        name: 'Alice'
    }
    console.log(bob.Sayname);
    alice.bobSayname = bobSayname;
    console.log(alice.bobSayname() === 'Alice')
}
console.log(k())