// Анаграмма — это результат перестановки букв слова для получения 
//нового слова (см. Википедию ).

// Примечание: анаграммы нечувствительны к регистру.

// Завершите функцию возврата true, если два аргумента являются 
//анаграммами друг друга; falseв противном случае возвратите значение.

// Примеры
// "foefet"является анаграммой"toffee"

// "Buckethead"является анаграммой"DeathCubeK"

// write the function isAnagram
var isAnagram = function(test, original) {
    
    let testCopy = test.toLowerCase()//
    let originalCopy = original.toLowerCase()//.split('').sort()

    if(testCopy.leegth !== originalCopy.leegth) return false

    return testCopy.split('').sort().join('') === originalCopy.split('').sort().join('')
}

console.log(isAnagram("foefet", "toffee"))
console.log(isAnagram("Buckethead", "DeathCubeK"))
console.log(isAnagram("dumble", "bumble"))
