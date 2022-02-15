/*  Assignment 1


Print All Prime Numbers from 1 to 500  */



function primeNumbers(minVal, maxVal) {
    for (let i = minVal; i <= maxVal; i++) {
      let primeNum = 0;
      for (let j = 2; j <= i / 2; j++) {
        if (i % j == 0) {
          primeNum = 1;
          break;
        }
      }
      if (i > 1 && primeNum == 0) {
        console.log(i);
      }
    }
  }
  
  primeNumbers(1, 500);



  /*
assingment 2

output -> abcd
  */
function concatinate (arr){
    var y="";
    for (let i=0; i<arr.length; i++ ){
        y +=arr[i];
        
    }
    return y;
}
const arr =["A","B","C","D"];
console.log(concatinate(arr));

/* Assingment 3
outpu-> 70
*/
function restOperator(...num){
    let sum =0;
    for (let i of num){
        sum = sum+i*2;
    }
    return sum;
}
console.log(restOperator(2,3,4,5,6,7,8));