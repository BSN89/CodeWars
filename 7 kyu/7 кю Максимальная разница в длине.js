// Вам даны два массива a1и a2строк. Каждая строка состоит из букв от aдо z. 
// Пусть xбудет любой строкой в ​​первом массиве и yбудет любой строкой во втором
//  массиве.

// Find max(abs(length(x) − length(y)))

// Если a1и/или a2пусты, возвращается -1в каждом языке, за исключением Haskell 
// (F#), где возвращается Nothing(None).

// Пример:
// a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt",
//  "znnnnfqknaz", "qqquuhii", "dvvvwz"]
// a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
// mxdiflg(a1, a2) --> 13
// Примечание Баша:
// ввод: 2 строки с подстроками, разделенными,
// вывод: число в виде строки


function mxdiflg(a1, a2) {
    if(a1.length === 0 || a2.length === 0) return -1
    let result = 0
    for (let i = 0; i < a1.length; i++) {
        for (let j = 0; j < a2.length; j++) {
            if( Math.abs(a1[i].length - a2[j].length) > result ) {
                result = Math.abs(a1[i].length - a2[j].length)
            }
        } 
    }
return result
}

console.log(mxdiflg(["hoqq", "bbllkw", "oox", "ejjuyyy", 
"plmiis", "xxxzgpsssa", "xxwwkktt", 
"znnnnfqknaz", "qqquuhii", "dvvvwz"],
["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
))