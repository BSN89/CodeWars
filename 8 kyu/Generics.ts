// // Пример 1: Фильтрация чисел
// const numbers = [1, 2, 3, 4, 5]
// const isEven = (num: number) => num % 2 === 0

// const filterArray = <T>(arr: T[], predicate: (item: T) => boolean): T[] => {
//     return arr.filter(predicate);
// };
 
// const result = filterArray(numbers, isEven)
// console.log(result) // [2, 4]
 
// // Пример 2: Фильтрация строк
// const words = ['hello', 'world', 'typescript']
// const startsWithT = (word: string) => word.startsWith('t')
 
// const result2 = filterArray(words, startsWithT)
// console.log(result2) // ["typescript"]


const mapArray = <T,S>(array: T[], predicate: (el: T) => S ): S[] => {
    return array.map(predicate)
  }

// Пример 1: Преобразование чисел в строки
const numbers = [1, 2, 3, 4]
const transformNumberToString = (num: number) => `Number: ${num}`
 
const result = mapArray(numbers, transformNumberToString)
console.log(result) // ["Number: 1", "Number: 2", "Number: 3", "Number: 4"]
 
// Пример 2: Преобразование строк в их длины
const words = ['hello', 'world', 'typescript']
const getLength = (word: string) => word.length
 
const lengthResults = mapArray(words, getLength)
//console.log(lengthResults) // [5, 5, 10]
 
// Пример 3: Преобразование объектов в строки
type Person = { name: string; age: number }
const people: Person[] = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
]
const toDescription = (person: Person) => `${person.name} is ${person.age} years old`
 
const descriptions = mapArray(people, toDescription)
//console.log(descriptions) // ["Alice is 25 years old", "Bob is 30 years old"]




// Строки
const stringArray = ['apple', 'banana', 'cherry']
const result1 = updateArray(stringArray, 'banana') // ['apple', 'banana', 'cherry']
const result2 = updateArray(stringArray, 'date') // ['apple', 'banana', 'cherry', 'date']
 
// Числа
const numberArray = [1, 2, 3]
const result3 = updateArray(numberArray, 2) // [1, 2, 3]
const result4 = updateArray(numberArray, 4) // [1, 2, 3, 4]

function updateArray<T>(arr: T[], el: T) {
  return arr.filter(e => !arr.includes(el) ? arr.push(el) : e)
}



