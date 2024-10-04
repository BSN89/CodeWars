// Вам дан словарь/хэш/объект, содержащий некоторые языки и ваши результаты 
// тестов на данных языках. Верните список языков, где ваш тестовый балл 
// составляет не менее 60, в порядке убывания баллов.

// Примечание: оценки всегда будут уникальными (поэтому не будет повторяющихся 
//     значений)

// Примеры
// {"Java": 10, "Ruby": 80, "Python": 65}    -->  ["Ruby", "Python"]
// {"Hindi": 60, "Dutch" : 93, "Greek": 71}  -->  ["Dutch", "Greek", "Hindi"]
// {"C++": 50, "ASM": 10, "Haskell": 20}     -->  []

function myLanguages(results) {
    
    let arrIsObj = Object.entries(results).sort((a,b) => b[1] - a[1])
    let objIsArr = Object.fromEntries(arrIsObj)
    
    let result = []
       for (const key in objIsArr) {
          if (objIsArr[key] >= 60) {
            result.push(key)
          }
        }
     return result
   }


console.log(myLanguages({"Java" : 10, "Ruby" : 80, "Python" : 65}));
console.log(myLanguages({"Hindi" : 60, "Greek" : 71, "Dutch" : 93}));
console.log(myLanguages({"C++" : 50, "ASM" : 10, "Haskell" : 20}));