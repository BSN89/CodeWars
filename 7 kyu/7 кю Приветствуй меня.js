// Напишите метод, который принимает один аргумент в качестве имени, 
// а затем приветствует это имя, пишется с заглавной буквы и 
// заканчивается восклицательным знаком.

// Пример:

// "riley" --> "Hello Riley!"
// "JACK"  --> "Hello Jack!"

var greet = function(name) {
    let lastChar = name[0].toUpperCase()
    let copyName = name.slice(1).toLowerCase()
return `Hello ${lastChar}${copyName}!`
};

console.log(greet('riley'))
console.log(greet('JACK'))
