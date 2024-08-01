// question:8

function largestElement(arr) {
    return Math.max(...arr);
}

const num1 = [10, 15, 28, 20, 33];
const result = largestElement(num1);

console.log("The largest element in the array is:" + result);

// output:
// The largest element in the array is:33