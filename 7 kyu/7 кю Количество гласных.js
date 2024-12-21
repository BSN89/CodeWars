// Возвращает количество гласных в заданной строке.

// Мы будем считать a, e, i, o, uгласными для этого Ката (но не y).

// Входная строка будет состоять только из строчных букв и/или пробелов.

function getCount(str) {
    let count = 0
    let rex = 'aeiou'
    for(let char of str){
     if( rex.includes(char) ){
       count++
       } 
      }
    return count
    }

    