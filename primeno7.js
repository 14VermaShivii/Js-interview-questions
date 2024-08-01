// program to check if a number is prime or not

// take input from the user
// const number = parseInt(prompt("Enter a positive number: "));
// let isPrime = true;

// // check if number is equal to 1
// if (number === 1) {
//     console.log("1 is neither prime nor composite number.");
// }

// // check if number is greater than 1
// else if (number > 1) {

//     // looping through 2 to number-1
//     for (let i = 2; i < number; i++) {
//         if (number % i == 0) {
//             isPrime = false;
//             break;
//         }
//     }

//     if (isPrime) {
//         console.log(`${number} is a prime number`);
//     } else {
//         console.log(`${number} is a not prime number`);
//     }
// }

// // check if number is less than 1
// else {
//     console.log("The number is not a prime number.");
// }
// output
//1.  Enter a positive number: 11
// 11 is a prime number


//2 program.....

function isPrime(number) { 
    if (number <= 1) { 
        return false; 
    } 
    for (let i = 2; i <= Math.sqrt(number); i++) { 
        if (number % i === 0) { 
            return false; 
        } 
    } 
    return true; 
} 
  
// Driver code 
console.log(isPrime(5)); 
console.log(isPrime(4)); 
console.log(isPrime(11)); 
console.log(isPrime(21));

// output:
// true
// false
// true
// false