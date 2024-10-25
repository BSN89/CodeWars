// Вам дан список/массив, содержащий только целые числа (положительные и отрицательные). Ваша задача — суммировать только те числа, которые одинаковы и последовательны. Результатом должен быть один список.

// Дополнительный балл, если вы решите это в одну строку. Вы можете предположить, 
// что никогда не бывает пустого списка/массива и всегда будет целое число.

// То же значение: 1 == 1

// 1 != -1

// #Примеры:

// [1,4,4,4,0,4,3,3,1] # should return [1,12,0,4,6,1]

// """So as you can see sum of consecutives 1 is 1 
// sum of 3 consecutives 4 is 12 
// sum of 0... and sum of 2 
// consecutives 3 is 6 ..."""

// [1,1,7,7,3] # should return [2,14,3]
// [-5,-5,7,7,12,0] # should return [-10,14,12,0]

function sumConsecutives(s) {
    let result = [];
    let sum = s[0];

    for (let i = 1; i < s.length; i++) {
        if (s[i] === s[i - 1]) {
            sum += s[i];
        } else {
            result.push(sum);
            sum = s[i];
        }
    }
    result.push(sum); // Добавляем последнюю сумму
    return result;
}

console.log(sumConsecutives([1,4,4,4,0,4,3,3,1]));
console.log(sumConsecutives([1,1,7,7,3]));
console.log(sumConsecutives([-5,-5,7,7,12,0]));