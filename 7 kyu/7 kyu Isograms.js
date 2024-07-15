// An isogram is a word that has no repeating letters, consecutive 
// or non-consecutive. Implement a function that determines whether 
// a string that contains only letters is an isogram. Assume the 
// empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)


function isIsogram(str){
     
    let resultStr = [...str.toLowerCase()]
    let resultStr2 = []
    resultStr.forEach(el => !resultStr2.includes(el) ? resultStr2.push(el) : el)
    return resultStr2.join('').length == str.length
  }

  console.log(isIsogram("Dermatoglyphics"));
  console.log(isIsogram("isogram"));
  console.log(isIsogram("aba"));
  console.log(isIsogram("moOse"));