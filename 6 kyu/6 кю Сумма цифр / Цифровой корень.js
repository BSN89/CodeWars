// Цифровой корень — это рекурсивная сумма всех цифр числа.

// Учитывая n, возьмите сумму цифр n. Если это значение имеет более одной 
// цифры, продолжайте уменьшать таким образом, пока не получится 
// однозначное число. Входными данными будет неотрицательное целое число.

// Примеры
//     16  -->  1 + 6 = 7
//    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

function digitalRoot(n) {
    let nToArrToStr = [...String(n)]
    let result = 0
  for (let i = 0; i < nToArrToStr.length; i++) {
      result += Number(nToArrToStr[i])
  }
  if(String(result).length > 1){
    return digitalRoot(result)
  }
  return result
}

console.log(digitalRoot(942)); // 6
console.log(digitalRoot(132189));  // 6
console.log(digitalRoot(493193));  // 2