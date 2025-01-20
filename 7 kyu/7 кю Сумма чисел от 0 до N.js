// Описание:

// Мы хотим сгенерировать функцию, которая вычисляет ряд, начиная с 0 и 
// заканчивая заданным числом.
// Пример:
// Вход:
// > 6
// Выход:
// 0+1+2+3+4+5+6 = 21
// Вход:
// > -15
// Выход:
// -15<0
// Вход:
// > 0
// Выход:
// 0=0

const SequenceSum = (n) => {
  let res = '0'
  let sum = 0
  if(n < 0) return n+'<0'
  if(n === 0) return n+'=0'
  for (let i = 1; i <= n; i++) {
       sum += i
       res += `+${i}`
  }
  return  `${res} = ${sum}`
}

console.log(SequenceSum(6))
console.log(SequenceSum(0))
console.log(SequenceSum(-15))