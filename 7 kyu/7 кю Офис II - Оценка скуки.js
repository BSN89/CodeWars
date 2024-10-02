// Время от времени люди в офисе меняют команды или отделы. 
// В зависимости от того, как люди проводят свое время, они могут 
// стать более или менее скучными. Время оценить текущую команду.

// Вам будет предоставлен объект (персонал), содержащий имена 
// сотрудников в качестве ключей и отделы, в которых они работают, 
// в качестве значений.

// В каждом отделе существует свой показатель оценки скуки, как показано ниже:

// счета = 1
// финансы = 2
// столовая = 10
// регулирование = 3
// торговля = 6
// изменение = 6
// ИС = 8
// розничная торговля = 5
// уборка = 4
// справлять нужду = 25

// В зависимости от совокупного счета команды, верните 
// соответствующее мнение:

// <=80: «Убейте меня сейчас»
// < 100 & > 80: «Я справлюсь с этим»
// 100 или больше: «Время вечеринки!!»

function boredom(staff){
    let count = 0
  for (const key in staff) {
    switch (staff[key]) {
        case "trading": count += 6; break;
        case "accounts": count += 1; break;
        case "finance": count += 2; break;
        case "canteen": count += 10; break;
        case "regulation": count += 3; break;
        case "change": count += 6; break;
        case "IS": count += 8; break;
        case "retail": count += 5; break;
        case "cleaning": count += 4; break;
        case "pissing about": count += 25; break;
        default: count += 0; break;
        } 
      }
       return count <= 80 
      ? 'kill me now' 
      :  count > 80 && count < 100 
      ? 'i can handle this'
      : count >= 100
      ? 'party time!!'
      : ''
  }


console.log(boredom({tim: 'change', jim: 'accounts',
randy: 'canteen', sandy: 'change', andy: 'change', katie: 'IS',
laura: 'change', saajid: 'IS', alex: 'trading', john: 'accounts',
mr: 'finance' }))

console.log(boredom({ tim: 'IS', jim: 'finance',
  randy: 'pissing about', sandy: 'cleaning', andy: 'cleaning',
  katie: 'cleaning', laura: 'pissing about', saajid: 'regulation',
  alex: 'regulation', john: 'accounts', mr: 'canteen' }));

console.log(boredom({ tim: 'accounts', jim: 'accounts',
  randy: 'pissing about', sandy: 'finance', andy: 'change',
  katie: 'IS', laura: 'IS', saajid: 'canteen', alex: 'pissing about',
  john: 'retail', mr: 'pissing about' }));