 // 1. Simple object
//  let man = {
//     name: 'John',
//     age: 28
// };

// let manFullCopy = {...man} //  your code
// manFullCopy.age = 30
// console.log(man);
// console.log(manFullCopy);


// 2. Array of primitives
// let numbers = [1, 2, 3];

// let numbersFullCopy  = [...numbers] //  your code
// numbersFullCopy.push(4)
// console.log(numbers);
// console.log(numbersFullCopy);


// 3. Object inside an object
// let man1 = {
//     name: 'John',
//     age: 28,
//     mother: {
//         name: 'Kate',
//         age: 50
//     }
// };

// let man1FullCopy = {...man1, mother: {...man1.mother}} // your code
// man1FullCopy.mother.age = 40
// console.log(man1);
// console.log(man1FullCopy);

// // 4. Array of primitives inside an object
// let man2 = {
//     name: 'John',
//     age: 28,
//     friends: ["Peter", "Steven", "William"]
// };

// let man2FullCopy  = {...man2, friends: [...man2.friends]} // your code
// man2FullCopy.friends.push('Tom')
// console.log('man2 :',  man2);
// console.log(man2FullCopy)

// 5 Array of objects
// let people = [
//     {name: "Peter", age: 30},
//     {name: "Steven", age: 32},
//     {name: "William", age: 28}

// ];


// let peopleFullCopy = [...people.map(el => el)] // your code
// peopleFullCopy.push({name: 'Tom', age: 30})
// console.log(people);
// console.log(peopleFullCopy)

// 6 Array of objects inside object
// let man3 = {
//     name: 'John',
//     age: 28,
//     friends: [
//         {name: "Peter", age: 30},
//         {name: "Steven", age: 32},
//         {name: "William", age: 28}
//     ]
// };

// let man3FullCopy = {...man3, friends: [...man3.friends.map(el => el)]} //  your code

// man3FullCopy.friends.push({name: 'Tom', age: 30})        // меняю копию для проверки имутабельности

// console.log(man3);
// console.log(man3FullCopy)


// 7 Object inside an object, inside an object
// let man4 = {
//     name: 'John',
//     age: 28,
//     mother: {
//         name: "Kate",
//         age: 50,
//         work: {
//             position: "doctor",
//             experience: 15
//         }
//     }
// };

// let man4FullCopy = {...man4, mother: {...man4.mother, work: {...man4.mother.work }}} //  your code 

// man4FullCopy.mother.work.experience = 20        // меняю копию для проверки имутабельности

// console.log(man4);
// console.log(man4FullCopy)

// 8 Array of objects inside object -> object
// let man5 = {
//     name: 'John',
//     age: 28,
//     mother: {
//         name: "Kate",
//         age: 50,
//         work: {
//             position: "doctor",
//             experience: 15
//         },
//         parents: [
//             {name: "Kevin", age: 80},
//             {name: "Jennifer", age: 78},
//         ]
//     }
// };

// let man5FullCopy = 
// {...man5, 
//     mother: {...man5.mother, 
//         work: {...man5.mother.work}, 
//         parents: [...man5.mother.parents.map(el => el)]  
//             }
// } //  your code

// man5FullCopy.mother.parents[2] = {name: "William", age: 28}       // меняю копию для проверки имутабельности

// man5FullCopy.mother.work.experience =25
// console.log(man5);
// console.log(man5FullCopy)


// 9 Object inside an object -> array -> object ->  object
// let man6 = {
//     name: 'John',
//     age: 28,
//     mother: {
//         name: "Kate",
//         age: 50,
//         work: {
//             position: "doctor",
//             experience: 15
//         },
//         parents: [
//             {
//                 name: "Kevin",
//                 age: 80,
//                 favoriteDish: {
//                     title: "borscht"
//                 }
//             },
//             {
//                 name: "Jennifer",
//                 age: 78,
//                 favoriteDish: {
//                     title: "sushi"
//                 }
//             },
//         ]
//     }
// };

// let man6FullCopy = {...man6, 
// mother: {...man6.mother, 
//     work: {...man6.mother.work}, 
//     parents: [...man6.mother.parents.map((el) =>  
//         ({...el, favoriteDish: {...el.favoriteDish}}))]}}  //  your code

// man6FullCopy.mother.parents[0].favoriteDish = {title: "borscht", street: 'avenue'} // меняю копию для проверки имутабельности

// console.log(man6.mother.parents);
// console.log(man6FullCopy.mother.parents)


//10 Array of objects inside an object -> object -> array -> object ->  object
let man7 = {
    name: 'John',
    age: 28,
    mother: {
        name: "Kate",
        age: 50,
        work: {
            position: "doctor",
            experience: 15
        },
        parents: [
            {
                name: "Kevin",
                age: 80,
                favoriteDish: {
                    title: "borscht",
                    ingredients: [
                        {title: "beet", amount: 3},
                        {title: "potatoes", amount: 5},
                        {title: "carrot", amount: 1},
                    ]
                }
            },
            {
                name: "Jennifer",
                age: 78,
                favoriteDish: {
                    title: "sushi",
                    ingredients: [
                        {title: "fish", amount: 1},
                        {title: "rise", amount: 0.5}
                    ]
                }
            },
        ]
    }
};

let man7FullCopy = {...man7, 
    mother: {...man7.mother, 
        work: {...man7.mother.work},
        parents: [...man7.mother.parents.map(el => 
            ({...el, favoriteDish: {...el.favoriteDish, 
                ingredients: [...el.favoriteDish.ingredients.map(el => ({...el}))]}}))]}}  //  your code

man7FullCopy.mother.parents[1].favoriteDish.ingredients[1].amount = 55 // меняю копию для проверки имутабельности

console.log(man7.mother.parents[1].favoriteDish, 'man7');
console.log(man7FullCopy.mother.parents[1].favoriteDish)
