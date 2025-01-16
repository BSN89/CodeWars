// Верните массив, содержащий числа от 1 до N, где N — параметризованное
//  значение.

// Однако замените определенные значения, если выполняется любое из следующих 
// условий:

// Если значение кратно 3: используйте вместо него значение «Fizz».
// Если значение кратно 5: используйте вместо него значение «Buzz»
// Если значение кратно 3 и 5: используйте вместо него значение «FizzBuzz».
// N никогда не будет меньше 1.

// Пример вызова метода:

// fizzbuzz(3) -->  [1, 2, "Fizz"]

function fizzbuzz(n){
 return n.map(el => el % 3 === 0 
    ? "Fizz" 
    : el % 5 === 0 
    ? 'Buzz' 
    : el )
}

console.log(fizzbuzz([1,2,3,4,5,6,7,8,9,10]))
console.log(fizzbuzz([3,3,3,5,5,6,6]))