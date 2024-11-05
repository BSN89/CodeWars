// напишите функцию, которая добавляет usernameсвойство к каждому объекту во 
// входном массиве:

// [
//   { firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby', 
//     username: 'emilyn1990' },
//   { firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure', 
//     username: 'nore2000' }
// ]
// Стоимость имущества usernameскладывается путем объединения:

// firstNameв нижнем регистре;
// первая буква lastNameв нижнем регистре; и
// год рождения, который для целей этого ката рассчитывается просто путем 
// вычитания ageиз текущего года. Пожалуйста, убедитесь, что ваша функция 
// возвращает правильный год рождения независимо от того, когда она будет 
// выполнена, например, она также должна работать правильно для встречи, 
// организованной через 10 лет. В примере выше предполагается, что функция 
// выполняется в 2020 году.

function addUsername(list) {
    const date = new Date()
  return list.map(el => {
      let newEl = `${el.firstName.toLowerCase()}${el.lastName.replace('.','').toLowerCase()}${date.getFullYear() - el.age}`
      return ({...el, username: newEl})
  })
 
}

console.log(addUsername([
    { firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby' },
    { firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure' }
  ]));