// Создайте функцию prefill, которая возвращает массив nэлементов, 
// имеющих одинаковое значение v. Посмотрите, сможете ли вы сделать это без использования цикла.

// Вам необходимо подтвердить ввод:

// vможет быть чем угодно (примитивным или другим)
// если vпропущено, заполните массивundefined
// если nравно 0, вернуть пустой массив
// если nэто что-то иное, чем целочисленная строка или строка в целочисленном формате 
// (например '123', ), то есть >=0броситьTypeError
// При выдаче TypeErrorсообщения должно быть n is invalid, где вы заменяете 
// nфактическое значение, переданное функции.

// Примеры кода

//     prefill(3,1) --> [1,1,1]
    
//     prefill(2,"abc") --> ['abc','abc']
    
//     prefill("1", 1) --> [1]
    
//     prefill(3, prefill(2,'2d'))
//       --> [['2d','2d'],['2d','2d'],['2d','2d']]
      
//     prefill("xyz", 1)
//       --> throws TypeError with message "xyz is invalid"


function prefill(n, v) {
    
    let num = +n
    if(isNaN(num)){
      return `${n} is invalid`
    }
    
    return Array(n).fill(v)
  }
  console.log(prefill(3, 1));
  console.log(prefill(3, prefill(2,'2d')));
  console.log(prefill('xyz', 1));
  console.log(prefill("1", 1))