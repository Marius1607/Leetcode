/*
Title: To Be Or Not To Be
Link: https://leetcode.com/problems/to-be-or-not-to-be/description/?envType=study-plan-v2&envId=30-days-of-javascript
Nr: 2704
JS challenge nr: 3.

Description:

Write a function expect that helps developers test their code. It should take in any value val and return an object with the following two functions.

- toBe(val) accepts another value and returns true if the two values === each other. If they are not equal, it should throw an error "Not Equal".
- notToBe(val) accepts another value and returns true if the two values !== each other. If they are equal, it should throw an error "Equal".

*/

var expect = function(val) {
  return {
    toBe(arg) {
      if (val === arg) {
        return true;
      }

      throw Error("Not Equal");
    },
    notToBe(arg) {
      if (val!==arg) {
        return true;
      }

      throw Error ("Equal");
    }
  }
};


console.log(expect(5).toBe(4));

