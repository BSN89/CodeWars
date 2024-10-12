// Даны два массива строк a1и a2возвращен отсортированный rв лексикографическом
//  порядке массив строк, a1являющихся подстроками строк a2.

// Пример 1:
// a1 = ["arp", "live", "strong"]

// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

// возвращается["arp", "live", "strong"]

// Пример 2:
// a1 = ["tarp", "mice", "bull"]

// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

// возвращается[]

function inArray(array1,array2){
    let result = []
    for (let i = 0; i < array1.length; i++) {
        array2
        .filter(el =>  el.includes(array1[i]) && !result.includes(array1[i]) 
        ? result.push(array1[i]) 
        : el 
        );
    }
    return result.sort()
  }

  console.log(inArray(["xyz", "live", "strong"], ["lively", "alive", "harp", "sharp", "armstrong"]));
  console.log(inArray(["live", "strong", "arp"], ["lively", "alive", "harp", "sharp", "armstrong"]));
  console.log(inArray(["tarp", "mice", "bull"], ["lively", "alive", "harp", "sharp", "armstrong"]));