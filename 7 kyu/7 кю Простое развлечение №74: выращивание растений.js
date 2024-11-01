// Задача
// Каждый день растение растет на upSpeed метры. Каждую ночь высота этого 
// растения уменьшается на downSpeedметры из-за отсутствия солнечного тепла. 
// Изначально высота растения составляет 0 метров. Мы сажаем семя в начале дня.
//  Мы хотим знать, когда высота растения достигнет определенного уровня.

// Пример
// Для upSpeed = 100, downSpeed = 10 and desiredHeight = 910, вывод должен быть 10.

function growingPlant(upSpeed, downSpeed, desiredHeight) {
if(desiredHeight < upSpeed) return 1
let count = 0
let sum = 0

 for (let i = 0; sum < desiredHeight; i++) {
    count++
    sum += upSpeed
    if(sum >= desiredHeight){
        return count
    }
    sum -= downSpeed
 }
return count
}
console.log(growingPlant(100,10,910));
console.log(growingPlant(10,9,4));
