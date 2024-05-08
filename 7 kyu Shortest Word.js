// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.


function findShort(s){
    let arr = s.split(' ')
    let result = arr[0].length
    for(let el of arr){
      if(el.length < result){
        result = el.length
      }
    }
    return result
  }