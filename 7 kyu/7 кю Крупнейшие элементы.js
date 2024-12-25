// Напишите программу, которая выводит верхние nэлементы из списка.

// Пример:

// largest(2, [7,6,5,4,3,2,1])
// // => [6,7]

// function largest(n, array) {
//   let result = []
//   const maxFunc = arr => arr.find(el => el === Math.max(...arr) )
//      while(result.length < n){
//          let ind = array.indexOf(maxFunc(array))
//          result.push(maxFunc(array))
//          array.splice(ind,1)
//      }
//     return result.sort((a,b) => a - b)
//   }

  //or

  function largest(n, array) {
    let result = []
    let copyArr = [...array].sort((a,b) => b - a)
     while (result.length < n) {
      result.unshift(copyArr.shift())
     }

    return result
    }

  console.log(largest(2, [7,6,5,4,3,2,1]))
  console.log(largest(2, [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]))
  console.log(largest(7, [9, 1, 50, 22, 3, 13, 2, 63, 5]))
  console.log(largest(0, [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]))