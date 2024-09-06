




// function adjacentElementsProduct(array) {
//  let result = []
//  array.reduce((acc,el) => result.push(acc * el))
//  return result
// }

// console.log(adjacentElementsProduct([5, 8]));
// console.log(adjacentElementsProduct([1, 2, 3]));
// console.log(adjacentElementsProduct([1, 5, 10, 9]));
// console.log(adjacentElementsProduct([4, 12, 3, 1, 5]));
// console.log(adjacentElementsProduct([5, 1, 2, 3, 1, 4]));

function arrayMap(array,callback) {
    return  array.map( el => callback(el) )
}

let numbers = [1,2,3,4,5]
let multiply = arrayMap(numbers, el => el * 10)

console.log(multiply);