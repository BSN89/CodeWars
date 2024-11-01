// Не ставь мне пять!
// В этом ката вы получаете начальный и конечный номер региона и 
// должны вернуть количество всех номеров, кроме номеров с цифрой 5. 
// Начальный и конечный номера являются включительными!

// Примеры:

// 1,9 -> 1,2,3,4,6,7,8,9 -> Result 8
// 4,17 -> 4,6,7,8,9,10,11,12,13,14,16,17 -> Result 12
// Результат может содержать пятерки. ;-)
// Начальное число всегда будет меньше конечного. Оба числа могут быть 
// также отрицательными


function dontGiveMeFive(start, end){
    let arr = []
    for (let i = start; i <= end; i++) {
        if(!i.toString().includes("5")){
            arr.push(i)
        } 
    }
  return arr.length
}

// or 

function dontGiveMeFive(start, end){
    let arr = []
    for (let i = start; i <= end; i++) {
        arr.push(i) 
    }
  return arr.filter(el => !el.toString().includes("5")).length
}

console.log(dontGiveMeFive(1,9)) //8
console.log(dontGiveMeFive(4,17)) //12
console.log(dontGiveMeFive(-14,-7)) //12
