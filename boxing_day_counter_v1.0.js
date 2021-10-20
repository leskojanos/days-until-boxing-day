// I am gonna use strict mode in all scripts now!
"use strict";
// Difference between to date (in ms)
const todayDate = new Date();
// remove the time information: without this, the 'remaining days' would be false (one day less)
todayDate.setHours(0, 0, 0, 0);
// prettier-ignore
const correctedTodayDate = todayDate.getDate() + "/" + (todayDate.getMonth() + 1) + "/" 
+ todayDate.getFullYear(); //January starts at 0

// write out the date today
console.log(`Today is: ${correctedTodayDate} `);
// set  Boxing Day date
const boxingDayDate = new Date("2021-12-24");
// prettier-ignore
const correctedBoxingDayDate = boxingDayDate.getDate() + "/" + (boxingDayDate.getMonth() + 1) +  "/" 
  + boxingDayDate.getFullYear(); //January starts at 0

// write out to the console Boxing Day date
console.log(`The Boxing Day date is: ${correctedBoxingDayDate}`);

// Difference in ms
const differenceInMilliseconds = boxingDayDate - todayDate;

//Convert ms into days
const millisecondsPerDay = 1000 * 60 * 60 * 24;
let differenceInDays = differenceInMilliseconds / millisecondsPerDay;
/// Only count whole days
differenceInDays = Math.trunc(differenceInDays);

// write out to the console remaining time unti Boxing Day
//prettier-ignore
console.log( `Remaining day(s) until the Boxing Day: ${Math.trunc(differenceInDays)}`);
