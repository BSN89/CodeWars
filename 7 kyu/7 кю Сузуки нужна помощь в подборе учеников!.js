// Сузуки нужна помощь в подборе учеников!

// Сегодня Судзуки будет проводить собеседования со своими учениками, 
// чтобы убедиться, что они продвигаются в обучении. Он решил запланировать 
// собеседования на основе длины имени ученика в порядке убывания. Ученики 
// выстроятся в очередь и будут ждать своей очереди.

// Вам будет предоставлена ​​строка имен студентов. Отсортируйте их и верните 
// список имен в порядке убывания.

// Вот пример ввода:

// string = 'Tadashi Takahiro Takao Takashi Takayuki Takehiko Takeo Takeshi 
// Takeshi'
// Вот пример возврата из вашей функции:

//  lst = ['Takehiko',
//         'Takayuki',
//         'Takahiro',
//         'Takeshi',
//         'Takeshi',
//         'Takashi',
//         'Tadashi',
//         'Takeo',
//         'Takao']

function lineupStudents(string) {
    const names = string.split(' ')
   
    names.sort((a, b) => {
        if (a.length === b.length) {
            return b.localeCompare(a)
        }
        return b.length - a.length
    })
    return names
}

  //console.log(lineupStudents("xxa xxb xxc xxd xa xb xc xd"))
  console.log(lineupStudents('Tadashi Takahiro Takao Takashi Takayuki Takehiko Takeo Takeshi Takeshi'))