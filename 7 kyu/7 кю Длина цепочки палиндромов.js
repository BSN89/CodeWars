// Число является палиндромом, если оно равно числу с цифрами в обратном 
// порядке. Например, 5, 44, 171, 4884
// являются палиндромами, а 43, 194, 4773не являются.

// Напишите функцию, которая принимает положительное целое число и 
// возвращает количество специальных шагов, необходимых для получения
//  палиндрома. Специальный шаг: «перевернуть цифры и добавить к 
//  исходному числу». Если полученное число не является палиндромом, 
//  повторите процедуру с суммой, пока полученное число не станет палиндромом.

// Если введенное число уже является палиндромом, количество шагов равно 0.

// Все входные данные гарантированно имеют конечный палиндром, не вызывающий 
// переполнения MAX_SAFE_INTEGER.

// Пример
// Например, начните с 87:

//   87 +   78 =  165     - step 1, not a palindrome
//  165 +  561 =  726     - step 2, not a palindrome
//  726 +  627 = 1353     - step 3, not a palindrome
// 1353 + 3531 = 4884     - step 4, palindrome!
// 4884является палиндромом, и нам нужно было выполнить 4несколько 
// шагов, чтобы его получить, поэтому ответом 87будет 4.

var palindromeChainLength = function(n) {
    let reverseNumber = (arg) => +(String(arg).split('').reverse().join(''))
    if( n === reverseNumber(n)) return 0
     let count = 0
     let currentNumber = n
     for (let i = currentNumber; i !== reverseNumber(i); count++) {
        i = currentNumber + reverseNumber(i)
        currentNumber = i
     }
    return count
  };
  console.log(palindromeChainLength(88))
  console.log(palindromeChainLength(87))
  console.log(palindromeChainLength(89))
  
