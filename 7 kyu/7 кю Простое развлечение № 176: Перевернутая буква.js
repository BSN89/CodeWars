// Задача
// Данную строку strперевернуть и исключить все неалфавитные символы.

// Пример
// Для str = "krishan", вывод должен быть "nahsirk".

// Для str = "ultr53o?n", вывод должен быть "nortlu".

// Ввод/вывод
// [input]нитьstr
// Строка состоит из строчных латинских букв, цифр и символов.

// [output]строка

function reverseLetter(str) {
    let rex = /[a-z]/g
    return str.match(rex).reverse().join('')
  }

  console.log(reverseLetter("krishan"))
  console.log(reverseLetter("ultr53o?n"))