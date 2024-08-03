// question=17

var numArray = [140000, 104, 99];
numArray.sort(function(a, b) {
  return a - b;
});

console.log(numArray);

// output:
// [ 99, 104, 140000 ]