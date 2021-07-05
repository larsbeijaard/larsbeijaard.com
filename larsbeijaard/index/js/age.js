function computeAge() {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const birthYear = 2002;

    // Add one year to my age if my birth date has already been passed.
    const age = currentDate > new Date(currentYear, 0, 5)
                ? currentYear - birthYear
                : currentYear - birthYear - 1;
    
    document.getElementById('age').innerHTML = age;
}

computeAge();
