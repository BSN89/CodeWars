// Вам дан массив. Завершите функцию, которая возвращает количество ВСЕХ элементов 
// в массиве, включая любые вложенные массивы.

// Примеры
// []                   -->  0
// [1, 2, 3]            -->  3
// ["x", "y", ["z"]]    -->  4
// [1, 2, [3, 4, [5]]]  -->  7
// Входными данными всегда будет массив.

function deepCount(a){
    let result = 0
    const func = (arr) => {
        arr.forEach(el => {
            result++
            if(Array.isArray(el)){
                func(el)
            }
        });
    }
    func(a)
    return result
  }

  console.log( deepCount([1, 2, 3]))
  console.log( deepCount(["x", "y", ["z"]]))
  console.log( deepCount([1, 2, [3, 4, [5]]]))
  console.log( deepCount([[[[[[[[[]]]]]]]]]))