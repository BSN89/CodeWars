// Дан смешанный массив числовых и строковых представлений целых чисел. 
// Сложите нестроковые целые числа и вычтите сумму строковых целых чисел.

// Возврат в виде числа.

function divCon(x){
let num = 0
let str = 0

for (const el of x) {
    if(typeof el === 'string') str += Number(el)
    if(typeof el === 'number') num += el
}

return num - str
}

console.log(divCon([9, 3, '7', '3']));