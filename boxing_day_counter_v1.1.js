// v1.1
// I am gonna use strict mode in all scripts now!
"use strict";
// get todays date
const todayDate = new Date();
// set Boxing Day date
const boxingDayDate = new Date("2021-12-24");

// remove the time information: without this, the 'remaining days' would be false (one day less)
todayDate.setHours(0, 0, 0, 0);

// Create a function to correct 'the January' is 0' problem
// prettier-ignore
const dateCorrector = function (dateToCorrect) {
  const correctDate = dateToCorrect.getDate() + "/" + (dateToCorrect.getMonth() + 1) + "/" 
    + dateToCorrect.getFullYear();
  return correctDate;
};

// write out the  date today
// prettier-ignore
console.log(`Today's date: ${dateCorrector(todayDate)}\nBoxing Day's date: ${dateCorrector(boxingDayDate)}`);

// Difference in ms
const differenceInMilliseconds = boxingDayDate - todayDate;

//Convert ms into days
const millisecondsPerDay = 1000 * 60 * 60 * 24;
let differenceInDays = differenceInMilliseconds / millisecondsPerDay;
/// Only count whole days
differenceInDays = Math.trunc(differenceInDays);

// prettier-ignore
console.log(`Remaining day(s) until the Boxing Day: ${Math.trunc(differenceInDays)}`);
