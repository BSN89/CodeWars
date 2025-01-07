// Напишите программу, которая определяет, содержит ли строка только 
// уникальные символы. Верните true, если это так, и false в противном случае.

// Строка может содержать любой из 128 символов ASCII. Символы чувствительны 
// к регистру, например, 'a' и 'A' считаются разными символами.

function hasUniqueChars(str){
    let copy = ''
for (let i = 0; i < str.length; i++) {
     if( copy.includes(str[i]) ){
         return false
     }else{
        copy += str[i]
     }
   }
    return true
  }

  console.log(hasUniqueChars("abcdef"));
  console.log(hasUniqueChars("aA"));
  console.log(hasUniqueChars("++-"));