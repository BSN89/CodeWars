//Write a function that accepts an integer n and a string s as parameters, 
//and returns a string of s repeated exactly n times.




function repeatStr (n, s) {
    return s.repeat(n);
  }
  const result = repeatStr (5, 'Hi')
  console.log(result)