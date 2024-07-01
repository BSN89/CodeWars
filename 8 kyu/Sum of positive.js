function positiveSum(arr) {
  let filterArr = arr.filter((el) => el > 0);
  let reduceArr = filterArr.reduce((acc, el) => acc + el, 0);
  return reduceArr;
}
