// Drill 1
function countSheep(num) {
  for (let i = 0; i < num; i++) {
    console.log(`${i}: Another sheep jumps over the fence`);
  }
  console.log('All sheep jumped over the fence');
}
// countSheep(3);

// Drill 2
function powerCalculator(base, exponent) {
  if (exponent < 0) {
    return 'exponent should be positive';
  }
  if (exponent === 0) {
    return 1;
  }
  let n = 1;
  for (let i = 0; i < exponent; i++) {
    n = n * base;
  }
  return n;
}
// console.log(powerCalculator(2, 7));

// Drill 3
function reverseString(string) {
  if (string.length === 0) {
    return '';
  }

  let newString = '';
  for (let i = 1; i <= string.length; i++) {
    newString += string[string.length - i];
  }
  return newString;
}
// console.log(reverseString('James'));

// Drill 4
function triangle(num) {
  if (num === 1) {
    return 1;
  }

  let temp = num;
  for (let i = 1; i < temp; i++) {
    num += temp - i;
  }
  return num;
}
// console.log(triangle(9));

// Drill 5
function stringSplitter(string, separator) {

}
console.log(stringSplitter('02/20/2020', '/'));