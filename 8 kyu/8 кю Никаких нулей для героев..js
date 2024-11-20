// Числа, заканчивающиеся на нули, скучны.

// В вашем мире они могут быть забавными, но не здесь.

// Избавьтесь от них. Оставьте только конечные.

// 1450 -> 145
// 960000 -> 96
// 1050 -> 105
// -1050 -> -105

function noBoringZeros(n) {
    let toStr = String(n)
    let resultStr = ''

    const func = (str) => {
      return  resultStr += str.slice(0, -1) 
    }
    
    return toStr[toStr.length -1] === '0' ? func(resultStr) : toStr
  }

  console.log(noBoringZeros(1450))
  console.log(noBoringZeros(960000))
  console.log(noBoringZeros(1050))
  console.log(noBoringZeros(-1050))
  console.log(noBoringZeros(-105))