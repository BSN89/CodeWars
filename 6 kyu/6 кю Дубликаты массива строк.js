// В этом ката вам будет дан массив строк, и ваша задача — удалить все 
// последовательные повторяющиеся 
// буквы из каждой строки в массиве.

// Например:

// dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].

// dup(["kelless","keenness"]) = ["keles","kenes"].

// Строки будут только в нижнем регистре, без пробелов. 
// Смотрите тестовые случаи для дополнительных примеров.

function dup(s) {
    return s.map(el => {
        let result = '';
        let previousChar = '';
        for (const char of el) {
            if(char !== previousChar){
                result += char
                previousChar = char
            }
        }
        return result
    })
    };

    console.log(dup(["ccooddddddewwwaaaaarrrrsssss","piccaninny","hubbubbubboo"]));
    console.log(dup(["kelless","keenness"]));
    console.log(dup(["Woolloomooloo","flooddoorroommoonlighters","chuchchi"]));