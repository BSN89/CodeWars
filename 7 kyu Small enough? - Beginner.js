// You will be given an array and a limit value. 
// You must check that all values in the array are below or equal to the limit value. 
// If they are, return true. Else, return false.

// You can assume all values in the array are numbers.

function smallEnough(a, limit){
    for(let i = 0; i < a.length; i++){
       if(limit < a[i]){
           return false
             }
      }
    return true
}

    //or
    //const smallEnough = (a, limit) => a.every(el => el <= limit)

console.log(smallEnough([66, 101], 200));
console.log(smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 107));
console.log(smallEnough([80, 117, 115, 104, 45, 85, 112, 115], 120));