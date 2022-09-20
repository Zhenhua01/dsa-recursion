"use strict";


// base case: end of array
// progress: go thru each num
/** product: calculate the product of an array of numbers. */

function product(nums, i = 0) {
  if (i === nums.length) return 1;

  return nums[i] * product(nums, i + 1);
}

// base case: end of array
// progress: go thru each word
/** longest: return the length of the longest word in an array of words. */

function longest(words, i = 0, max = 0) {
  if (i === words.length) return max;

  max = max > words[i].length ? max : words[i].length;

  return longest(words, i + 1, max);
}

// base case: end of string
// progress: increment by 2
/** everyOther: return a string with every other letter. */

function everyOther(str, i = 0) {
  if (i > str.length || str.length === 0) return "";

  return str[i] + everyOther(str, i + 2);
}

//base case: if see match
//progress: go through each word

/** find: return boolean depending on if val exists in array or not. */

function find(arr, val, i = 0) {
  if (arr[i] === val) return true;
  if (i === arr.length) return false;
  return find(arr, val, i + 1);
}

//base case: if not match
//progress: for indexes, increment from left, decrement from right

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, i = 0, j = str.length - 1) {
  if (str[i] !== str[j]) return false;
  if (i >= j) return true;
  return isPalindrome(str, i + 1, j - 1);
}

//base case: out of letters in str
//progress:
/** revString: return a copy of a string, but in reverse. */

function revString(str, i = str.length-1) {
  if (i === -1) return "";
  return str[i]+ revString(str, i - 1);
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val) {
  
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {

}

// FURTHER STUDY

/** binarySearch: given a sorted array of numbers, and a value,
 * return true if val is in array, false if not present). */

function binarySearch(arr, val) {

}


/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearchIndex(arr, val) {

}

// you might find the above two problems easier if you change the function signature to:
//
// function binarySearch(arr, val, left = 0, right = arr.length) {
//
// }


module.exports = {
  product,
  longest,
  everyOther,
  find,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch,
  binarySearchIndex,
};
