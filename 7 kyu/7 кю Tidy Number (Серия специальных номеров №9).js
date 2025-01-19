// Определение
// Аккуратное число — это число, цифры которого расположены 
// в неубывающем порядке .
// Задача
// Дано число, определите, является ли оно аккуратным или нет .
// Разминка (настоятельно рекомендуется)
// Игра с цифрами
// Примечания
// Переданное число всегда положительное .
// Вернуть результат как логическое значение
// Примеры ввода >> вывода
// tidyNumber (12) ==> return (true)
// Объяснение :
// Цифры числа { 1 , 2 } расположены в неубывающем порядке (т.е.) 1 <= 2 .
// tidyNumber (32) ==> return (false)

function tidyNumber(n){
    let nArr = String(n).split('')
    let count = 0
    for (let i = 0; i < nArr.length; i++) {
        if(+nArr[i] < count){
            return false
        }
        count = +nArr[i]
    }
    return true
  }

  console.log(tidyNumber(9672))
  console.log(tidyNumber(2789))
  console.log(tidyNumber(2335))