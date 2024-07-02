// Implement a function move_zeros which takes two arguments first an array 
// of numbers arrNum and second a Boolean value isRight (default is true) and returns 
// the array with all zero to right if isRight is true else to left if isRight is false.

// Example:

// arrNum = [12, 0, 10, 0, 8, 12, 7, 6, 0, 4, 10, 12, 0];
// move_zeros(arrNum, true) //=> returns [12, 10, 8, 12, 7, 6, 4, 10, 12, 0, 0, 0, 0]

// arrNum = [12, 0, 10, 0, 8, 12, 7, 6, 0, 4, 10, 12, 0];
// move_zeros(arrNum, false) //=> returns [0, 0, 0, 0, 12, 10, 8, 12, 7, 6, 4, 10, 12]

// arrNum = [12, 0, 10, 0, 8, 12, 7, 6, 0, 4, 10, 12, 0];
// move_zeros(arrNum) //=> returns [12, 10, 8, 12, 7, 6, 4, 10, 12, 0, 0, 0, 0]

// function move_zeros(arrNum, isRight){
//     let zero = []
//     let noneZero = []
// for (let i = 0; i < arrNum.length; i++) {
//     if(arrNum[i] === 0) zero.push(arrNum[i])
//     //console.log(`zero ${i}: `, zero)
//     if(arrNum[i] !== 0) noneZero.push(arrNum[i]) 
//     //console.log(`noneZero ${i}: `, noneZero) 
//   }
//   return isRight ? [...noneZero,...zero] : [...zero, ...noneZero]
// }

function move_zeros(arrNum, isRight = true){
    let zero = []
    let noneZero = []
  arrNum.forEach(el => el === 0 ? zero.push(el) : noneZero.push(el))
  
   return isRight ? [...noneZero,...zero] : [...zero,...noneZero]
  }

  console.log(move_zeros([12, 0, 10, 0, 8, 12, 7, 6, 0, 4, 10, 12, 0], true));
  console.log(move_zeros([12, 0, 10, 0, 8, 12, 7, 6, 0, 4, 10, 12, 0], false));
  console.log(move_zeros([12, 0, 10, 0, 8, 12, 7, 6, 0, 4, 10, 12, 0]));