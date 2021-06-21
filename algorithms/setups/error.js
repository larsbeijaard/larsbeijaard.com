/**
 * Give an error is the type received is not the type required.
 * And log the types that are required for the variable to the console.
 * 
 * @param {object} currentType The current type of the variable.
 * @param {string} variableName The variable's name containing the wrong type.
 * @param {object} requiredTypes The type(s) you require.
 */
function typeError(currentType, variableName, requiredTypes) {
    // Since multiple typeof checks can be done in a single if statement,
    // but only a few of them are the wrong type, we ignore the types that
    // are already the required type.
    if (currentType === requiredTypes) {
        return;
    }

    let types = '';
    
    // This triggers if there are multiple correct types.
    if (typeof requiredTypes === 'object') {
        types = '';
        
        // Chain the required types together separated by comma's.
        for (let i = 0; i < requiredTypes.length; i++) {
            types += ` [typeof ${requiredTypes[i]}]`;

            // Add a comma between each required type.
            if (i < requiredTypes.length - 1) {
                types += ',';
            }
        }
    // This triggers if there is only one correct type.
    } else {
        types = ` [typeof ${requiredTypes}]`;
    }

    // Log the message.
    console.error(`Make sure the '${variableName}' parameter is a${types}.`);
}

export { typeError };
