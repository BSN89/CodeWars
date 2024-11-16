// напишите мне функцию stringy, которая принимает a sizeи возвращает a 
// stringчередующихся 1s и 0s.

// строка должна начинаться с 1.

// строка с size6 должна вернуть: '101010'.

// с size4 должно вернуть: '1010'.

// с size12 должно вернуться: '101010101010'.

// Размер всегда будет положительным и будет использовать только целые числа.

function stringy(size) {
      let result = ''

for (let i = 0; i < size; i++) {
    i % 2 ? result+='0' : result+='1'
}

      return result
  }

  console.log(stringy(6))
  console.log(stringy(4))
  console.log(stringy(12))