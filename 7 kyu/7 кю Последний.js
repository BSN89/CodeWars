// Найти последний элемент заданного аргумента(ов). 
// Если передан один аргумент и он является списком/массивом или строкой, 
// вернуть его последний элемент. Гарантируется, что будет хотя бы один аргумент 
// и что массивы/списки/строки с одним аргументом не будут пустыми.

// Примеры
// last(5)               ==> 5
// last([1, 2, 3, 4])    ==>  4
// last("xyz")           ==> "z"
// last(1, 2, 3, 4)      ==>  4
// last([1, 2], [3, 4])  ==>  [3, 4]
// last([[1, 2], [3, 4]])  ==>  [3, 4]


function last(element) {
  if(Array.isArray(element)){
   return element.pop()
  }
  else if(!Array.isArray(element)){
    return element.pop()
}
    else if(typeof element === "string"){
      return element.slice(-1)
  }else{
    return [element].pop()
  }

}

console.log(last(5));
console.log(last("xyz"));
console.log(last([1, 2, 3]));
console.log(last([1, 2, 3, [4, 5]]));
console.log(last(1, 2, 3));
console.log(last([1], [2], [3]));