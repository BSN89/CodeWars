// В этом ката вам нужно просто определить, является ли данный год 
// високосным или нет. Если вы не знаете правил, вот они:

// Годы, делящиеся на 4, являются високосными.
// но годы, делящиеся на 100, не являются високосными,
// но годы, делящиеся на 400, являются високосными.
// Проверенные годы находятся в диапазоне 1600 ≤ year ≤ 4000.

function isLeapYear(year) {
    if(year % 400 === 0) return true
    else if(year % 100 === 0) return false
    else if(year % 4 === 0) return true
     return false
  }

  console.log(isLeapYear(2020));
  console.log(isLeapYear(2000));
  console.log(isLeapYear(2015));
  console.log(isLeapYear(2100));