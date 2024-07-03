//sorting


const students = ["Bob", "Alex", "Liza", "Ivan", "maksim"];

console.log(students.sort());
console.log([...students].sort());
console.log(students);

console.log(students.slice().sort());
console.log(students);

const numbers = [234, 645, 100, 2, 1000, -34, -10, -24];
// console.log(numbers.sort());

const compareFunction = (a, b) => {
  if (a > b) {
    return 123;
  } else {
    return -1;
  }
};

const newCompareFunction = (a, b) => a - b;

console.log(numbers);
console.log(numbers.sort(compareFunction));

const student = [
  {
    name: "Bob",
    age: 22,
  },
  {
    name: "Alex",
    age: 22,
  },
  {
    name: "liza",
    age: 20,
  },
  {
    name: "Ivan",
    age: 24,
  },
];

console.log(
student.sort(
    (a, b) => a.name.toLocaleLowerCase() > b.name.toLocaleLowerCase()
  )
);

const sortedStudents = student.sort((a, b) => a.age - b.age);

console.log(sortedStudents);

const numbers1 = [6, 78, 34, 7, 1, 55, 345, 345, 6, 7, 1367, 323423];
// const numbers = [1, 6, 6, 7, 7, 34, 55, 78, 345, 345, 1367, 323423].reverse();
console.log(numbers);
let count = 0;

for (let j = 0; j < numbers.length - 1; j++) {
  count++;
  let isSorted = true;
  for (let i = 0; i < numbers.length - 1 - j; i++) {
    count++;
    if (numbers[i] > numbers[i + 1]) {
      isSorted = false;
      let temp = numbers[i];
      numbers[i] = numbers[i + 1];
      numbers[i + 1] = temp;
    }
  }
  if (isSorted) break;
}
console.log(numbers);
console.log(count);