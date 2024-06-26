// Pair of gloves
// Winter is coming, you must prepare your ski holidays. 
// The objective of this kata is to determine the number of pair of 
// gloves you can constitute from the gloves you have in your drawer.

// Given an array describing the color of each glove, return the 
// number of pairs you can constitute, assuming that only gloves of the same color can form pairs.

// Examples:
// input = ["red", "green", "red", "blue", "blue"]
// result = 2 (1 red pair + 1 blue pair)

// input = ["red", "red", "red", "red", "red", "red"]
// result = 3 (3 red pairs)

function numberOfPairs(gloves){
    let total = {}
    let count = 0
    gloves.forEach(el => {
        if(total[el]){
            total[el]++
        }if(total[el] % 2 === 0){
            count++
        }else{
            total[el] = 1
        }
    });
    return count
  }
  console.log(numberOfPairs(["red", "green", "red", "blue", "blue"]));
  console.log(numberOfPairs(["red", "red", "red", "red", "red", "red"]));
  console.log(numberOfPairs(['gray','black','purple','purple','gray','black']));