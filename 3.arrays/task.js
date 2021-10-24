'use strict';

function compareArrays(arr1, arr2) {
  let result;

  // Ваш код
  result = arr1.length === arr2.length && arr1.every((value, i) => value === arr2[i]);
  return result; // boolean
}

function advancedFilter(arr) {
  let resultArr;

  // Ваш код
  resultArr = arr.filter(item => item > 0).filter(item => item % 3 === 0).map(item => item * 10);
  return resultArr; // array
}
