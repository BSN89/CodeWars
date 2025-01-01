// Массивы JavaScript поддерживают функцию фильтра (начиная с JavaScript 1.6).
//  Используйте функциональность фильтра для завершения заданной функции.

// Решение будет работать следующим образом:

// getEvenNumbers([2,4,5,6]) // should == [2,4,6]

function getEvenNumbers(numbersArray){
    return numbersArray.filter( el => el % 2 === 0 )
  }

  console.log(getEvenNumbers([1,2,3,6,8,10]))
  console.log(getEvenNumbers([12,14,15]))