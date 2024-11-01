// Вам будет предоставлен массив объектов (ассоциативные массивы в PHP, 
//     таблицы в COBOL), представляющих данные о разработчиках, которые 
//     зарегистрировались для участия в следующей встрече по программированию, 
//     которую вы организуете.

// Ваша задача — вернуть массив, в котором каждый объект будет иметь новое 
// свойство «приветствие» со следующим строковым значением:

// Привет, <имя_в_этом_месте>, что тебе больше всего нравится в <языке_в_этом_месте>?

function greetDevelopers(list) {
    return list.map(el => ({...el, greeting: `Hi ${el.firstName}, what do you like the most about ${el.language}?`}))
  }

  console.log(greetDevelopers([
    { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
    { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
    { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' } 
  ]))
 