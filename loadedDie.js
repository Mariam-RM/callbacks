// regular die

// var rollDie = function () {
//   return Math.floor(1 + Math.random() * 6);
// }

// console.log(rollDie());

// loaded die

function makeLoadedDie() {
  var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  var indexNumber = -1 ;

  return function() {

    for (element of list){
     indexNumber ++;
     return list[indexNumber];
     }
  }

}

var rollLoadedDie = makeLoadedDie();

console.log(rollLoadedDie());  // 5
console.log(rollLoadedDie());  // 4
console.log(rollLoadedDie());  // 6

//instructions
// However, instead of a random die, we want to create a cheat die that would let us predict the next number. Create a function called makeLoadedDie() which returns a function that when called, seems to generate random numbers between 1 and 6, but in fact returns numbers in a row from a hardcoded list.

// in the return function - loops through the array and return the value