// Дополните метод/функцию так, чтобы он преобразовывал слова, 
// разделенные тире/подчеркиванием, в camel case . Первое слово в выходных
//  данных должно быть написано заглавными буквами, только если исходное 
//  слово было написано заглавными буквами (известно как Upper Camel Case, 
//     также часто называемый Pascal case). Следующие слова должны всегда 
//     быть написаны заглавными буквами.

// Примеры
// "the-stealth-warrior"преобразуется в"theStealthWarrior"

// "The_Stealth_Warrior"преобразуется в"TheStealthWarrior"

// "The_Stealth-Warrior"преобразуется в"TheStealthWarrior"

function toCamelCase(str){
    let newStr = str.replace(/[- _]/g,' ').split(' ')
    return newStr
    .map((el,i) => i > 0 
    ? el[0].toUpperCase()+ el.slice(1) 
    : el).join('')
    
}

console.log(toCamelCase("the-stealth-warrior"));
console.log(toCamelCase("The_Stealth_Warrior"));
console.log(toCamelCase("The_Stealth-Warrior"));
console.log(toCamelCase("A-B-C"));