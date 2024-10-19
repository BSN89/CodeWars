// Вы получаете массив массивов.
// Если вы отсортируете массивы по их длине, вы увидите, что их значения 
// длины последовательны.
// Но один массив отсутствует!


// Вам нужно написать метод, который возвращает длину отсутствующего массива.

// Example:
// [[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]] --> 3

// Если массив массивов равен null/nil или пуст, метод должен вернуть 0.

// Если массив в массиве равен null или пуст, метод также должен возвращать 0!
// Всегда будет отсутствующий элемент, и его длина всегда будет между заданными 
// массивами.

function getLengthOfMissingArray(arrayOfArrays) {
    if(arrayOfArrays === null) return 0
    if(arrayOfArrays.length === 0) return 0  
    if (arrayOfArrays.some(el => el === null || el.length === 0)) return 0;
      let number = 0
      
      let result = arrayOfArrays
      .map(el => el.length).sort((a,b) => a - b)
  
      for (let i = 0; i < result.length; i++) {
          if(result[i + 1] !== result[i] + 1){
             return number = result[i] + 1
          } 
      }
      return number
    }

  //console.log(getLengthOfMissingArray([ [ 1, 2 ], [ 4, 5, 1, 1 ], [ 1 ], [ 5, 6, 7, 8, 9 ]] ));
  //console.log(getLengthOfMissingArray([ [ 5, 2, 9 ], [ 4, 5, 1, 1 ], [ 1 ], [ 5, 6, 7, 8, 9 ]] ));
  //console.log(getLengthOfMissingArray([ [ null ], [ null, null, null ] ] ));
  console.log(getLengthOfMissingArray([[3, 1, 3, 3],
    [4, 0, 2, 3, 2, 3, 4, 3],
    [1, 2, 4, 0, 0],
    [4, 4, 1, 2, 0, 2, 3, 1, 2],
    [4, 0, 0, 2, 1, 1]]))