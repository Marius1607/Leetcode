 /*
  1 Title: Array Reduce Transformation
  2 Link: https://leetcode.com/problems/array-reduce-transformation/description/?envType=study-plan-v2&envId=30-days-of-javascript 
  3 Nr: 2626
  4 JS challenge nr: 7.
*/


var reduce = function(nums, fn, init) {
  let acc = init;
  for (let i = 0; i < nums.length; i++) {
    acc = fn(acc, nums[i]);
  }

  return acc;
};
