// Ката Задание
// У меня есть кошка и собака, которых я взяла котенком/щенком.

// Я не помню, когда это было, но я знаю их текущий возраст: catYearsи dogYears.

// Найдите, как долго я владею каждым из своих питомцев, и выведите список [ ownedCat, ownedDog]

// ПРИМЕЧАНИЯ:

// Результаты представляют собой усеченные целые числа «человеческих» лет.
// Кошачьи годы
// 15кошачьи годы для первого года
// +9кошачьи годы для второго года
// +4cat лет за каждый последующий год
// Годы Собаки
// 15собачьи годы для первого года
// +9собачьи годы для второго года
// +5собачьи годы за каждый последующий год



// var ownedCatAndDog = function(catYears, dogYears) {
//     let result = []
//   let oneCatDogYear = 15
//   let twoCatDogYear = 9
//   let lastCatYears = 4
//   let lastDogYears = 5
//   if(catYears > (oneCatDogYear + twoCatDogYear)){
//     result.push(Math.floor(((catYears - oneCatDogYear - twoCatDogYear ) / lastCatYears) + 2)) 
//   }
//   if(dogYears > (oneCatDogYear + twoCatDogYear)){
//     result.push(Math.floor(((dogYears - oneCatDogYear - twoCatDogYear) / lastDogYears) + 2)) 
//   }
//   if(catYears === (oneCatDogYear + twoCatDogYear)){
//     result.push(2) 
//   }
//   if(dogYears === (oneCatDogYear + twoCatDogYear)){
//     result.push(2) 
//   }
//   if(dogYears === oneCatDogYear){
//     result.push(1) 
//   }
//   if(dogYears === oneCatDogYear){
//     result.push(1) 
//   }
//   return result
// }

var ownedCatAndDog = function(catYears, dogYears) {
    const catYearsToHuman = catYears < 15 ? 0 : catYears < 24 ? 1 : Math.floor((catYears - 24) / 4) + 2;
    const dogYearsToHuman = dogYears < 15 ? 0 : dogYears < 24 ? 1 : Math.floor((dogYears - 24) / 5) + 2;
    return [catYearsToHuman, dogYearsToHuman];
}

console.log(ownedCatAndDog(15,15));  // [1,1]
console.log(ownedCatAndDog(24,24));  // [2,2]
console.log(ownedCatAndDog(56,64));  // [10,10]
console.log(ownedCatAndDog(46,28));  // [7,2]
console.log(ownedCatAndDog(69,26));  // [13,2]
console.log(ownedCatAndDog(20,23));  // [1,1]
console.log(ownedCatAndDog(0,0));  // [1,1]
