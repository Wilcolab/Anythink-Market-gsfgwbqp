/**
 * Converts a string to camelCase format.
 * 
 * @param {string} input - The input string to convert to camelCase.
 *                         The string must:
 *                         - Be a valid string type
 *                         - Not be empty after trimming whitespace
 *                         - Not start with a number
 *                         - Contain at least one valid word character
 * 
 * @returns {string} The converted string in camelCase format.
 *                   The first word is lowercase, and subsequent words
 *                   have their first character capitalized.
 *                   Special characters (except underscores) and extra
 *                   whitespace are removed.
 * 
 * @throws {Error} If input is not a string.
 * @throws {Error} If input is empty after trimming.
 * @throws {Error} If input starts with a number.
 * @throws {Error} If input contains no valid word characters after processing.
 * 
 * @example
 * camelCaseString('Hello World'); // Returns: 'helloWorld'
 * camelCaseString('hello_world'); // Returns: 'helloWorld'
 * camelCaseString('  hello  WORLD  '); // Returns: 'helloWorld'
 */

/**
 * Converts a string to dot.case format (dot-separated lowercase words).
 * 
 * @param {string} input - The input string to convert to dot.case.
 *                         The string must:
 *                         - Be a valid string type
 *                         - Not be empty after trimming whitespace
 *                         - Not start with a number
 *                         - Contain at least one valid word character
 * 
 * @returns {string} The converted string in dot.case format.
 *                   All words are converted to lowercase and joined
 *                   with dots. Special characters (except underscores)
 *                   and extra whitespace are removed.
 * 
 * @throws {Error} If input is not a string.
 * @throws {Error} If input is empty after trimming.
 * @throws {Error} If input starts with a number.
 * @throws {Error} If input contains no valid word characters after processing.
 * 
 * @example
 * dotCaseString('Hello World'); // Returns: 'hello.world'
 * dotCaseString('hello_world'); // Returns: 'hello.world'
 * dotCaseString('  hello  WORLD  '); // Returns: 'hello.world'
 */
function camelCaseString(input) {
    // Check if input is a string
    if (typeof input !== 'string') {
        throw new Error('Input must be a string');
    }

    // Trim leading and trailing spaces
    const trimmed = input.trim();

    // Check if string is empty after trimming
    if (trimmed.length === 0) {
        throw new Error('Input cannot be an empty string');
    }

    // Check if string starts with a number
    if (/^\d/.test(trimmed)) {
        throw new Error('Input cannot start with a number');
    }

    // Remove punctuation except underscores, split by spaces and underscores
    const words = trimmed
        .replace(/[^\w\s]/g, '') // Remove special characters except word chars and spaces
        .split(/[\s_]+/) // Split by spaces and underscores
        .filter(word => word.length > 0); // Remove empty strings

    if (words.length === 0) {
        throw new Error('Input must contain at least one valid word character');
    }

    // Convert to camelCase
    return words
        .map((word, index) =>
            index === 0
                ? word.toLowerCase()
                : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        )
        .join('');
}

// Examples
console.log(camelCaseString('Hello World')); // 'helloWorld'
console.log(camelCaseString('hello_world')); // 'helloWorld'
console.log(camelCaseString('  hello  WORLD  ')); // 'helloWorld'

try {
    camelCaseString('  123abc!!!');
} catch (error) {
    console.error(error.message); // 'Input cannot start with a number'
}

function dotCaseString(input) {
    // Check if input is a string
    if (typeof input !== 'string') {
        throw new Error('Input must be a string');
    }

    // Trim leading and trailing spaces
    const trimmed = input.trim();

    // Check if string is empty after trimming
    if (trimmed.length === 0) {
        throw new Error('Input cannot be an empty string');
    }

    // Check if string starts with a number
    if (/^\d/.test(trimmed)) {
        throw new Error('Input cannot start with a number');
    }

    // Remove punctuation except underscores, split by spaces and underscores
    const words = trimmed
        .replace(/[^\w\s]/g, '') // Remove special characters except word chars and spaces
        .split(/[\s_]+/) // Split by spaces and underscores
        .filter(word => word.length > 0); // Remove empty strings

    if (words.length === 0) {
        throw new Error('Input must contain at least one valid word character');
    }

    // Convert to dot.case
    return words
        .map(word => word.toLowerCase())
        .join('.');
}

// Examples
console.log(dotCaseString('Hello World')); // 'hello.world'
console.log(dotCaseString('hello_world')); // 'hello.world'
console.log(dotCaseString('  hello  WORLD  ')); // 'hello.world'

