'use strict';
// Задание 1
function getArrayParams(arr) {
  let min, max, sum, avg;

  // Ваш код
  sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  min = Math.min(...arr);
  max = Math.max(...arr);
  avg = Number((sum / arr.length).toFixed(2));

  return { min: min, max: max, avg: avg };
}

// Задание 2
function worker(arr) {
  let sum = 0;

  // Ваш код
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

function makeWork(arrOfArr, func) {
  let max;

  // Ваш кода
  let arrOfSum = [];
  for (let i = 0; i < arrOfArr.length; i++) {
    arrOfSum[i] = func(arrOfArr[i]);
  }
  max = Math.max(...arrOfSum);
  return max;
}

// Задание 3
function worker2(arr) {
  // Ваш код
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  let subtraction = 0;
  if (max <= 0) {
    subtraction = Math.abs(min - max);
  } else if (min >= 0) {
    subtraction = max - min;
  }
  return subtraction;
}
