function maskify(cc) {

    if (cc.length < 5) return cc

    let result = cc.slice(-4)

    let arr = cc.split("")
    let num = ''
    
    for (let i = 0; i < arr.length - 4; i++) {
        num += '#'
    }
   

    return [num,result].join('')
}

console.log(maskify('4556364607935616'))
console.log(maskify('5616'))
console.log(maskify('85616'))