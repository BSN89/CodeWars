// Дан следующий входной массив:

var list1 = [
  { firstName: 'Aba', lastName: 'N.', country: 'Ghana', 
  continent: 'Africa', age: 21, language: 'Python' },
  { firstName: 'Abb', lastName: 'O.', country: 'Israel', 
  continent: 'Asia', age: 39, language: 'Java' }
];
// напишите функцию, которая при выполнении findOddNames(list1)возвращает только 
// разработчиков, а если вы добавите ASCII-представление всех символов в их именах, 
// результатом будет нечетное число :

// [
//   { firstName: 'Abb', lastName: 'O.', country: 'Israel', continent: 'Asia', age: 39, language: 'Java' }
// ]
// Объяснение вышесказанного:

// Сумма ASCII-кодов букв равна 'Aba': 65 + 98 + 97 = 260что является четным числом
// Сумма ASCII-кодов букв равна 'Abb': 65 + 98 + 98 = 261что является нечетным числом

function findOddNames(list) {
 return list.filter(el => {
   let sumChar = 0
     for (const char of el.firstName) {
         sumChar += char.charCodeAt(0)
       }
      return  sumChar % 2 !== 0 
    } )
}

  console.log(findOddNames(list1));

  //let r = el.name.charCodeAt(0) % 2 === 0