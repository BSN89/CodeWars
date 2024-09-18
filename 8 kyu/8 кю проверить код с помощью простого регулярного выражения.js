// Базовые задачи регулярных выражений. Напишите функцию, которая принимает 
// числовой код любой длины. Функция должна проверять, начинается ли код с 1, 2 или 3, 
// и возвращать, trueесли это так. falseВ противном случае возвращать.

// Можно предположить, что входные данные всегда будут числом.

let num = 123
let num2 = 248
let num3 = 9453

function validateCode (code) {
    let str = code.toString()
  if(str[0] === '1' || str[0] === '2' || str[0] === '3') return true
   else return false
  }

  console.log(validateCode (num));
  console.log(validateCode (num2));
  console.log(validateCode (num3));