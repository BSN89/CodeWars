




function adjacentElementsProduct(array) {
 let result = []
 array.reduce((acc,el) => result.push(acc * el))
 return result
}

console.log(adjacentElementsProduct([5, 8]));
console.log(adjacentElementsProduct([1, 2, 3]));
console.log(adjacentElementsProduct([1, 5, 10, 9]));
console.log(adjacentElementsProduct([4, 12, 3, 1, 5]));
console.log(adjacentElementsProduct([5, 1, 2, 3, 1, 4]));