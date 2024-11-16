// Даны 2 строки aи b, возвращают строку вида short+long+short, с более 
// короткой строкой снаружи и более длинной строкой внутри. Строки не будут 
// иметь одинаковую длину, но они могут быть пустыми ( zerolength).

// Совет для пользователей R:

// Длина строки не всегда совпадает с количеством символов.
// Например: (Вход1, Вход2) --> выход

// ("1", "22") --> "1221"
// ("22", "1") --> "1221"
// ShortLongShort.solution("1", "22"); // returns "1221"
// ShortLongShort.solution("22", "1"); // returns "1221"

function solution(a, b){
    return a.length > b.length ? b+a+b : a+b+a
  }

  
  console.log(solution('45', '1'))
  console.log(solution('13', '200'))
  console.log(solution('Soon', 'Me'))