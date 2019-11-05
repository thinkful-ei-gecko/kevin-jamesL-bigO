// Drill 1
function countSheep(num) {
  for (let i = 0; i < num; i++) {
    console.log(`${i}: Another sheep jumps over the fence`);
  }
  console.log('All sheep jumped over the fence');
}
// countSheep(3);
// O(N)

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
// O(N)

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
// O(N)

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
// O(N)

// Drill 5
function stringSplitter(string, splitter) {
  let arr = [];
  let tempStr = '';
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== splitter) {
      tempStr += string[i];
    } else if (string[i] === splitter) {
      arr.push(tempStr);
      tempStr = '';
    }
    if (i === string.length - 1) {
      arr.push(tempStr);
      tempStr = '';
    }
  }
  return arr;
}
// console.log(stringSplitter('02/20/2020', '/'));
// O(N)

//Drill 6
function fibby(num) {
  let result = [0, 1];
  for (let i = 2; i <= num; i++) {
    result.push(result[i - 1] + result[i - 2]);
  }
  return result[num];
}
// console.log(fibby(7))
// O(N)

//Drill 7
function factorial(num) {
  if (num === 1) {
    return 1;
  }

  let temp = num;
  for (let i = 1; i < temp; i++) {
    num *= temp - i;
  }
  return num;
}
// console.log(factorial(5))
// O(N)
