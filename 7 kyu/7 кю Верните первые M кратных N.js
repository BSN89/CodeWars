// Реализуйте функцию, multiples(m, n)которая возвращает массив первых 
// m кратных действительного числа n. Предположим, что mэто положительное целое число.

// Бывший.

// multiples(3, 5.0)
// должен вернуться

// [5.0, 10.0, 15.0]


function multiples(m, n){
    let arr = []
    let res = 0
    for(let i = 0; i < m; i++){
         res += n 
      arr.push(res)
    }
    return arr 
  }

  console.log(multiples(3, 5));
  console.log(multiples(5, 5));
  console.log(multiples(7, 7));