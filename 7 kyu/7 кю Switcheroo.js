// Дана строка, состоящая из букв a, b и/или c, поменяйте местами буквы a и b 
// (измените a на b и наоборот). Оставьте все вхождения c нетронутыми.

// Пример:

// 'acb' --> 'bca'
// 'aabacbaa' --> 'bbabcabb'

function switcheroo(x){
  let copy = ''
    for (const char of x) {
        if(char === 'a') copy += 'b'
        if(char === 'b') copy += 'a'
        else if(char !== 'a' && char !== 'b') copy += char
    }
    return copy
    }

    console.log(switcheroo('aaabcccbaaa'), 'bbbacccabbb')
    console.log(switcheroo('abc'), 'bac')