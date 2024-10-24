// Джон пригласил несколько друзей. Его список:

// s = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;
// Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";
// Не могли бы вы сделать программу, которая

// делает эту строку заглавной
// дает сортировку в алфавитном порядке по фамилиям.
// Если фамилии одинаковые, отсортируйте их по имени. Фамилия и имя гостя 
// в результате приводятся в скобках, разделенных запятой.

// Таким образом, результат функции meeting(s)будет:

// "(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)
// (TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)"
// Может случиться так, что в двух разных семьях с одинаковой фамилией 
// у двух человек будут одинаковые имена.

function meeting(s) {
    return s.split(';')
    .sort()
     .map(el => el.toUpperCase()
      .split(':').reverse().join(', '))
        .sort()
         .map(el => `(${el})`)
          .join('')
}

//console.log(meeting("Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill"))
//console.log(meeting("Alexis:Wahl;John:Bell;Victoria:Schwarz;Abba:Dorny;Grace:Meta;Ann:Arno;Madison:STAN;Alex:Cornwell;Lewis:Kern;Megan:Stan;Alex:Korn"))
//console.log(meeting("Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill"))





function duckDuckGoose(players, goose) {
  let goos = players.filter((pl,i) => {
      return i === goose ? goos += pl : pl
  })
  return goos
}

console.log(duckDuckGoose([a, b, c, d], 1) )