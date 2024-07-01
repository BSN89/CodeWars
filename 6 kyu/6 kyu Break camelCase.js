// Complete the solution so that the function 
// will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

function solution(string) {
 return string.split('').map(el => el === el.toUpperCase() ? ` ${el}` : el).join('')
      
}

console.log(solution("camelCasing"));
console.log(solution("identifier"));
console.log(solution(""));