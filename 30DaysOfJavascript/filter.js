v /*
  1 Title: Apply Transform Over Each Element in Array
  2 Link: https://leetcode.com/problems/apply-transform-over-each-element-in-array/?envType
  3 Nr: 2634
  4 JS challenge nr: 6.
  */

var filter = function(arr, fn) {
  let results = [];
  let counter = 0;
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      results[counter] = arr[i];
      counter++;
    }
  }

  return results;
};
