// Вам будет предоставлен массив объектов, представляющих данные о разработчиках, 
// которые зарегистрировались для участия в следующей встрече по программированию, 
// которую вы организуете.

// Ваша задача — вернуть объект, включающий количество вариантов еды, выбранных 
// разработчиками в форме регистрации на встречу .

// Например, дан следующий входной массив:

// var list1 = [
//   { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C', 
//     meal: 'vegetarian' },
//   { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript', 
//     meal: 'standard' },
//   { firstName: 'Ramona', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby', 
//     meal: 'vegan' },
//   { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C', 
//     meal: 'vegetarian' },
// ];
// Ваша функция должна возвращать следующий объект (порядок свойств не имеет значения):

// { vegetarian: 2, standard: 1, vegan: 1 }

// function orderFood(list) {
//     let obj = {}
//     list.forEach(el => obj[el.meal] ? obj[el.meal]++ : obj[el.meal] = 1)
//     return obj
//   }
  function orderFood(list) {
    return list.reduce((acc, el) => {
       acc[el.meal] 
       ? acc[el.meal]++ 
       : acc[el.meal] = 1
       return acc  
    },{})
  }

  console.log(orderFood([
    { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C', 
      meal: 'vegetarian' },
    { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript', 
      meal: 'standard' },
    { firstName: 'Ramona', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby', 
      meal: 'vegan' },
    { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C', 
      meal: 'vegetarian' },
  ]));