// Если　a = 1, b = 2, c = 3 ... z = 26

// Затемl + o + v + e = 54

// иf + r + i + e + n + d + s + h + i + p = 108

// Так что friendshipв два раза сильнее love:-)

// Ваша задача — написать функцию, которая вычисляет значение 
// слова на основе суммы позиций его символов в алфавите.

// Ввод всегда будет состоять только из строчных букв и никогда не будет пустым.

function wordsToMarks(string){
    // const objCount = {};
    // for (let i = 0; i < 26; i++) {
    //   const letter = String.fromCharCode(97 + i); // 97 - код символа 'a'
    //   objCount[letter] = i + 1;
    // }
    let result = 0
    for (let j = 0; j < string.length; j++) {
        
        result += string[j].charCodeAt(0)
    }
    return result
  }


console.log(wordsToMarks("attitude"));
console.log(wordsToMarks("friends"));
console.log(wordsToMarks("family"));
console.log(wordsToMarks("knowledge"));
