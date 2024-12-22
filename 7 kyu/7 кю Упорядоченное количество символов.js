// Подсчитать количество вхождений каждого символа и вернуть его как 
// (список кортежей) в порядке появления. Для пустого вывода вернуть 
// (пустой список).

// Ознакомьтесь с настройкой решения для точной реализации структуры 
// данных в зависимости от вашего языка.

// Пример:

// orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1],
// ['d', 1]]

const orderedCount = function (text) {
    if (text.length === 0) return []
    const result = []
    const seen = new Set()
    for (const char of text) {
      if (!seen.has(char)) {
        const count = (text.match(new RegExp(char, 'g')) || []).length;
        result.push([char, count]);
        seen.add(char)
      }
    }
  
    return result
  }

  console.log(orderedCount("abracadabra"))
  console.log(orderedCount("233312"))