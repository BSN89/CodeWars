// Учитывая делитель и границу , найдите наибольшее целое число N , 
// такое, что

// Условия :
// N делится на делитель

// N меньше или равно значению, указанному в границах

// N больше 0 .

// Примечания
// Параметры (делитель, граница), передаваемые функции, имеют только 
// положительные значения .
// Гарантируется, что делитель найден .

function maxMultiple(divisor, bound){
    let copyBound
    if(bound % divisor === 0){
      return bound
    }
    if(bound % divisor !== 0){
      copyBound = bound - 1
     return maxMultiple(divisor, copyBound)
    }
    return copyBound
  }

  console.log(maxMultiple(2,7))
  console.log(maxMultiple(37,200))