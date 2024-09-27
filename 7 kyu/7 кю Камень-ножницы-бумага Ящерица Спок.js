
// В этом ката ваша задача реализовать 
//расширенную версию 
// знаменитой игры «камень-ножницы-бумага». 
// Правила следующие:

// Ножницы режут бумагу
// Бумажные обложки Rock
// Камень давит Ящерицу
// Ящерица отравила Спока
// Спок разбивает ножницы
// Ножницы обезглавливают Ящерицу
// Ящерица ест бумагу
// Статья опровергает Спока
// Спок испаряет Рок
// Камень крушит ножницы
// Задача:
// Учитывая два значения из указанной выше игры, 
// верните результат игрока 
//как "Player 1 Won!", "Player 2 Won!", 
// или "Draw!".

// Входы
// Значения будут даны как одно из 
// "rock", "paper", "scissors", "lizard", "spock".

























function rpsls(pl1,pl2){ 
    if(pl1 === pl2 ) return "Draw!"
    switch(`${pl1}, ${pl2}`){
        case "rock, lizard":
        case "rock, scissors": 
          return 'Player 1 Won!'
        case "scissors, paper":
        case "scissors, lizard": 
          return 'Player 1 Won!'
        case "paper, rock": 
        case "paper, spock": 
           return 'Player 1 Won!'
        case "lizard, paper": 
        case "lizard, spock": 
           return 'Player 1 Won!'
        case "spock, scissors": 
        case "spock, rock": 
           return 'Player 1 Won!'
        
        default: return "Player 2 Won!"
       }
    }
// Тестирование производительности для switch
 console.time('rpsls');             
    for (let i = 0; i < 1000000; i++) {
     rpsls("rock", "scissors");
     rpsls("paper", "rock");
     rpsls("scissors", "paper");
     rpsls("lizard", "spock");
     rpsls("spock", "rock");
  }
console.timeEnd('rpsls'); 
// rpsls: 22.585ms














// или такой вариант

    function rpslsObject(pl1, pl2) {
        if (pl1 === pl2) return "Draw!";
    
        const rules = {
            "rock": ["scissors", "lizard"],
            "paper": ["rock", "spock"],
            "scissors": ["paper", "lizard"],
            "lizard": ["paper", "spock"],
            "spock": ["rock", "scissors"]
        };
    
        if (rules[pl1].includes(pl2)) {
            return "Player 1 Won!";
        } else {
            return "Player 2 Won!";
        }
    }
// Тестирование производительности для объекта
console.time('rpslsObject');       
     for (let i = 0; i < 1000000; i++) {
     rpslsObject("rock", "scissors");
     rpslsObject("paper", "rock");
     rpslsObject("scissors", "paper");
     rpslsObject("lizard", "spock");
     rpslsObject("spock", "rock");
}
console.timeEnd('rpslsObject'); 
    //rpslsObject: 249.755ms