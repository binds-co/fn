/**
 * Validate if number without non-numeric characters has 5 or more consecutive repeating digits.
 * This function does not exclude or filter based on any specific country or region.
 *
 * @param {string} phone - The phone number to be validated. It can include non-numeric characters such as spaces, dashes, parentheses, etc.
 * @returns {boolean} - Returns `true` if the phone number does NOT contain 5 or more consecutive repeating digits; `false` otherwise.
 */
const validatePhone = (phone) => {
    if (!phone) return false;
    // Regular expression to match 5 or more consecutive repeating digits
    const invalidPhone = /(\d)\1{7,}/;

    // Remove all non-digit characters from the phone number
    const sanitizedPhone = phone.replace(/\D/g, '');

    if (invalidPhone.test(sanitizedPhone)) return false;
    if (sanitizedPhone.length < 10) return false;

    return true;
};

module.exports = validatePhone;
