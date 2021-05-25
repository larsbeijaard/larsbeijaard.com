const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const yearOfBirth = 2002;

// Compute my age.
const age = currentDate > new Date(currentYear, 0, 5) 
            ? currentYear - yearOfBirth 
            : currentYear - yearOfBirth - 1;

// Write my age in the HTML element.
document.getElementById('age').innerText = age;