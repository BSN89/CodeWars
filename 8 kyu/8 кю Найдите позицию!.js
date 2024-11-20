// Получив букву, верните ее положение в алфавите.

// Ввод :: "а"

// Вывод :: "Позиция алфавита: 1"

// Примечание: проверяются только строчные буквы английского языка.


function position(letter){
    return `Position of alphabet: ${letter.charCodeAt(0) - 96}`
  }

  console.log(position("a"))
  console.log(position("z"))
  console.log(position("e"))