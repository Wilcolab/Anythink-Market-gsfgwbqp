/**
 * Converts a string to camelCase format.
 * 
 * This function takes a string with any combination of spaces, hyphens, or underscores
 * as word separators and converts it to camelCase where the first word is lowercase
 * and subsequent words are capitalized with no separators.
 * 
 * @param {string} str - The input string to convert
 * @returns {string} The camelCase version of the input string
 * 
 * @example
 * toCamelCase("hello world") // returns "helloWorld"
 * toCamelCase("hello-world") // returns "helloWorld"
 * toCamelCase("hello_world_foo") // returns "helloWorldFoo"
 * toCamelCase("HelloWorld") // returns "helloWorld"
 */
function toCamelCase(str) {
    return str
        .trim()
        .split(/[\s\-_]+/)
        .map((word, index) => {
            if (index === 0) {
                return word.toLowerCase();
            }
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        })
        .join("");
}

module.exports = toCamelCase;