// Напишите функцию, которая удваивает каждое второе целое число в списке, 
// начиная слева.

// Пример:

// Для входного массива/списка:

// [1,2,3,4]
// функция должна возвращать:

// [1,4,3,8]


function doubleEveryOther(a) {
    let res = []
    for (let i = 0; i < a.length; i++) {
        if(i % 2 !== 0){
            res.push(a[i] * 2) 
        }else {
            res.push(a[i])
        }
    }
    return res
  }

  console.log(doubleEveryOther([1,2,3,4]));
  console.log(doubleEveryOther([1,19,6,2,12,-3]));