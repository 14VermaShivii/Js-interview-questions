// question=18

function reverse1(str){
    let r = "";
    for(let i = str.length-1; i >= 0; i--){
      r += str[i];
    }
    return r;
  }
  
  console.log(reverse1("javascript"))
  console.log(reverse1("shivani verma"))

//   output:
// 1. tpircsavaj
// 2. amrev inavihs