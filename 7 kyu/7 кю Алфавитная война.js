// Введение
// Идет война, и никто не знает — война алфавитов!
// Есть две группы враждебных букв. Напряжение между буквами левой и правой стороны было слишком велико, и началась война.

// Задача
// Напишите функцию, которая принимает fightстроку, состоящую только 
// из маленьких букв, и возвращает, кто победил в битве. Когда побеждает
//  левая сторона, возвращайте Left side wins!, когда побеждает правая 
//  сторона, возвращайте Right side wins!, в противном случае возвращайте 
//  Let's fight again!.

// Буквы левой стороны и их сила:

//  w - 4
//  p - 3
//  b - 2
//  s - 1
// Буквы правой стороны и их сила:

//  m - 4
//  q - 3
//  d - 2
//  z - 1
// Остальные буквы не имеют силы и являются лишь жертвами.

function alphabetWar(fight){
    let countObj = { l: {w: 4, p: 3, b: 2, s: 1,}, r: { m: 4, q: 3, d: 2, z: 1,}}
    let right = 0
    let left = 0

    for (const char of fight) {
        if(countObj.l[char]) left += countObj.l[char]
        else if(countObj.r[char]) right += countObj.r[char]
    }


    return  left > right 
              ? 'Left side wins!' 
              : left < right 
              ? 'Right side wins!' 
              : "Let's fight again!"
 }

 console.log(alphabetWar("z"))
 console.log(alphabetWar("zdqmwpbs"))