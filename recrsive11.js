//question=11

// program to find the factorial of a number
function factorial(x) {

    // if number is 0
    if (x == 0) {
        return 1;
    }

    // if number is positive
    else {
        return x * factorial(x - 1);
    }
}

// take input from the user
const num = prompt('Enter a positive number: ');

// calling factorial() if num is positive
if (num >= 0) {
    const result = factorial(num);
    console.log(`The factorial of ${num} is ${result}`);
}
else {
    console.log('Enter a positive number.');
}
//output:
// 1.Enter a positive number: 7
// The factorial of 7 is 5040

// 2. Enter a positive number: -1
// Enter a positive number