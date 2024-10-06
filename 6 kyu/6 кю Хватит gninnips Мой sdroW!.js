// Напишите функцию, которая принимает строку из одного или нескольких
//  слов и возвращает ту же строку, но со всеми словами, в которых пять или
//   более букв перевернуты (как в названии этого Ката). Переданные строки 
//   будут состоять только из букв и пробелов. Пробелы будут включены только 
//   в том случае, если присутствует более одного слова.

// Примеры:

// "Hey fellow warriors"  --> "Hey wollef sroirraw" 
// "This is a test        --> "This is a test" 
// "This is another test" --> "This is rehtona test"


  function spinWords(string) {
     return string.split(' ').map(word => {
         return word.length >= 5 ? word.split('').reverse().join('') : word;
     }).join(' ');
}

  console.log(spinWords("Welcome"));
  console.log(spinWords("Hey fellow warriors"));
  console.log(spinWords("This is a test"));
  console.log(spinWords("Seriously this is the last one"));