//#1 DOG BREED
//search algorithm with array of 15 num that rep dog breed
//iterate through array to match your num
//BigO = Linear O(n)

//#2 Even or Odd
function isEven(value) {
  if (value % 2 == 0) {
      return true;
  }
  else
      return false;
  }
//BigO = constant O(1) --> only one operation on any input

//#3 Are you here?
function areYouHere(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
      const el1 = arr1[i];
      for (let j = 0; j < arr2.length; j++) {
          const el2 = arr2[j];
          if (el1 === el2) return true;
      }
  }
  return false;
}
//nested array... both iterations rely on arr.length
//BigO = Poly O(n^2)

//#4 Doubler
function doubleArrayValues(array) {
  for (let i = 0; i < array.length; i++) {
      array[i] *= 2;
  }
  return array;
}
//iterate through array, double each array item, grows linearly as array grows
//BigO = O(n)

//#5 Naive Search
function naiveSearch(array, item) {
  for (let i = 0; i < array.length; i++) {
      if (array[i] === item) {
          return i;
      }
  }
}
//basic search algo --> linear growth as array grows
//BigO = O(n)

//#6 Creating Pairs
function createPairs(arr) {
  for (let i = 0; i < arr.length; i++) {
      for(let j = i + 1; j < arr.length; j++) {
          console.log(arr[i] + ", " +  arr[j] );
      }
  }
}
//nested array dependent on arr.length
//BigO = O(n^2)

//#7 Compute the sequence
function compute(num) {
  let result = [];
  for (let i = 1; i <= num; i++) {

      if (i === 1) {
          result.push(0);
      }
      else if (i == 2) {
          result.push(1);
      }
      else {
          result.push(result[i - 2] + result[i - 3]);
      }
  }
  return result;
}
//Fibonacci seq
//BigO = O(n) --> dependent on num --> runtime increases linearly as num increases

//#8 Efficient Search
function efficientSearch(array, item) {
  let minIndex = 0;
  let maxIndex = array.length - 1;
  let currentIndex;
  let currentElement;

  while (minIndex <= maxIndex) {
      currentIndex = Math.floor((minIndex + maxIndex) / 2);
      currentElement = array[currentIndex];

      if (currentElement < item) {
          minIndex = currentIndex + 1;
      }
      else if (currentElement > item) {
          maxIndex = currentIndex - 1;
      }
      else {
          return currentIndex;
      }
  }
  return -1;
}
//sorted array search, input reduces by half despite significant growth of input
//if input doubles, runtime only increases by one more step
//BigO = O(log(n))

//#9 Random Element
function findRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
//find random elem in an array --> only one operation per array input
//BigO = O(1)

//#10 What Am I?
function isWhat(n) {
  if (n < 2 || n % 1 != 0) {
      return false;
  }
  for (let i = 2; i < n; ++i) {
      if (n % i == 0) return false;
  }
  return true;
}
//checks if n is prime number --> each prime n needs to be checked to see if divisible by all num
//from 2 - (n-1) --> as prime input is larger the runtime increases linearly
//BigO = O(n)

//#11 Hanoi


