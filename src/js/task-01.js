// На пляже много песка, воды, рыбы и солнца. Создайте функцию, которая принимает строку и подсчитывает количество встречающихся слов Sand, Water, Fish и Sun.

// Примеры:
//  sumOfABeach("WAtErSlIde")                    ==>  1
//  sumOfABeach("GolDeNSanDyWateRyBeaChSuNN")    ==>  3
//  sumOfABeach("gOfIshsunesunFiSh")             ==>  4 
//  sumOfABeach("cItYTowNcARShoW")               ==>  0

function showBeach(str) {
    let regexp =str.match(/(sand|water|fish|sun)/gi) || [];

    return regexp.length;
}
console.log(showBeach("WAtErSlIde"));
console.log(showBeach("GolDeNSandyWateRyBeaChSuNN"));
console.log(showBeach("gOfIshsunesunFiSh"));
console.log(showBeach("cItYTowNcARShoW"));

