/*
Title: Create Hello World Function
Link: https://leetcode.com/problems/create-hello-world-function/description/?envType=study-plan-v2&envId=30-days-of-javascript
Nr: 2667
JS challenge nr: 1.
*/

var createHelloWorld = function() {
    return function(...args) {
      return "Hello World";
    }
};
