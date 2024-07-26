// Определите общее количество цифр в целом числе ( n>=0), 
// заданном в качестве входных данных для функции. Например, 
// 9 — это одна цифра, 66 имеет 2 цифры, а 128685 имеет 6 цифр. 
// Будьте осторожны, чтобы избежать переполнений/недополнений.

// Все введенные данные будут действительны.


function digits(n) {
    let result = n.toString()
    let count = 0
    for(let i = 0; i < result.length; i++){
      count++
    }
    return count
  }

  console.log(digits(9));
  console.log(digits(66))
  console.log(digits(123456))