// Банкоматы допускают использование 4- или 6-значных PIN-кодов, которые 
// не могут содержать ничего, кроме 4 или 6 цифр.

// Если функции передана допустимая строка PIN-кода, вернуть true, 
// в противном случае вернуть false.

// Примеры ( Вход -> Выход)
// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false

function validatePIN (pin) {
    return /^\d{4}$|^\d{6}$/.test(pin);
}

console.log(validatePIN("123453"))
console.log(validatePIN("12345"))
console.log(validatePIN("123 "))