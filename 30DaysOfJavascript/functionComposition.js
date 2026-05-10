/*
  1 Title: Array Reduce Transformatin
  2 Link: https://leetcode.com/problems/return-length-of-arguments-passed/description/?envType=study-plan-v2&envId=30-days-of-javascript
  3 Nr: 2703
  4 JS challenge nr: 8.
*/

var compose = function(functions) {
    let arr = functions; 
    return function rec(x) {
      if (arr.length) {
        let func = arr.shift();
        return func(rec(x));
      } else {
        return x;
      }
    }
};


let functions = [x => x + 1, x => x * x, x => 2 * x]
const fn = compose(functions);
console.log(fn(4));
