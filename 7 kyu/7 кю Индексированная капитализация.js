// Даны строка и массив целых чисел, представляющих индексы. 
// Сделать все буквы с заданными индексами заглавными.

// Например:

// capitalize("abcdef",[1,2,5]) = "aBCdeF"
// capitalize("abcdef",[1,2,5,100]) = "aBCdeF". Индекса 100 нет.
// Входными данными будет строка в нижнем регистре без пробелов и массив цифр.

function capitalize(s,arr){
    return [...s].map((el,index) => {
        for (let i = 0; i < arr.length; i++) {
          if(index === arr[i]) {
           return el.toUpperCase()
          } 
        } 
        return el 
    } ).join('') 
  };

  console.log(capitalize("abcdef",[1,2,5])); // 'aBCdeF'
  console.log(capitalize("codewars",[1,3,5,50])); // 'cOdEwArs'
  console.log(capitalize("abracadabra",[2,6,9,10])); // 'abRacaDabRA'