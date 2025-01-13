// Тролли атакуют ваш раздел комментариев!

// Распространенный способ решения этой проблемы — удалить все гласные из 
// комментариев троллей, нейтрализовав угрозу.

// Ваша задача — написать функцию, которая принимает строку и возвращает новую 
// строку, в которой удалены все гласные.

// Например, строка «Этот сайт для неудачников LOL!» превратится в 
// «Ths wbst s fr lsrs LL!».

// Примечание: в данном случае ката yне считается гласной.

function disemvowel(str) {
    let rex = 'aouie'
    let result = ''
    for (let i = 0; i < str.length; i++) {
        if(!rex.includes(str[i].toLowerCase())){
            result += str[i]
        }
    }
    return result
  }

  console.log(disemvowel("This website is for losers LOL!"))
  console.log(disemvowel("What are you, a communist?"))