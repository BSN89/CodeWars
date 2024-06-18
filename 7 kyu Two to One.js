// Take 2 strings s1 and s2 including only letters from a to z.
//  Return a new sorted string, the longest possible, 
//  containing distinct letters - each taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz


// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"

// function longest(s1, s2) {
//   let arrResult = [...s1,  ...s2].sort()
//   let arr = []
//   arrResult.reduce((acc, el) => {
//       if(!acc.includes(el)){
//         arr.push(el)
//       }
//       return el
//   },[])
//  return arr.join('')
// }
// console.log(longest(a, b));

function solution(str, ending){
    if(str[-1] !== ending[-1]){
      return true
    }
    return false
  }

  //console.log(solution('abc', 'bc'))
  console.log(solution('abc', 'd') )