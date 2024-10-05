// Китайский зодиак представляет собой повторяющийся цикл из 12 лет, 
// где каждый год представлен животным и его предполагаемыми атрибутами. 
// Лунный календарь делится на циклы по 60 лет каждый, и каждый год имеет 
// комбинацию животного и элемента. Существует 12 животных и 5 элементов; 
// животные меняются каждый год, а элементы меняются каждые 2 года. 
// Текущий цикл был начат в 1984 году, который был годом Деревянной Крысы.

// Поскольку текущий календарь — григорианский, я буду использовать только 
// годы с эпохи 1924 года. Для простоты я буду считать год целиком, 
// а не с января/февраля до конца года.

// ##Задача

// Если задан год, верните элемент и животное, которые представляет этот год 
// («Элемент Животное»). Например, я родился в 1998 году, поэтому я «Земляной Тигр».

// animals(или $animalsв Ruby) — это предварительно загруженный массив, 
// содержащий животных в следующем порядке:

// ['Rat', 'Ox', 'Tiger', 'Rabbit', 'Dragon', 
// 'Snake', 'Horse', 'Goat', 'Monkey', 'Rooster', 'Dog', 'Pig']

// elements(или $elementsв Ruby) — это предварительно загруженный массив, 
// содержащий элементы в следующем порядке:

// ['Wood', 'Fire', 'Earth', 'Metal', 'Water']

function chineseZodiac(year){

    let animals = ['Rat', 'Ox', 'Tiger', 
                   'Rabbit', 'Dragon', 'Snake', 
                   'Horse', 'Goat', 'Monkey', 
                   'Rooster', 'Dog', 'Pig']

    let elements = ['Wood', 'Fire', 'Earth', 'Metal', 'Water']

    let indexAnimal = (year - 1924) %  animals.length
    let indexElements = Math.floor((year - 1924) / 2) % elements.length

    return `${elements[indexElements]} ${animals[indexAnimal]}`
  }

  
  console.log(chineseZodiac(2016));
  console.log(chineseZodiac(1948));
  console.log(chineseZodiac(2008));
  console.log(chineseZodiac(1962));
  console.log(chineseZodiac(1985));
  console.log(chineseZodiac(1989));