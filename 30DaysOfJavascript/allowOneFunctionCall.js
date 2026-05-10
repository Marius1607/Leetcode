/*
  1 Title:Allow One Function Call
  2 Link: https://leetcode.com/problems/allow-one-function-call/?envType=study-plan-v2&envId=30-days-of-javascript
  3 Nr: 2666
  4 JS challenge nr: 10.
*/

var once = function(fn) {
    let c = true;  
    return function(...args){
        if (c) {
          c = false;
          return fn(...args);
        }
    }
};

fn = (a,b,c) => (a * b * c);
const onceFn = once(fn);
console.log(onceFn(1, 2, 3));
console.log(onceFn(2, 3, 6));
