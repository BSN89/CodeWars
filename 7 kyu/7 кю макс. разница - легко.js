// Необходимо реализовать функцию, которая возвращает разницу между 
// наибольшим и наименьшим значением в заданном list / array( lst), 
// полученном в качестве параметра.

// lstсодержит целые числа, это значит, что он может содержать некоторые 
// отрицательные числа
// если lstпусто или содержит один элемент, вернуть0
// lstне отсортирован
// [1, 2, 3, 4]   //  returns 3 because 4 -   1  == 3
// [1, 2, 3, -4]  //  returns 7 because 3 - (-4) == 7

function maxDiff(list) {
    if(list.length < 1) return 0
    list.sort((a,b) => a - b)
    return list[list.length-1] - list[0]
  }

  console.log(maxDiff([0, 1, 2, 3, 4, 5, 6]))
  console.log(maxDiff([-0, 1, 2, -3, 4, 5, -6]))