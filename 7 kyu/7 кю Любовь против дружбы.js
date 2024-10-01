// Если　a = 1, b = 2, c = 3 ... z = 26

// Затемl + o + v + e = 54

// иf + r + i + e + n + d + s + h + i + p = 108

// Так что friendshipв два раза сильнее love:-)

// Ваша задача — написать функцию, которая вычисляет значение 
// слова на основе суммы позиций его символов в алфавите.

// Ввод всегда будет состоять только из строчных букв и никогда не будет пустым.

function wordsToMarks(string){
    const objCount = {};
    for (let i = 0; i < 26; i++) {
      const letter = String.fromCharCode(97 + i); // 97 - код символа 'a'
      objCount[letter] = i + 1;
    }
    let result = 0
    for (let j = 0; j < string.length; j++) {
        for (let key in objCount) {
            if (key === string[j]) {
              result += objCount[key]
            }
          
        }
        
    }
    return result
  }
  // ИЛИ 

  function wordsToMarks2(string) {
    return string.split('')
    .map(char => char.charCodeAt(0) - 96)
    .reduce((sum, num) => sum + num, 0);
  }
  //ИЛИ
  const wordsToMarks3 = s => [...s]
  .reduce((res, c) => res += c.charCodeAt() - 96, 0)



console.log(wordsToMarks("attitude"));
 console.log(wordsToMarks3("friends"));
 console.log(wordsToMarks2("family"));
 console.log(wordsToMarks2("knowledge"));
