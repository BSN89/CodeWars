// Напишите функцию, которая принимает число и возвращает соответствующий 
// этому значению символ ASCII.

// Пример:

// 65 --> 'A'
// 97 --> 'a'
// 48 --> '0

function getChar(c){
    return String.fromCharCode(c)
  }

  console.log(getChar(55));
  console.log(getChar(56));
  console.log(getChar(65));