// Пит любит печь торты. У него есть несколько рецептов и ингредиентов. 
// К сожалению, он не силен в 
// математике. Можете ли вы помочь ему узнать, сколько тортов он мог бы испечь,
//  учитывая его рецепты?

// Напишите функцию cakes(), которая берет рецепт (объект) и доступные ингредиенты 
// (тоже объект) и возвращает максимальное количество тортов, которые Пит может 
// испечь (целое число). Для простоты нет единиц измерения для количества 
// (например, 1 фунт муки или 200 г сахара просто 1 или 200). Ингредиенты, 
// которые отсутствуют в объектах, можно считать 0.

// Примеры:

// // must return 2
// cakes({flour: 500, sugar: 200, eggs: 1}, 
//{flour: 1200, sugar: 1200, eggs: 5, milk: 200}); 
// // must return 0
// cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, 
//{sugar: 500, flour: 2000, milk: 2000});


function cakes(recipe, available) {
    let countObj = {}
    for (const key in recipe) {
        if(!available[key] || available[key] < recipe[key]) return countCakes = 0
           if(available[key] >= recipe[key]){
            countObj[key] = Math.floor(available[key] / recipe[key])
       }
    }
    return Math.min(...Object.values(countObj)) 
  }

  console.log(cakes(
    {flour: 500, sugar: 200, eggs: 1}, 
    {flour: 1200, sugar: 1200, eggs: 5, milk: 200}
    ))
  console.log(cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, 
  {sugar: 500, flour: 2000, milk: 2000}))
  //console.log(cakes(recipe, available))