// Найдите число с наибольшим количеством цифр.

// Если два числа в массиве аргументов имеют одинаковое количество цифр, 
// вернуть первое число в массиве.

function findLongest(array){
      let lastLength = 0
      let result = array[0]
for (const el of array) {
    let elDigit = String(el).length
    if(elDigit > lastLength){
        lastLength = elDigit
        result = el
    }
}

      return result
  }

  console.log(findLongest([1, 10, 100]))
  console.log(findLongest([8, 900, 500]))
  console.log(findLongest([9000, 8, 800]))


   