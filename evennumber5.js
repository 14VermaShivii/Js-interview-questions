// question=5

const arr = [3,5,6,7,8,4,2,1,66,77];
const returnEvenArray = (arr) => {
   return arr.filter(e => {
      return e % 2 === 0;
   })
};
console.log(returnEvenArray(arr));

// output
// [ 6, 8, 4, 2, 66 ]   `