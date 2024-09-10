/**
 * Validates whether a given email address is in a proper format.
 *
 * This function uses a regular expression to check if the provided email
 * address adheres to a common pattern that includes:
 * - A local part (before the '@' symbol)
 * - An '@' symbol
 * - A domain part (after the '@' symbol) with a top-level domain (TLD)
 *
 * The validation ensures:
 * - The local part contains alphanumeric characters and special characters like ".", "_", "%", "+", "-".
 * - The domain part contains alphanumeric characters and may include "." and "-".
 * - The TLD consists of at least two alphabetic characters.
 *
 * Note: This function provides a basic level of validation and may not account for all valid email formats
 * as defined by the official standards (such as RFC 5322).
 *
 * @param {string} email - The email address to validate.
 * @returns {boolean} Returns `true` if the email format is valid, otherwise `false`.
 */
const hasEmailValid = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}/;
    return emailRegex.test(email);
};

module.exports = hasEmailValid;