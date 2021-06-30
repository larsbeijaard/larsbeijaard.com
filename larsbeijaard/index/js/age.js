function computeAge() {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const birthYear = 2002;

    const age = currentDate > new Date(currentYear, 0, 5)
                ? currentYear - birthYear
                : currentYear - birthYear - 1;
    
    document.getElementById('age').innerHTML = age;
}

computeAge();
