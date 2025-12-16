/**
 * Converts a string to camelCase format.
 * 
 * @function toCamelCase
 * @param {string} str - The input string to be converted. Can contain spaces, hyphens, underscores, or other non-alphanumeric separators.
 * @returns {string} The converted camelCase string where the first word is lowercase and subsequent words are capitalized.
 * @throws {TypeError} If the input is not a string.
 * @throws {Error} If the input string is empty or contains only whitespace.
 * @throws {Error} If the input string contains no alphanumeric characters.
 * 
 * @example
 * // Convert from space-separated words
 * toCamelCase("Hello World!"); // Returns: "helloWorld"
 * 
 * @example
 * // Convert from space-separated words
 * toCamelCase("the quick brown fox"); // Returns: "theQuickBrownFox"
 * 
 * @example
 * // Convert from kebab-case
 * toCamelCase("some-kebab-case-text"); // Returns: "someKebabCaseText"
 * 
 * @example
 * // Convert from snake_case
 * toCamelCase("some_snake_case_text"); // Returns: "someSnakeCaseText"
 */

/**
 * Converts a string to dot.case format.
 * 
 * @function toDotCase
 * @param {string} str - The input string to be converted. Can contain spaces, hyphens, underscores, or other non-alphanumeric separators.
 * @returns {string} The converted dot.case string where all words are lowercase and joined by periods.
 * @throws {TypeError} If the input is not a string.
 * @throws {Error} If the input string is empty or contains only whitespace.
 * @throws {Error} If the input string contains no alphanumeric characters.
 * 
 * @example
 * // Convert from space-separated words
 * toDotCase("Hello World!"); // Returns: "hello.world"
 * 
 * @example
 * // Convert from space-separated words
 * toDotCase("the quick brown fox"); // Returns: "the.quick.brown.fox"
 * 
 * @example
 * // Convert from kebab-case
 * toDotCase("some-kebab-case-text"); // Returns: "some.kebab.case.text"
 * 
 * @example
 * // Convert from snake_case
 * toDotCase("some_snake_case_text"); // Returns: "some.snake.case.text"
 */
function toCamelCase(str) {
    // Input validation
    if (typeof str !== 'string') {
        throw new TypeError('Input must be a string');
    }

    if (str.trim().length === 0) {
        throw new Error('Input string cannot be empty');
    }

    // Remove leading/trailing whitespace and split by non-alphanumeric characters
    const words = str
        .trim()
        .split(/[^a-zA-Z0-9]+/)
        .filter(word => word.length > 0);

    if (words.length === 0) {
        throw new Error('Input string must contain at least one alphanumeric character');
    }

    // Convert to camelCase: first word lowercase, rest capitalized
    return words
        .map((word, index) => {
            if (index === 0) {
                return word.toLowerCase();
            }
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        })
        .join('');
}

// Example usage
console.log(toCamelCase("Hello World!"));           // "helloWorld"
console.log(toCamelCase("the quick brown fox"));    // "theQuickBrownFox"
console.log(toCamelCase("some-kebab-case-text"));  // "someKebabCaseText"
console.log(toCamelCase("some_snake_case_text"));  // "someSnak eCaseText"

function toDotCase(str) {
    // Input validation
    if (typeof str !== 'string') {
        throw new TypeError('Input must be a string');
    }

    if (str.trim().length === 0) {
        throw new Error('Input string cannot be empty');
    }

    // Remove leading/trailing whitespace and split by non-alphanumeric characters
    const words = str
        .trim()
        .split(/[^a-zA-Z0-9]+/)
        .filter(word => word.length > 0);

    if (words.length === 0) {
        throw new Error('Input string must contain at least one alphanumeric character');
    }

    // Convert to dot.case: all lowercase, joined by dots
    return words.map(word => word.toLowerCase()).join('.');
}

// Example usage
console.log(toDotCase("Hello World!"));           // "hello.world"
console.log(toDotCase("the quick brown fox"));    // "the.quick.brown.fox"
console.log(toDotCase("some-kebab-case-text"));  // "some.kebab.case.text"
console.log(toDotCase("some_snake_case_text"));  // "some.snake.case.text"

