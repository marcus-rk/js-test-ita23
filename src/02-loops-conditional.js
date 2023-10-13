/**
 * This function checks if a number is even.
 *
 * @param {number} n - The number to be checked.
 * @returns {boolean} - True if the number is even, otherwise false.
 *
 * Usage:
 * const result = isEven(4); // result will be true
 * const anotherResult = isEven(7); // anotherResult will be false
 */

function isEven(n) {
    return (n % 2 === 0);
}

/**
 * This function checks if a number is within a range.
 *
 * @param {number} n - The number to check.
 * @param {number} min - The minimum range (included)
 * @param {number} max - The maximum range (included)
 * @returns {boolean} - True if the number is within range, false otherwise.
 *
 * Usage:
 * const inRange = isWithinRange(5, 1, 10); // inRange will be true
 * const outOfRange = isWithinRange(15, 1, 10); // outOfRange will be false
 */

function isWithinRange(n, min, max) {
    let isInRange = false;

    for (let i = min; i <= max; i++) {
        if (i === n) {
            isInRange = true;
            break;
        }
    }

    return isInRange;
}

/**
 * This function checks if a string contains the string "ba"
 *
 * @param {string} string - The string to check.
 * @returns {boolean} - True if the string contains the string ba
 *
 * Usage:
 * const bananaContainsBa = stringContainsBa("banana"); // true
 * const harborContainsBa = isWithinRange("harbor"); // false
 * const harborContainsBa = isWithinRange("habanana"); // true
 */

function stringContainsBa(string) {
    return string.includes("ba");
}





