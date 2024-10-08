// Вам дан массив (который будет иметь длину не менее 3, 
//     но может быть очень большим), содержащий целые числа. 
//     Массив либо полностью состоит из нечетных целых чисел, либо 
//     полностью состоит из четных целых чисел, за исключением одного 
//     целого числа N. Напишите метод, который принимает массив в качестве 
//     аргумента и возвращает этот "выброс" N.

// Примеры
// [2, 4, 0, 100, 4, 11, 2602, 36] -->  11 (the only odd number)

// [160, 3, 1719, 19, 11, 13, -21] --> 160 (the only even number)

// function findOutlier(integers){
//     let sum = integers.reduce((acc,el) => acc + el,0)
//     let result = []
//     if(sum % 2 === 0){
//         integers
//         .filter(el => el % 2 === 0 ?  result.push(el) : el)
//       }if(sum % 2 !== 0){
//         integers
//         .filter(el => el % 2 !== 0 ?  result.push(el) : el)
//       }
//     return Number(result.join())
//   }

  function findOutlier(integers){

   let arr = []
   let arr1 = []

   integers.forEach(el => el % 2 !== 0 ? arr.push(el) : arr1.push(el) )

   return arr.length === 1 ? arr[0] : arr1[0]
  }

  console.log(findOutlier([0, 1, 2]));
  console.log(findOutlier([1, 2, 3]));
  console.log(findOutlier([2,6,8,10,3]));