// В начальной школе я научился одному трюку, чтобы определить, 
// делится ли число на три, — это сложить все целые числа в числе 
// и разделить полученную сумму на три. Если при делении суммы на три 
// нет остатка, то исходное число также делится на три.

// Дан ряд цифр в виде строки. Определите, делится ли число, 
// представленное этой строкой, на три.

// Пример:

// "123"      -> true
// "8409"     -> true
// "100853"   -> false
// "33333333" -> true
// "7"        -> false

function divisibleByThree(str){
let result = [...str].reduce((acc,el) => +acc + +el , )
return result % 3 === 0
}

console.log(divisibleByThree('123'));
console.log(divisibleByThree('19254'));
console.log(divisibleByThree('88'));
console.log(divisibleByThree('1'));