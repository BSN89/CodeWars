var list1 = [
    { firstName: 'Harry', lastName: 'K.', country: 'Brazil', continent: 'Americas', age: 22, language: 'JavaScript', githubAdmin: 'yes' },
    { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 49, language: 'Ruby', githubAdmin: 'no' },
    { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 34, language: 'JavaScript', githubAdmin: 'yes' },
    { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'JavaScript', githubAdmin: 'no' }
  ];
//   напишите функцию, которая при выполнении findAdmin(list1, 'JavaScript')возвращает 
//   только разработчиков JavaScript, являющихся администраторами GitHub:
  
//   [
//     { firstName: 'Harry', lastName: 'K.', country: 'Brazil', continent: 'Americas', age: 22, language: 'JavaScript', githubAdmin: 'yes' },
//     { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 34, language: 'JavaScript', githubAdmin: 'yes' }
//   ]

function findAdmin(list, lang) {
    return list.filter(el => el.language === lang && el.githubAdmin === 'yes')
  }

  console.log(findAdmin(list1, "JavaScript"));