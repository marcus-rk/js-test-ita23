/**
 * This function generates a personalized message based on the user's name and age.
 *
 * @param {string} name - Name of the user.
 * @param {number} age - Age of the user.
 * @returns {string} - Personalized message for the user.
 *
 * Usage:
 * const message = generateMessage("Jack", 25); // message will be "Hey Jack, at 25, you are in the prime of your life!"
 */
const generateMessage = (name, age) => {
    return `Hey ${name}, at ${age}, you are in the prime of your life!`;
}

/**
 * This function capitalizes the first letter of every word in a sentence.
 *
 * @param {string} sentence - The sentence to be title cased.
 * @returns {string} - The title cased sentence.
 *
 * Usage:
 * const title = titleCase("hello world"); // title will be "Hello World"
 */
const titleCase =  (sentence) => {
    const splitSentence = sentence.split(" ");

    let capitalSentence = []

    for (const word of splitSentence) {
        let currentWord = '';

        for (let i = 0; i < word.length; i++) {
            let character = word[i];

            if (i === 0)
                character = word[0].toUpperCase();

            currentWord += character;
        }

        capitalSentence.push(currentWord);
    }

    return capitalSentence.join(' ');
}

/**
 * This function returns the sum of a range of numbers in an array.
 *
 * @param {number} start - The starting number.
 * @param {number} end - The ending number.
 * @returns {number} - The sum of the range.
 *
 * Usage:
 * const sum = sumOfRange(1, 4); // sum will be 10
 */
const sumOfRange = (start, end) => {
    let sum = 0;

    for (let i = start; i <= end ; i++) {
        sum += i;
    }

    return sum;
}



