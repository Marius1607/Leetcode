/*
  Title: Valid Parentheses
  Link: https://leetcode.com/problems/valid-parentheses/description/
  Nr: 20

  Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
  An input string is valid if:
    1. Open brackets must be closed by the same type of brackets.
    2. Open brackets must be closed in the correct order.
    3. Every close bracket has a corresponding open bracket of the same type.
*/

var isValid = function(s) {
  let expecting = [];
  for (let c of s) {
    console.log("c=", c);
    if (c === "(") {
	    expecting.push(")");
    }
    else if (c === "[") {
      expecting.push("]");
    }
    else if (c === "{") {
      expecting.push("}");
    }
    else if ([")", "]", "}"].includes(c)) {
      console.log(expecting["HERE = ", expecting.length - 1]);
      if (expecting[expecting.length - 1] != c) {
        return false;
      } else {
        expecting.pop();
      }
    }
  }  
  if (expecting.length) {
    console.log(expecting);
    return false;
  }
  return true;
}

console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("(["));
console.log(isValid("([])"));
console.log(isValid("([)]"));
