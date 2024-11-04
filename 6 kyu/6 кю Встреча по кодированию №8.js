// Вам будет предоставлена ​​последовательность объектов (ассоциативные массивы в PHP), 
// представляющих данные о разработчиках, которые зарегистрировались для участия в 
// следующей встрече по программированию, которую вы организуете.

// Ваша задача — вернуть:

// trueесли все следующие континенты/географические зоны будут представлены хотя 
// бы одним разработчиком: «Африка», «Америка», «Азия», «Европа», «Океания».
// falseв противном случае.

function allContinents(list) {
    let continentArr = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']
    let arr = []
    list.forEach(el => continentArr.includes(el.continent) && !arr.includes(el.continent) ? arr.push(el.continent) : el)
    return arr.length >= 5
  }

  console.log(allContinents([
    { firstName: 'Fatima', lastName: 'A.', country: 'Algeria', continent: 'Africa', age: 25, language: 'JavaScript' },
    { firstName: 'Fatima', lastName: 'A.', country: 'Algeria', continent: 'Africa', age: 25, language: 'JavaScript' },
    { firstName: 'Agustín', lastName: 'M.', country: 'Chile', continent: 'Americas', age: 37, language: 'C' },
    { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 39, language: 'Ruby' },
    { firstName: 'Laia', lastName: 'P.', country: 'Andorra', continent: 'Europe', age: 55, language: 'Ruby' },
    { firstName: 'Oliver', lastName: 'Q.', country: 'Australia', continent: 'Oceania', age: 65, language: 'PHP' },
  ]))
  console.log(allContinents([
    { firstName: 'Fatima', lastName: 'A.', country: 'Algeria', continent: 'Africa', age: 25, language: 'JavaScript' },
    { firstName: 'Agustín', lastName: 'M.', country: 'Chile', continent: 'Americas', age: 37, language: 'C' },
  ]))