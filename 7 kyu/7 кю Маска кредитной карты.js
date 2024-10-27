// Обычно, когда вы что-то покупаете, вас спрашивают, верны ли номер вашей кредитной 
// карты, номер телефона или ответ на самый секретный вопрос. Однако, поскольку 
// кто-то может заглянуть вам через плечо, вы не хотите, чтобы это было показано 
// на экране. Вместо этого мы это маскируем.

// Ваша задача — написать функцию maskify, которая изменяет все символы, кроме 
// последних четырех, на '#'.

// Примеры (вход -> выход):
// "4556364607935616" --> "############5616"
//      "64607935616" -->      "#######5616"
//                "1" -->                "1"
//                 "" -->                 ""

// // "What was the name of your first pet?"
// "Skippy" --> "##ippy"
// "Nananananananananananananananana Batman!" --> 
// "####################################man!"

// return masked string
function maskify(cc) {
if(cc.length < 5) return cc
let lastChars = cc.slice(-4)
let ccLength = cc.length - 4
let strRes = ''
for (let i = 0; i < ccLength; i++) {
    strRes += '#'
}
return strRes + lastChars
}

console.log(maskify('4556364607935616'));
console.log(maskify('1'));
console.log(maskify('11111'));