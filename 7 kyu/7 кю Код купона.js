// История
// Ваш интернет-магазин любит раздавать купоны на особые случаи. 
// Некоторые клиенты пытаются обмануть систему, вводя недействительные 
// коды или используя просроченные купоны.

// Задача
// Ваша задача:
// написать функцию checkCoupon, которая проверяет, что код купона действителен 
// и не просрочен.

// Купон перестает быть действительным на следующий день ПОСЛЕ даты истечения
//  срока действия. Все даты будут переданы как строки в следующем 
//  формате: "MONTH DATE, YEAR".

// Примеры:
// checkCoupon("123", "123", "July 9, 2015", "July 9, 2015")  ===  true
// checkCoupon("123", "123", "July 9, 2015", "July 2, 2015")  ===  false

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
  if(correctCode !== enteredCode) return false
  if(new Date(currentDate) > new Date(expirationDate)) return false
  return true
}

console.log(checkCoupon('123','123','Jule 5, 2014','October 1, 2014'))
console.log(checkCoupon('123a','123','September 5, 2014','October 1, 2014'))