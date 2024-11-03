// Вам будет предоставлена ​​последовательность объектов, представляющих
//  данные о разработчиках, которые зарегистрировались для участия в 
//  следующей встрече по программированию, которую вы организуете.

// Ваша задача — вернуть последовательность, которая включает разработчика, 
// который является самым старшим. В случае ничьей включите всех старших 
// разработчиков того же возраста, перечисленных в том же порядке, 
// в котором они были указаны в исходном входном массиве.


function findSenior(list) {
    let maxAge = list.reduce((prev, el) => prev.age > el.age ? prev : el ,[])
    return list.filter( el => el.age >= maxAge.age)
  }

  console.log(findSenior([
    { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP' },
    { firstName: 'Odval', lastName: 'F.', country: 'Mongolia', continent: 'Asia', age: 38, language: 'Python' },
    { firstName: 'Emilija', lastName: 'S.', country: 'Lithuania', continent: 'Europe', age: 19, language: 'Python' },
    { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 49, language: 'PHP' },
  ]))