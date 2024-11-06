// Вам будет предоставлен массив объектов, представляющих данные о разработчиках, 
// которые зарегистрировались для участия в следующем митапе по веб-разработке, 
// который вы организуете. Будут представлены три языка программирования: 
// Python, Ruby и JavaScript.

// Ваша задача — вернуть либо:

// trueесли количество участников встречи, представляющих любой из трех языков 
// программирования, **максимум в 2 раза превышает количество разработчиков, 
// представляющих любой из оставшихся языков программирования**; или
// falseв противном случае.

function isLanguageDiverse(list) {
   
    let arr = list.reduce((acc, el) => {
        el.language === 'Python' 
        ? acc[0]++ 
        : el.language === 'Ruby' 
        ? acc[1]++ 
        : el.language === 'JavaScript' 
        ? acc[2]++
        : el
        return acc
    },[0,0,0])
    let min = Math.min(...arr)
    let max = Math.max(...arr)
    return !(max > min * 2)
  }

  console.log(isLanguageDiverse([
    { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'Python' },
    { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'Ruby' },
    { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 43, language: 'Ruby' },
    { firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 95, language: 'JavaScript' },
    { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 18, language: 'JavaScript' },
    { firstName: 'Joao', lastName: 'D.', country: 'Portugal', continent: 'Europe', age: 25, language: 'JavaScript' }
  ]));