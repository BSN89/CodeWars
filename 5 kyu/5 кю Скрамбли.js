// Завершите функцию scramble(str1, str2), которая возвращает значение , 
// trueесли часть str1символов можно переставить так, чтобы они совпадали str2, 
// в противном случае возвращает значение false.

// Примечания:

// Будут использоваться только строчные буквы (az). Знаки препинания и цифры 
// не будут включены.
// Необходимо учитывать производительность.
// Примеры
// scramble('rkqodlw', 'world') ==> True
// scramble('cedewaraaossoqqyt', 'codewars') ==> True
// scramble('katas', 'steak') ==> False

function scramble(str1, str2) {
    let countObj = {}
    for (const subStr of str1) {
     countObj[subStr] ? countObj[subStr]++ : countObj[subStr] = 1 
      }

      for (const sub of str2) {
       if(!countObj[sub]) return false 
          countObj[sub]--
          }
    return true
  }
  console.log(scramble('rkqodlw', 'world'))
  console.log(scramble('cedewaraaossoqqyt', 'codewars'))
  console.log(scramble('scriptjavx','javascript' ))