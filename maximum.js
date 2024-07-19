
function largest(arr) {
    let s;
    let max = arr[0];
    for (s = 1; s < arr.length; s++) {
        if (arr[s] > max)
            max = arr[s];
    }
    return max;
}
let arr = [22, 65,1, 39];
console.log("Largest in given array is " + largest(arr));

// ans =65