// Character recognition software is widely used to digitise printed texts. 
// Thus the texts can be edited, searched and stored on a computer.

// When documents (especially pretty old ones written with a typewriter), 
// are digitised character recognition softwares often make mistakes.

// Your task is correct the errors in the digitised text. You only have to 
// handle the following mistakes:

// S is misinterpreted as 5
// O is misinterpreted as 0
// I is misinterpreted as 1
// The test cases contain numbers only by mistake.

function correct(string){
    let newString = ''
	for (let i = 0; i < string.length; i++) {
        if (string.charAt(i) === '0') newString += "O"
        else if (string.charAt(i) === '1') newString += "I"
        else if (string.charAt(i) === '5') newString += "S"
        else{
            newString += string.charAt(i)
        }
    }
    return newString
}

console.log(correct("L0ND0N"))
console.log(correct("DUBL1N"))
console.log(correct("51NGAP0RE"))
console.log(correct("PAR15"))