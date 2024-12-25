// Учитывая число arrayчисел, вернуть новый массив длины, numberсодержащий 
// последние четные числа из исходного массива (в том же порядке). 
// Исходный массив не будет пустым и будет содержать по крайней мере "число" 
// четных чисел.

// Например:

// ([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]
// ([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) => [-8, 26]
// ([6, -25, 3, 7, 5, 5, 7, -3, 23], 1) => [6]

// function evenNumbers(array, number) {
//     let res = []
//     let copyArray = [...array].reverse()
    
//     while(res.length < number){
//        let findElem = copyArray.find(el => el % 2 === 0)
//        let ind = copyArray.indexOf(findElem)
//        res.unshift(findElem)
//        copyArray.splice(ind,1)
//     }

//     return res
//   }

//      or

function evenNumbers(array, number) {
    let filterOdd = array.filter(el => el % 2 === 0)
    return filterOdd.slice(-number)
  }


  console.log(evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3))
  console.log(evenNumbers([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2))
  console.log(evenNumbers([6, -25, 3, 7, 5, 5, 7, -3, 23], 1))