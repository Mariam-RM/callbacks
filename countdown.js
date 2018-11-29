var countdownGenerator = function (x) {

  return function(){
    if (x > 0){
      console.log("T-minus " + x + "...");
      x -- ;
      // return x
    } else if (x === 0 ){
      console.log("Blast Off!");
      x -- ;
      // return x
    } else {
      console.log ("Rockets already gone, bub!")
      // x --;
      // return x
    }
  }

};

var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!



// instructions

// Implement a function countdownGenerator() that takes in a number x and returns a function that counts down when it is called (see starter code below).

