// Input:
// The function will be given two parameters. Each parameter 
// will be a string of multiple integers separated by a single space. Each string will contain the 
// count of each race on the side of good and evil.

// The first parameter will contain the count of each race on the side of good in the following order:

// Hobbits, Men, Elves, Dwarves, Eagles, Wizards.
// The second parameter will contain the count of each race on the side of evil in the following order:

// Orcs, Men, Wargs, Goblins, Uruk Hai, Trolls, Wizards.
// All values are non-negative integers. The resulting sum of the worth 
// for each side will not exceed the limit of a 32-bit integer.

// Output:
// Return "Battle Result: Good triumphs over Evil" if good wins, "Battle 
// Result: Evil eradicates all trace of Good" if evil wins, or "Battle 
// Result: No victor on this battle field" if it ends in a tie.

function goodVsEvil(good, evil){

    let goodWorth = [1, 2, 3, 3, 4, 10]
    let evilWorth = [1, 2, 2, 2, 3, 5, 10]

let goodResult = good.split(' ').reduce((acc,el,i) => acc + +el * goodWorth[i],0)
let evilResult = evil.split(' ').reduce((acc,el,i) => acc + +el * evilWorth[i],0)
if(goodResult > evilResult) return "Battle Result: Good triumphs over Evil"
if(goodResult < evilResult) return "Battle Result: Evil eradicates all trace of Good"
     return "Battle Result: No victor on this battle field"
 }
    console.log(goodVsEvil('1 1 1 1 1 1', '1 1 1 1 1 1 1'));
    console.log(goodVsEvil('1 0 0 0 0 0', '1 0 0 0 0 0 0'));
    console.log(goodVsEvil('0 0 0 0 0 10', '0 1 1 1 1 0 0'));