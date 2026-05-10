/*
Title: Apply Transform Over Each Element in Array
Link: https://leetcode.com/problems/apply-transform-over-each-element-in-array/?envType=study-plan-v2&envId=30-days-of-javascript 
Nr: 2635
JS challenge nr: 5.

Description:

Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.

The returned array should be created such that returnedArray[i] = fn(arr[i], i).

Please solve it without the built-in Array.map method.
*/



var map = function(arr, fn) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result[i] = fn(arr[i], i);
  }

  return result;
};

console.log(map([1, 2, 3, 4], (x) => x*x));
