//question=21

var arr = [15, 37, 9, 21, 55];
var min = Infinity, secondMin = Infinity; 
for (var i= 0; i< arr.length; i++) {
    if (arr[i]< min) {
        secondMin = min;
        min = arr[i]; 
    } else if (arr[i]< secondMin) {
        secondMin = arr[i]; 
    }
}

console.log('Smallest number: ' + min);
console.log('Second smallest number: ' + secondMin);

//output:
// Smallest number: 9
// Second smallest number: 15