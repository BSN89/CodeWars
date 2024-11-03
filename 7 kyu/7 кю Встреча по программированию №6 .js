// Вам будет предоставлен массив объектов (ассоциативные массивы в PHP, 
//     таблицы в COBOL), представляющих данные о разработчиках, которые 
//     зарегистрировались для участия в следующей встрече по программированию, 
//     которую вы организуете.

// Ваша задача — вернуть либо:

// trueесли все разработчики в списке пишут код на одном языке; или
// falseв противном случае.

function isSameLanguage(list) {
    let language = list[0].language
    return  list.every((el) =>  el.language === language)
    
}

console.log(isSameLanguage([
    { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'JavaScript' },
    { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'JavaScript' },
    { firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 65, language: 'JavaScript' },
  ]))