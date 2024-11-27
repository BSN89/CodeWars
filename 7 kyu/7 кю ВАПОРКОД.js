// ASC Неделя 1 Задача 4 (Средний #1)

// Напишите функцию, которая преобразует любое предложение в 
// предложение VAPORWAVE. Предложение VAPORWAVE преобразует 
// все буквы в заглавные и добавляет 2 пробела между каждой 
// буквой (или специальным символом), чтобы создать этот эффект VAPORWAVE.

// Обратите внимание, что в этом случае пробелы следует игнорировать.

// Примеры
// "Lets go to the movies"       -->  
// "L  E  T  S  G  O  T  O  T  H  E  M  O  V  I  E  S"

// "Why isn't my code working?"  -->  
// "W  H  Y  I  S  N  '  T  M  Y  C  O  D  E  W  O  R  K  I  N  G  ?"

function vaporcode(string) {
  return [...string]
  .filter(el => el !== ' ')
  .map((el) =>  el.toUpperCase()).join('  ')
}

console.log(vaporcode("Lets go to the movies"));
console.log(vaporcode("Why isnt my code working"));



