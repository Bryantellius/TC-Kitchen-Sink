// Variables

let myName = "Ben"; // block scoped
const numberOfStates = 50; // block scoped
var isAlive = true; // function scoped

// Operators

let sum = 5 + 4; // 9
let isGreater = 5 > 4; // true
let product = 231 * sum; // ^2000
let opposite = -product; // The opposite sign of product

console.log(opposite);

// Comments

// single line comment
/*

multi
line
comment

*/

// Functions

function checkAge(thresholdAge, whatToCheck) {
    return function (name, age) {
      if (age < thresholdAge) {
        alert(`Sorry ${name}, you are not old enough to ${whatToCheck}.`);
      } else {
        alert(`Congrats, ${name}! You are old enough to ${whatToCheck}.`);
      }
    };
  }
  
  let checkAlabamaLicense = checkAge(16, "drive");
  let checkCanCarRental = checkAge(23, "rent a car");
  
  checkCanCarRental("Evan", 17);

// Objects

const friends = [
  {
    name: "Ben",
    age: 21,
  },
  {
    name: "Bryant",
    age: 40,
  },
  {
    name: "Benjamin",
    age: 12,
  },
];

friends.forEach(function (friend) {
  checkAge(friend.name, friend.age);
});

function getLength(word) {
  return word.length;
}

let length = getLength("Hello World!");

if (length) {
  console.log("The world is nice and even!");
} else {
  console.log("The world is an odd place!");
}