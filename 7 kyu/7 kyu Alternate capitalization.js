// Given a string, capitalize the letters that occupy even 
// indexes and odd indexes separately, and return as shown below. 
// Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. 
// See test cases for more examples.

// The input will be a lowercase string with no spaces.

// Good luck!

// If you like this Kata, please try:

function capitalize(s){
    let startStr = [...s].map((el,i) => i % 2 === 0  ? el.toUpperCase() : el).join('')
    let lastStr = [...s].map((el,i) => i % 2 !== 0  ? el.toUpperCase() : el).join('')
    return [startStr,lastStr]
  };

  console.log(capitalize("abcdef")),      //['AbCdEf', 'aBcDeF']
  console.log(capitalize("codewars")),    //['CoDeWaRs', 'cOdEwArS']
  console.log(capitalize("abracadabra")), //['AbRaCaDaBrA', 'aBrAcAdAbRa']
  console.log(capitalize("codewarriors")) //['CoDeWaRrIoRs', 'cOdEwArRiOrS']