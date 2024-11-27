// Маркетинговая команда тратит слишком много времени на набор хэштегов.
// Давайте поможем им с нашим собственным генератором хэштегов!

// Вот в чем дело:

// Он должен начинаться с хэштега ( #).
// Первая буква всех слов должна быть заглавной.
// Если конечный результат длиннее 140 символов, он должен вернуть false.
// Если входные данные или результат являются пустой строкой, 
// необходимо вернуть false.

function generateHashtag (str) {
 if(str.length < 0 || str.trim().length === 0  ) return false
  let resultString = '#'
  let filteredArray = str.split(' ').filter(el => el )
  filteredArray.forEach(el => resultString += (el[0].toUpperCase() + el.slice(1)))
    return resultString.length <= 140 ? resultString : false
}

let countString = ''
for (let i = 0; i < 14; i++) {
    countString += 'CodeWarsTop' 
}

console.log(generateHashtag("Do We have A Hashtag"))
console.log(generateHashtag(countString))
console.log(generateHashtag("Codewars is nice"))
console.log(generateHashtag('Code   Fuck'))