// Пираты имеют печально известные трудности с произношением. Они склонны 
// смешивать все буквы вместе и кричать на людей.

// Наконец-то нам нужен способ расшифровать то, что говорят эти пираты.

// Напишите функцию, которая будет принимать набор букв и словарь, а 
// также выводить список слов, которые мог иметь в виду пират.

// Например:

// grabscrab( "ortsp", ["sport", "parrot", "ports", "matey"] )
// Должен вернуться ["sport", "ports"].

// Возвращает совпадения в том же порядке, что и в словаре. Возвращает пустой 
// массив, если совпадений нет.

// Удачи!

function grabscrab(anagram, dictionary) {
  let anagramToSort = anagram.split('').sort().join('')
  let filteredDictionary = dictionary.filter(el => {
      if(el.split('').sort().join('') === anagramToSort){
          return el
      }
  })
  return filteredDictionary
}

console.log(grabscrab("oob", ["bob", "baobab"]))
console.log(grabscrab("ainstuomn", ["mountains", "hills", "mesa"]))
console.log(grabscrab("ortsp", ["sport", "parrot", "ports", "matey"]))