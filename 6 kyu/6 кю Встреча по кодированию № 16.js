// Дан следующий входной массив:

var list1 = [
  { firstName: null, lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
  { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: null },
  { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' } 
];
// написать функцию, которая

// добавляет questionсвойство к каждому объекту во входном массиве, где 
// разработчик не предоставил соответствующие данные 
// (отмечены значением nullв JavaScript, со значением по умолчанию в COBOL). 
// Значение свойства questionдолжно быть следующей строкой:
// Hi, could you please provide your <property name>.

// и возвращает только разработчиков с отсутствующими данными:
// [
//   { firstName: null, lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java', 
//   question: 'Hi, could you please provide your firstName.' },
//   { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: null, 
//   question: 'Hi, could you please provide your language.' }
// ]

function askForMissingDetails(list) {
    let arr = []
    list.forEach(el => {
        for (const key in el) {
           if(el[key] === null){
            arr.push({...el, question: `Hi, could you please provide your ${key}.`})
            break
           }   
        }
    })
    return arr
  }

  console.log(askForMissingDetails(list1));