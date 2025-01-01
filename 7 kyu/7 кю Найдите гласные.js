// Мы хотим узнать индекс гласных в данном слове, например, в слове 
// super есть две гласные (вторая и четвертая буквы).

// Таким образом, если задана строка «super», мы должны вернуть список [2, 4].

// Some examples:
// Mmmm  => []
// Super => [2,4]
// Apple => [1,5]
// YoMama -> [1,2,4,6]
// ПРИМЕЧАНИЯ
// Гласные в этом контексте относятся к: aeiouy (включая заглавные буквы)
// Это индексируется от [1..n](не нулевой индекс!)

function vowelIndices(word){
    let rex = 'aeiouy'
    let res = []

    let wordArr = word.split('')
    for (const char of wordArr) {
        if( rex.includes(char) ){
            let index = wordArr.indexOf(char) 
            res.push( index + 1 )
            wordArr.splice(index,1,'t')
        }
    }

     return res
  }


  console.log(vowelIndices("mmm"))
  console.log(vowelIndices("apple"))
  console.log(vowelIndices("orange"))
  console.log(vowelIndices("supercalifragilisticexpialidocious"))
  