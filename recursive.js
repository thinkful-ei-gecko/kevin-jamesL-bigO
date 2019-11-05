// refer to: https://gist.github.com/tparveen/ff44085ae042b90068da5432b34f023c

// Drill 1
function countSheep(num) {
  if (num === 0) {
    console.log('All sheep jumped over the fence');
    return;
  }
  console.log(`${num}: Another sheep jumps over the fence`);
  countSheep(num - 1);
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
  return base * powerCalculator(base, exponent - 1);
}
// console.log(powerCalculator(2, 7));
// O(N)

// Drill 3
function reverseString(string) {
  if (string.length === 0) {
    return '';
  }
  let lastChar = string.length - 1;
  return string.charAt(lastChar) + reverseString(string.substring(lastChar, 0));
}
// console.log(reverseString('Kevin'));
// O(N)

// Drill 4
function triangle(num) {
  if (num === 1) {
    return 1;
  }
  return num + triangle(num - 1);
}
// console.log(triangle(9))
// O(N)

//Drill 5
function stringSplitter(string, splitter) {
  let splitIndex = string.indexOf(splitter);

  if (splitIndex === -1) return [string];

  return [string.slice(0, splitIndex)].concat(
    stringSplitter(string.slice(splitIndex + splitter.length), splitter)
  );
}
// stringSplitter('02/20/2020', '/');
// O(N)

// Drill 6
function fib(n) {
  if (n === 1 || n === 2) {
    return 1;
  }
  return fib(n - 1) + fib(n - 2);
}
// console.log(fib(7));
// O(2^N)

//Drill 7 (very similar to triangle function)
function factorial(num) {
  if (num === 1) {
    return 1;
  }
  return num * factorial(num - 1);
}
// factorial(5);
// O(N)

// Drill 8
function solveMaze(maze, x, y, solution) {
  const left = maze[y][x - 1];
  const right = maze[y][x + 1];
  const up = maze[y - 1] ? maze[y - 1][x] : undefined;
  const down = maze[y + 1] ? maze[y + 1][x] : undefined;

  if (left === 'e' || right === 'e' || up === 'e' || down === 'e') {
    console.log(solution);
  }

  if (left === ' ') {
    maze[y][x] = '*';
    solution += 'L';
    return solveMaze(maze, x - 1, y, solution);
  }
  if (right === ' ') {
    maze[y][x] = '*';
    solution += 'R';
    return solveMaze(maze, x + 1, y, solution);
  }
  if (up === ' ') {
    maze[y][x] = '*';
    solution += 'U';
    return solveMaze(maze, x, y - 1, solution);
  }
  if (down === ' ') {
    maze[y][x] = '*';
    solution += 'D';
    return solveMaze(maze, x, y + 1, solution);
  }
}

let myMaze = [
  [' ', ' ', ' ', '*', ' ', ' ', ' '],
  ['*', '*', ' ', '*', ' ', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', '*', '*', '*', '*', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', 'e'],
];
// solveMaze(myMaze, 0, 0, '');
// O(N)

// Drill 10
function anagram(prefix, word) {
  if (word.length === 1) {
    console.log(prefix + word);
  }

  for (let i = 0; i < word.length; i++) {
    const firstChar = word.charAt(i);
    const remainder = word.substring(0, i) + word.substring(i + 1);
    anagram(prefix + firstChar, remainder);
  }
}
// anagram('', 'east');
// O(N^2)

//#11 ORGANIZING CHART
function orgChart(chart, depth) {
  let indent = ' '.repeat(depth * 4);
  Object.keys(chart).forEach((key) => {
    orgChart(chart[key], depth + 1);
  });
}

let organization = {
  Zuckerberg: {
    Schroepfer: {
      Bosworth: {
        Steve: {},
        Kyle: {},
        Andra: {},
      },
      Zhao: {
        Richie: {},
        Sofia: {},
        Jen: {},
      },
      Badros: {
        John: {},
        Mike: {},
        Pat: {},
      },
      Parikh: {
        Zach: {},
        Ryan: {},
        Tes: {},
      },
    },
    Schrage: {
      VanDyck: {
        Sabrina: {},
        Michelle: {},
        Josh: {},
      },
      Swain: {
        Blanch: {},
        Tom: {},
        Joe: {},
      },
      Frankovsky: {
        Jasee: {},
        Brian: {},
        Margaret: {},
      },
    },
    Sandberg: {
      Goler: {
        Eddie: {},
        Julie: {},
        Annie: {},
      },
      Hernandez: {
        Rowi: {},
        Inga: {},
        Morgan: {},
      },
      Moissinac: {
        Amy: {},
        Chuck: {},
        Vinni: {},
      },
      Kelley: {
        Eric: {},
        Ana: {},
        Wes: {},
      },
    },
  },
};
// console.log(orgChart(organization, 0));
// O(N)

//#12 BINARY
function binaryRep(n) {
  if (n <= 0) {
    return '';
  }
  let bin = n % 2;
  return binaryRep(Math.floor(n / 2)) + bin;
}
// O(logN)