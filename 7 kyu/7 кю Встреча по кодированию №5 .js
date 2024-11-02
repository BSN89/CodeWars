// Вам будет предоставлен массив объектов (ассоциативные массивы в PHP, 
//     таблицы в COBOL, словари в Python), представляющих данные о 
//     разработчиках, которые зарегистрировались для участия в следующей 
//     встрече по программированию, которую вы организуете.

// Ваша задача — вернуть объект (ассоциативный массив в PHP, таблицу в 
//     COBOL, словарь в Python), который включает количество языков 
//     программирования, представленных на встрече .

function countLanguages(list) {
    let objCountLang = {}
    list.forEach(el =>  objCountLang[el.language] 
        ? objCountLang[el.language]++ 
        :  objCountLang[el.language] = 1
        )
    return objCountLang
  }

  console.log(countLanguages([
    { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C' },
    { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript' },
    { firstName: 'Ramon', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby' },
    { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C' },
  ]))