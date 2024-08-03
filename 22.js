//question=22

const average = arr => arr.reduce( ( p, c ) => p + c, 0 ) / arr.length;
    
const result = average( [ 4, 4, 5, 6, 6 ] ); // 5
    
console.log(result);


// output:
// 5