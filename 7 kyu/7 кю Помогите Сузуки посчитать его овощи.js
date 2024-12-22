// Помогите Сузуки посчитать его овощи....

// Судзуки — главный монах своего монастыря, поэтому он должен следить за тем, 
// чтобы кухня работала на полную мощность, чтобы кормить своих учеников 
// и жителей деревни, которые приходят на обед каждый день.

// На этой неделе возникла проблема с поставками, и все овощи перемешались. 
// На его кухне есть два важных аспекта приготовления пищи: она должна быть 
// сделана в гармонии, и ничего не должно пропадать зря. Поскольку монахи — 
// это люди, ведущие учет, первым делом нужно отсортировать перемешанные 
// овощи, а затем пересчитать их, чтобы убедиться, что их достаточно, чтобы 
// накормить всех студентов и жителей деревни.

// Вам будет предоставлен набор со следующими овощами:

// "cabbage", "carrot", "celery", "cucumber", "mushroom", "onion", "pepper",
//  "potato", "tofu", "turnip"
// Верните список объектов (кортеж в Python, массив в JavaScript, таблица 
//     в COBOL) с количеством каждого овоща в порядке убывания. Если есть 
//     какие-либо неовощи, отбросьте их. Если количество двух овощей одинаково, 
//     отсортируйте в обратном алфавитном порядке (Z->A).\

function countVegetables(string){
    let countObj = {
        "cabbage": 0, "carrot": 0, "celery": 0, 
        "cucumber": 0, "mushroom": 0, "onion": 0, 
        "pepper": 0, "potato": 0, "tofu": 0, "turnip": 0}

   let arrToStr = string.split(' ').filter(el => countObj.hasOwnProperty(el))

      for (const el of arrToStr) {
        countObj[el]++;
       }
       let resultArray = Object.entries(countObj)
       resultArray.sort((a, b) => {
        if (b[1] !== a[1]) {
            return b[1] - a[1]
        }
        return b[0].localeCompare(a[0])
    });

    return resultArray.map(el => [el[1], el[0]]).filter(el => el[0])
  }

  console.log(countVegetables(`potato tofu cucumber cabbage turnip pepper onion carrot celery mushroom potato tofu cucumber cabbage`))
  console.log(countVegetables(`mushroom chopsticks chopsticks turnip mushroom carrot mushroom cabbage mushroom carrot tofu pepper cabbage potato cucumber 
  mushroom mushroom mushroom potato turnip chopsticks cabbage celery celery turnip pepper chopsticks potato potato onion cabbage cucumber 
  onion pepper onion cabbage potato tofu carrot cabbage cabbage turnip mushroom cabbage cabbage cucumber cabbage chopsticks turnip pepper 
  onion pepper onion mushroom turnip carrot carrot tofu onion tofu chopsticks chopsticks chopsticks mushroom cucumber chopsticks carrot
  potato cabbage cabbage carrot mushroom chopsticks mushroom celery turnip onion carrot turnip cucumber carrot potato mushroom turnip
  mushroom cabbage tofu turnip turnip turnip mushroom tofu potato pepper turnip potato turnip celery carrot turnip`))
  console.log(countVegetables())