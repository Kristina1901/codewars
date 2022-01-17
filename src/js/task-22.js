function arrayPlusArray(a) {
  let newarr
   
    
  for (let i = 0; i < a.length; i += 1) {
  newarr = a.fill(i,i)
}
  return newarr
   
}
console.log(arrayPlusArray([1,2,3.4,5,6,7,8,9,10]));

