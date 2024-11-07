// Вам будет предоставлена ​​последовательность объектов, представляющих данные 
// о разработчиках, которые зарегистрировались для участия в следующей встрече 
// по программированию, которую вы организуете.

// Дан следующий входной массив:

// var list1 = [
//   { firstName: 'Maria', lastName: 'Y.', country: 'Cyprus', continent: 'Europe', age: 30, language: 'Java' },
//   { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 70, language: 'Python' },
// ];
// напишите функцию, которая возвращает средний возраст разработчиков 
// (округленный до ближайшего целого числа). В примере выше ваша функция должна 
// возвращать 50(число).

// Примечания:

// Входной массив всегда будет допустимым и отформатированным, как в примере выше.
// Возраст представлен числом, которое может быть любым положительным целым числом.

function getAverageAge(list) {
  let result = list.reduce((acc, el) => acc + el.age, 0) / list.length
  return Math.round(result)
  }

  console.log(getAverageAge([
    { firstName: 'Maria', lastName: 'Y.', country: 'Cyprus', continent: 'Europe', age: 30, language: 'Java' },
    { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 70, language: 'Python' },
    { firstName: 'Noa', lastName: 'A.', country: 'Israel', continent: 'Asia', age: 20, language: 'Ruby' },
    { firstName: 'Andrei', lastName: 'E.', country: 'Romania', continent: 'Europe', age: 21, language: 'C' },  
]));