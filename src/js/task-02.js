// Посчитать возраст

// Создайте функцию, которая принимает два года. Год рождения - и текущий год. Посчитайте возраст человека, зависящий от этих двух дат.

function calculateAge (bornYear, currentYear) {
  let age = 0;
  age = currentYear - bornYear
  

  return `You are ${age} years old`;
};
console.log(calculateAge(2012, 2016));
console.log(calculateAge(1992, 2021));

// calculateAge(2012, 2016) => "You are 4 years old."
// calculateAge(1989, 2016) => "You are 27 years old."
