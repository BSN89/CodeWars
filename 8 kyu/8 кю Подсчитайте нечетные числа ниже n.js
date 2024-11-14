// Дано число n, верните количество положительных нечетных чисел ниже n. ЛЕГКО!

// Примеры (Вход -> Выход)
// 7  -> 3 (because odd numbers below 7 are [1, 3, 5])
// 15 -> 7 (because odd numbers below 15 are [1, 3, 5, 7, 9, 11, 13])
// Ожидайте больших вложений!

function oddCount(n){
    // let arr = []
    // for (let i = 1; i < n; i += 2) {
    //     arr.push(i);
    // }
    return Math.floor(n / 2)
  }

  console.log(oddCount(15))
  console.log(oddCount(15023))
 