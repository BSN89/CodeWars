// Создайте функцию prefill, которая возвращает массив nэлементов, имеющих одинаковое значение v. Посмотрите, сможете ли вы сделать это без использования цикла.

// Вам необходимо подтвердить ввод:

// vможет быть чем угодно (примитивным или иным)
// если vпропущено, заполните массивundefined
// если nравно 0, вернуть пустой массив
// если nэто что-то иное, чем целое число или строка в целочисленном формате'123' (например , ), 
// то есть >=0, выдатьTypeError
// При выдаче TypeErrorсообщения должно быть n is invalid, где вы заменяете nфактическое значение, 
// переданное функции.

// Примеры кода

//     prefill(3,1) --> [1,1,1]
    
//     prefill(2,"abc") --> ['abc','abc']
    
//     prefill("1", 1) --> [1]
    
//     prefill(3, prefill(2,'2d'))
//       --> [['2d','2d'],['2d','2d'],['2d','2d']]
      
//     prefill("xyz", 1)
//       --> throws TypeError with message "xyz is invalid"


function prefill(n, v) {
    let arr = []
    const num = Number(n);
    if(v === null) return [undefined]
    if(n === 0) return []
    if (!Number.isInteger(num) || num < 0 || isNaN(num)) {
       return `${n} is invalid`
    }
    else{
      for(let i = 0; i < n; i++){
        arr.push(v)
      }
    }
    return arr
  }

  console.log(prefill(3,1));
  console.log(prefill(2,'abc'));
  console.log(prefill('1',1));
  console.log(prefill(3, prefill(2,'2d')));
  console.log(prefill('xyz', 1));