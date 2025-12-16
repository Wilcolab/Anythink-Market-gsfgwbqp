/**
 * Converts a string to kebab-case format
 * @param {string} input - The string to convert
 * @returns {string} The kebab-case formatted string
 * @throws {TypeError} If input is invalid
 */
function toKebabCase(input) {
    // Validate input
    if (input === null || input === undefined) {
        throw new TypeError('Input must be a non-null string');
    }
    
    if (typeof input !== 'string') {
        throw new TypeError('Input must be a string');
    }
    
    if (input.trim().length === 0) {
        throw new TypeError('Input cannot be empty or whitespace only');
    }
    
    // Normalize the string
    return input
        .trim()
        .toLowerCase()
        // Insert hyphen before uppercase letters (camelCase boundaries)
        .replace(/([a-z])([A-Z])/g, '$1-$2')
        // Replace spaces and underscores with hyphens
        .replace(/[\s_]+/g, '-')
        // Collapse multiple hyphens into one
        .replace(/-+/g, '-')
        // Remove leading and trailing hyphens
        .replace(/^-+|-+$/g, '');
}

// Examples
console.log(toKebabCase("HelloWorld")); // "hello-world"
console.log(toKebabCase("hello world_test")); // "hello-world-test"
console.log(toKebabCase("camelCaseExample")); // "camel-case-example"
console.log(toKebabCase("  spaces  and_underscores  ")); // "spaces-and-underscores"

// Error cases
try {
    toKebabCase(null);
} catch (e) {
    console.error(e.message); // "Input must be a non-null string"
}

try {
    toKebabCase("");
} catch (e) {
    console.error(e.message); // "Input cannot be empty or whitespace only"
}