function countSheeps(arrayOfSheep) {
  return arrayOfSheep.reduce((acc, el) => (el === true ? acc + el : acc), 0);
}
