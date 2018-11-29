var words = ["ground", "control", "to", "major", "tom"];



map(words, function(word) {
  return word.length;
});

map(words, function(word) {
  return word.toUpperCase();
});

map(words, function(word) {
  return word.split('').reverse().join('');
});

function map(array, callback){

  newArray = [];

  for(element of array){
    newArray.push(callback(element));
  }

  // for (var i =0; i < array.length; i++){
  //   newArray.push(callback(array[i]));

  // }

   console.log(newArray);

}

