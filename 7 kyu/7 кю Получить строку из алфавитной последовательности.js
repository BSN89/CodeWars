// Задача
// Реализуйте функцию, которая принимает число Nи возвращает Nстроку 
// 'th последовательности ниже. Если аргумент больше, чем количество 
// строк в последовательности, то начните с начала снова, например, 
// row 27совпадает с row 1.

// Последовательность
// 1:  ABCDEFGHIJKLMNOPQRSTUVWXYZ
// 2:  BBCDEFGHIJKLMNOPQRSTUVWXYZ
// 3:  CCCDEFGHIJKLMNOPQRSTUVWXYZ
// 4:  DDDDEFGHIJKLMNOPQRSTUVWXYZ

function getRow(n) {
    const str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const length = str.length;

    // Вычисляем индекс буквы, учитывая зацикливание
    const index = (n - 1) % length;
    const char = str[index];

    let newStr = '';
    let strSlice = str.slice(index + 1);

    for (let i = 1; i <= n; i++) {
        newStr += char;
    }

    return newStr + strSlice;
}

  console.log(getRow(1));
  console.log(getRow(15));
  console.log(getRow(26));