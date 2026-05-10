/*
Title: Counter
Link: https://leetcode.com/problems/counter/?envType=study-plan-v2&envId=30-days-of-javascript
Nr: 2620
JS challenge nr: 2.
*/

var createCounter = function(n) {
    let counter = n;  
    return function() {
        return counter++;
    };
};

let counter = createCounter(0);
counter();
counter();
console.log(counter();
