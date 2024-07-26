// Ваша машина старая, она легко ломается. Амортизаторы вышли из строя, 
// и вы думаете, что она выдержит еще около 15 ударов, прежде чем окончательно умрет.

// К сожалению для вас, ваш путь очень ухабистый! Дана строка, 
// показывающая либо ровную дорогу ( _), либо ухабы ( n). 
// Если вы можете безопасно добраться домой, столкнувшись 
// с 15 bumps or less, вернитесь Woohoo!, в противном случае вернитесьCar Dead


function bump(x){
    let count = 0
    for (let i = 0; i < x.length; i++) {
        if(x[i] === 'n') count++
    }
    return count > 15 ? 'Car Dead' : "Woohoo!"
}

console.log(bump("__nn_nnnn__n_n___n____nn__nnn"));
console.log(bump("nnn_n__n_n___nnnnn___n__nnn__"))
console.log(bump("_nnnnnnn_n__n______nn__nn_nnn"))
console.log(bump('n'))