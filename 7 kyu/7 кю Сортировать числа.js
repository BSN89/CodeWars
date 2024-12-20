// Завершите решение так, чтобы оно сортировало переданный массив чисел. Если функция передает пустой массив или значение null/nil, то она должна вернуть пустой массив.

// Например:

// solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
// solution(null); // should return []

function solution(nums){
    if(!nums) return []
    return nums.sort((a,b) => a - b)
  }