// Напишите функцию с именем first_non_repeating_letter† , которая принимает на вход 
// строку и возвращает первый символ, который не повторяется нигде в строке.

// Например, если заданы входные данные 'stress', функция должна вернуть 't', 
// поскольку буква t встречается в строке только один раз и встречается в строке 
// первой.

// В качестве дополнительной проблемы, заглавные и строчные буквы считаются одним 
// и тем же символом , но функция должна возвращать правильный регистр для первой 
// буквы. Например, ввод 'sTreSS'должен возвращать 'T'.

// Если строка содержит все повторяющиеся символы , она должна вернуть пустую 
// строку ( "");

// † Примечание: функция вызывается firstNonRepeatingLetterпо историческим причинам, 
// но ваша функция должна обрабатывать любой символ Unicode.

function firstNonRepeatingLetter(s) {
    let toLowerStr = s.toLowerCase()
    let odjSubStr = {}
    for (let i = 0; i < toLowerStr.length; i++) {
        odjSubStr[toLowerStr[i]] 
        ? odjSubStr[toLowerStr[i]]++ 
        : odjSubStr[toLowerStr[i]] = 1
    }
    
    for (const key in odjSubStr) {
        odjSubStr[key] > 1 && delete odjSubStr[key]
    }
    let result = ''
    
    let keysOfObj = Object.keys(odjSubStr)
     s.split('')
     .find(el => keysOfObj.includes(el.toLowerCase()) 
     ? result += el 
     : '' 
     )

    return  result
  }

  console.log(firstNonRepeatingLetter('sTress'))
   console.log(firstNonRepeatingLetter('moonmen'))
    console.log(firstNonRepeatingLetter('sTreSS'))
   console.log(firstNonRepeatingLetter("JI>l]ZL+,vL'55XHQ.N3kLOoLLJltI.XG>5,9@ILN+5E]7`H>ZQYv'n"))

