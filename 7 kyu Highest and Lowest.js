// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Examples
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Notes
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.


function highAndLow(numbers){
    let strToArr = numbers.split(' ').map(Number)
   
    let resultArr = []
    let maxNum = strToArr.reduce((acc, el) =>  acc > el ? acc : el )
    let minNum = strToArr.reduce((acc, el) =>  acc < el ? acc : el )
    resultArr.push(maxNum)
    resultArr.push(minNum)
    return resultArr.join(' ') 
  }

  
  //or

  function highAndLow(numbers){
    let strToArr = numbers.split(' ').map(Number);
    let max = Math.max(...strToArr);
    let min = Math.min(...strToArr);
    return [max, min].join(' ');
}

//or

function highAndLow(numbers){
    let strToArr = numbers.split(' ').map(Number);
    return `${Math.max(...strToArr)} ${Math.min(...strToArr)}}`
}

const highAndLow = numbers => `${Math.max(...numbers.split(' ').map(Number))} ${Math.min(...numbers.split(' ').map(Number))}`


console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4")); 
