// Напишите функцию reverse, которая переворачивает список 
// (или, в случае Clojure, любую структуру данных, похожую на список)

// (выделенные встроенные функции деактивированы)

reverse = function(arr) {
    let copy = []
    for (let i = arr.length-1; i >= 0; i--) {
        copy.push(arr[i])
    }
    return copy
  }

  console.log(reverse([1,3,5]))