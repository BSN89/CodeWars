// Ваша задача — создать машину по выдаче разменных монет.

// Автомат принимает одну монету или купюру и возвращает сдачу монетами 
// по 20 и 10 пенсов. Автомат постарается избежать возврата точного ввода, 
// но в противном случае вернет как можно меньше монет. Например, монета 
// в 50 пенсов должна стать двумя монетами по 20 пенсов и одной монетой 
// по 10 пенсов, а монета в 20 пенсов должна стать двумя монетами по 10 пенсов.

// Автомат может обрабатывать исключительно следующие монеты и купюры:
//  £5, £2, £1, 50p, 20p. Любые монеты и купюры, которые не принимаются автоматом,
//   будут возвращены необработанными. Например, если вы поместите в автомат 
//   купюру в £20, она будет возвращена вам и не будет разобрана на сдачу. 
//   (Обратите внимание, что £1 стоит 100p.)

// Этот автомат для размена запрограммирован на прием и распределение строк,
//  а не чисел. Входными данными будет строка, содержащая монету или купюру 
//  для обработки, а сдача должна быть возвращена как одна строка с названиями 
//  монет, разделенными одинарными пробелами без запятых. 
//  Значения строки должны быть в порядке убывания. Например, 
//  входные данные "50p"должны выдавать точную строку "20p 20p 10p".

function changeMe(moneyIn){
  switch (moneyIn) {
      case '£5': return  '20p '.repeat(25).trim()
      case '£2': return '20p '.repeat(10).trim()
      case '£1': return '20p '.repeat(5).trim()
      case '50p': return `20p 20p 10p`  
      case '20p': return `10p 10p`
        default: return moneyIn     
  }
}

console.log(changeMe("£1"));
console.log(changeMe("Money"));
console.log(changeMe('£2'));
console.log(changeMe('20p'));
console.log(changeMe("£5"));