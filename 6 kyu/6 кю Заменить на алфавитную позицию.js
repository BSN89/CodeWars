// Добро пожаловать.

// В этом ката вам необходимо, имея заданную строку, заменить каждую 
// букву ее положением в алфавите.

// Если в тексте есть что-то, что не является буквой, проигнорируйте 
// это и не возвращайте.

// "a" = 1, "b" = 2, и т. д.

// Пример
// Input = "The sunset sets at twelve o' clock."
// Output = "20 8 5 19 21 14 19 5 20 19 5 
// 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11
// "

function alphabetPosition(text) {
let result = ''
let replaceStr = text.replace(/[^a-z]/gi, '')
for (let i = 0; i < replaceStr.length; i++) {
    
    result +=  replaceStr[i].toLowerCase().charCodeAt(0) - 96 + ' '
     }
    return result.trim()
  }
  console.log('t'.charCodeAt(0) - 96)
  console.log(alphabetPosition("The sunset sets at twelve o' clock."));
  console.log(alphabetPosition("The narwhal bacons at midnight."));
