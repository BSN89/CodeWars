// ИИ заразил текст символом!!

// Этот текст теперь полностью мутировал в этого персонажа.

// Начиная с исходного текста и заданного символа, вернуть текст после 
// его мутации таким образом, чтобы все символы исходного текста были 
// заменены этим символом.

// Если текст или символ пустые, вернуть пустую строку.
// Никогда не будет случая, когда оба будут пустыми, так как ничего не происходит!!

// Примечание: символ представляет собой строку длиной 1 или пустую строку.

// Пример
// text before = "abc"
// character   = "z"
// text after  = "zzz"

function contamination(text, char){
    let str = ''
    for(let i = 0; i < text.length; i++){
      str += char
    }
    return str
  }

  console.log(contamination("abc","z"));
  console.log(contamination("","z"));
  console.log(contamination("_3ebzgh4","&"));
