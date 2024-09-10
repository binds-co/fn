const hasEmailValid = require('../lib/validateEmail');

describe('hasEmailValid', () => {
    describe('should validate email addresses correctly', () => {
        const testCases = [
            // Valid email cases
            { email: 'test@example.com', expectedValid: true },
            { email: 'user.name+tag+sorting@example.com', expectedValid: true },
            { email: 'user.name@example.co.uk', expectedValid: true },
            { email: 'user_name@example.com', expectedValid: true },
            { email: 'user-name@example.io', expectedValid: true },
            { email: 'name@domain.subdomain.com', expectedValid: true },
            { email: 'name@domain.com', expectedValid: true },
            { email: 'user.name+123@sub.domain.com', expectedValid: true },

            // Invalid email cases
            { email: 'plainaddress', expectedValid: false }, // Missing '@' and domain
            { email: 'null', expectedValid: false }, // Missing '@' and domain
            { email: '@missingusername.com', expectedValid: false }, // Missing local part
            { email: 'username@.com', expectedValid: false }, // Domain name cannot start with a dot
            { email: 'username@com', expectedValid: false }, // Missing top-level domain
            { email: 'username@com.', expectedValid: false }, // Trailing dot in domain name
            { email: 'username@.com.', expectedValid: false }, // Dot before and after domain
            { email: 'username@..com', expectedValid: false }, // Consecutive dots in domain
            { email: 'username@.com.com', expectedValid: false }, // Dot before domain
            { email: 'username@domain..com', expectedValid: false }, // Consecutive dots in domain
            { email: 'username@domain.c', expectedValid: false }, // Single character TLD
            { email: 'username@domain,com', expectedValid: false }, // Comma instead of dot
            { email: 'username@domain@domain.com', expectedValid: false }, // Multiple '@' symbols
            { email: 'username@1321%$#@#@.com', expectedValid: false }, // Special characters in domain
            { email: 'user.name@example.c_m', expectedValid: false }, // Underscore in domain name

            // improvments to the regex
            { email: 'user..name@example.com', expectedValid: true }, // Consecutive dots in local part = false
            { email: 'user.name.@example.com', expectedValid: true }, // Trailing dot in local part = false
        ];

        testCases.forEach(({ email, expectedValid }) => {
            it(`should return ${expectedValid} for the email "${email}"`, () => {
                const isValid = hasEmailValid(email);
                expect(isValid).toBe(expectedValid);
            });
        });
    });
});
