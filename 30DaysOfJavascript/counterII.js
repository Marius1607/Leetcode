/*
Title: Counter II
Link: https://leetcode.com/problems/counter-ii/submissions/1999946917/?envType=study-plan-v2&envId=30-days-of-javascript
Nr: 2665
JS challenge nr: 4.
*/



var createCounter = function(init) {
  let counter = init;
  return {
    increment() {
      return ++counter;
    },
    decrement() {
      return --counter;
    },
    reset() {
      counter = init;
      return counter;
    }
  }
};

