"use strict";

const ages = [12, 23, 11, 2];

function checkAge(age) {
  return age == 1;
}

console.log(ages.find(checkAge));
