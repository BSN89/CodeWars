// Задача
// Дано положительное целое число n, вычислите следующую сумму:

// n + n/2 + n/4 + n/8 + ...
// Все элементы суммы являются результатами целочисленного деления.

// Пример
// 25  =>  25 + 12 + 6 + 3 + 1 = 47

function halvingSum(n) {
    let res = 0
    const func = (par) => Math.floor(par / 2)
     for (let i = n; i >= 1; i = func(i)) {
        res += i
     }

    return res
}

console.log(halvingSum(25))
console.log(halvingSum(127))