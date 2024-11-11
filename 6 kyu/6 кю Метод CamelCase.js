// Напишите метод (или функцию, в зависимости от языка), который преобразует 
// строку в camelCase, то есть все слова должны начинаться с заглавной буквы, 
// а пробелы должны быть удалены.

// Примеры (вход -> выход):
// "hello case" --> "HelloCase"
// "camel case word" --> "CamelCaseWord"
// Не забудьте оценить это ката! Спасибо :)

String.prototype.camelCase = function(){
    let strToArr = this.split(' ').filter(el => el.trim() !== '');
    let mappedArr = strToArr.map(el => el[0].toUpperCase() + el.slice(1))
    return mappedArr.join('')
  }

  console.log("test case".camelCase());