// Complete the solution so that it reverses all 
// of the words within the string passed in.

// Words are separated by exactly one space and 
// there are no leading or trailing spaces.

// Example(Input --> Output):

// "The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"

 
// let firstString = "The greatest victory is that which requires no battle"

// function reverseWords(str){
//     return str.split(' ').reverse().join(' ')
//   }

//   console.log(reverseWords(firstString));

var countSheep = function (num){
    let result = ''
    for(let i = 1; i <= num; i++){
        
       result += `${i} sheep...`
      
    }
    return result
  }
    
    console.log(countSheep(4));