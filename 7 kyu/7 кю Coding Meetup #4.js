// Вам будет предоставлен массив объектов (ассоциативные массивы в PHP),
//  представляющих данные о разработчиках, которые зарегистрировались 
//  для участия в следующем митапе по кодированию, который вы организуете. 
//  Список упорядочен в соответствии с тем, кто зарегистрировался первым.

// Ваша задача — вернуть одну из следующих строк:

// < firstName here >, < country here > первого разработчика Python, 
// который зарегистрировался; или
// There will be no Python developersесли ни один разработчик Python 
// не зарегистрировался.

function getFirstPython(list) {
    let pythonLang = list.find(el => el.language === 'Python')
    return pythonLang ? `${pythonLang.firstName}, ${pythonLang.country}` : `There will be no Python developers`
  }

  console.log(getFirstPython([
    { firstName: 'Mark', lastName: 'G.', country: 'Scotland', continent: 'Europe', age: 22, language: 'JavaScript' },
    { firstName: 'Victori', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 30, language: 'Pytho' },
    { firstName: 'Emma', lastName: 'B.', country: 'Norway', continent: 'Europe', age: 19, language: 'Clojure' },
    { firstName: 'Mark', lastName: 'G.', country: 'Scotland', continent: 'Europe', age: 22, language: 'JavaScript' },
    { firstName: 'Victoriaa', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 30, language: 'Python' },
    { firstName: 'Emma', lastName: 'B.', country: 'Norway', continent: 'Europe', age: 19, language: 'Clojure' }
  ]))