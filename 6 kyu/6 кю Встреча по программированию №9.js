

// Ваша задача — вернуть:

// trueесли зарегистрировались разработчики из всех следующих возрастных 
// групп: подростки, двадцатилетние, тридцатилетние, сорокалетние, пятидесятилетние,
//  шестидесятилетние, семидесятилетние, восьмидесятилетние, девяностые, 
//  столетние (не моложе 100 лет).
// falseв противном случае.

function isAgeDiverse(list) {
    let numsArr2 = [];
    
    list.forEach(el => {
      if (el.age > 10 && el.age <= 19 && !numsArr2.includes('10')) {
        numsArr2.push('10');
      } else if (el.age > 19 && el.age <= 29 && !numsArr2.includes('20')) {
        numsArr2.push('20');
      } else if (el.age > 29 && el.age <= 39 && !numsArr2.includes('30')) {
        numsArr2.push('30');
      } else if (el.age > 39 && el.age <= 49 && !numsArr2.includes('40')) {
        numsArr2.push('40');
      } else if (el.age > 49 && el.age <= 59 && !numsArr2.includes('50')) {
        numsArr2.push('50');
      } else if (el.age > 59 && el.age <= 69 && !numsArr2.includes('60')) {
        numsArr2.push('60');
      } else if (el.age > 69 && el.age <= 79 && !numsArr2.includes('70')) {
        numsArr2.push('70');
      } else if (el.age > 79 && el.age <= 89 && !numsArr2.includes('80')) {
        numsArr2.push('80');
      } else if (el.age > 89 && el.age <= 99 && !numsArr2.includes('90')) {
        numsArr2.push('90');
      } else if (el.age >= 100 && !numsArr2.includes('100')) {
        numsArr2.push('100');
      }
    });
    
    return numsArr2.length >= 10;
  }
  console.log(isAgeDiverse([
    { firstName: 'Harry', lastName: 'K.', country: 'Brazil', continent: 'Americas', age: 19, language: 'Python' },
    { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 29, language: 'JavaScript' },
    { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 39, language: 'Ruby' },
    { firstName: 'Noa', lastName: 'A.', country: 'Israel', continent: 'Asia', age: 40, language: 'Ruby' },
    { firstName: 'Andrei', lastName: 'E.', country: 'Romania', continent: 'Europe', age: 59, language: 'C' },
    { firstName: 'Maria', lastName: 'S.', country: 'Peru', continent: 'Americas', age: 60, language: 'C' },
    { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 75, language: 'Python' },
    { firstName: 'Chloe', lastName: 'K.', country: 'Guernsey', continent: 'Europe', age: 88, language: 'Ruby' },
    { firstName: 'Viktoria', lastName: 'W.', country: 'Bulgaria', continent: 'Europe', age: 98, language: 'PHP' },
    { firstName: 'Viktoria', lastName: 'W.', country: 'Bulgaria', continent: 'Europe', age: 98, language: 'PHP' },
  ]));