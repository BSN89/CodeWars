// Task
// Sum all the numbers of a given array ( cq. list ), 
// except the highest and the lowest element ( by value, not by index! ).

// The highest or lowest element respectively is a single 
// element at each edge, even if there are more than one with the same value.

// Mind the input validation.

// Example
// { 6, 2, 1, 8, 10 } => 16
// { 1, 1, 11, 2, 3 } => 6
// Input validation
// If an empty value ( null, None, Nothing etc. ) is given instead of an array, 
// or the given array is an empty list or a list with only 1 element, return 0.

// function sumExceptHighestAndLowest(array) {
//     if(!Array.isArray(array) || array.length < 3){
//         return 0
//       }
//     let min = Math.min(...array)
//     let max = Math.max(...array)
//     return array.filter(el => el !== min && el !== max).reduce((acc,el) => acc + el,0)
// }
function sumExceptHighestAndLowest(array) {
    if(!Array.isArray(array) || array.length < 3){
        return 0
      }
    array.sort((a,b) => a - b)
    let min = array.shift()
    let max = array.pop()
    return array.reduce((acc,el) => acc + el,0)
}



console.log(sumExceptHighestAndLowest([ 6, 2, 1, 8, 10 ])); //16
console.log(sumExceptHighestAndLowest([ -6, -20, -1, -10, -12 ])); // -28
console.log(sumExceptHighestAndLowest(null));
console.log(sumExceptHighestAndLowest([ 0, 1, 6, 10, 10 ]));