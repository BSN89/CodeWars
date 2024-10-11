// Основная идея — подсчитать все встречающиеся символы в строке. 
// Если у вас есть строка типа aba, то результатом должно быть {'a': 2, 'b': 1}.

// А если строка пустая? Тогда результатом должен быть пустой литерал объекта, {}.

function count(string) {
    if(string.length === 0) return {}
    let obj = {}
     for(let char of string){
         if(obj[char]){
            obj[char] += 1
         }else{
            obj[char] = 1
         } 
     }
    return obj
  }

  console.log(count('aba'));
  console.log(count('ab'));
  console.log(count('ABBC'));