// Дано число, напишите функцию для вывода его обратных цифр. 
// (например, если 123, ответ 321)

// Числа должны сохранять свой знак, т. е. отрицательное число должно 
// оставаться отрицательным при переворачивании.

// Примеры
//  123 ->  321
// -456 -> -654
// 1000 ->    1


function reverseNumber(n) {
    if(n < 0){
     let arr1 =  n.toString().split('').reverse().join('').replace('-','')
     return  Number(`-${arr1}`)
    }
     let arr2 =  n.toString().split('').reverse().join('')
     return  Number(arr2)
  }

  console.log(reverseNumber(123));
  console.log(reverseNumber(-123));
  console.log(reverseNumber(1000));
  console.log(reverseNumber(98989898));