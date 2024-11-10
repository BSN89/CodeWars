// Напишите функцию, persistenceкоторая принимает положительный параметр 
// numи возвращает его мультипликативную устойчивость, то есть количество 
// раз, которое необходимо умножить цифры, numпока не получится одна цифра.

// Например (Вход -> Выход) :

// 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit, there are 3 multiplications)
// 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2, there are 4 multiplications)
// 4 --> 0 (because 4 is already a one-digit number, there is no multiplication)


function persistence(num) {
    if(num.toString().length === 1 ) return 0

    let count = 0
    let toArr = num.toString().split('')
    let resultForIterarte = toArr.reduce((acc,el) => +acc * +el)
    count++
    if(resultForIterarte.toString().length > 1){
        count += persistence(resultForIterarte)
    }
    return count
 }

 console.log(persistence(39))  //3
 console.log(persistence(4))   //0
 console.log(persistence(25))  //2
 console.log(persistence(999)) //4

