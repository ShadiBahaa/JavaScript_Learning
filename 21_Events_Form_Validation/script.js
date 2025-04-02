// Regular expressions (regex) are patterns that help us check if text follows certain rules
const patterns = {
    // Username must be 5-12 characters long, containing only letters and numbers
    username: /^[a-zA-Z0-9]{5,12}$/,

    // Email must follow the standard email format (e.g., user@example.com)
    email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,

    // Password must be at least 8 characters long, containing at least one letter and one number
    password: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,

    // Phone number must be exactly 10 digits
    phone: /^\d{10}$/
};

// Get the form element by its ID
const form = document.getElementById('registrationForm');

// Organize form elements into an object for easier access and cleaner code
const formElements = {
    username: {
        input: document.getElementById('username'), // Input field for username
        error: document.getElementById('usernameError'), // Error message element for username
        success: document.getElementById('usernameSuccess') // Success message element for username (optional)
    },
    email: {
        input: document.getElementById('email'), // Input field for email
        error: document.getElementById('emailError') // Error message element for email
    },
    password: {
        input: document.getElementById('password'), // Input field for password
        error: document.getElementById('passwordError') // Error message element for password
    },
    confirmPassword: {
        input: document.getElementById('confirmPassword'), // Input field for confirming password
        error: document.getElementById('confirmPasswordError') // Error message element for confirm password
    },
    phone: {
        input: document.getElementById('phone'), // Input field for phone number
        error: document.getElementById('phoneError') // Error message element for phone number
    }
};

// Get the submit button element
const submitButton = document.getElementById('submitButton');

// Function to show an error message for a specific input field
function showError(inputName, message) {
    const element = formElements[inputName]; // Get the corresponding form element

    // Set the error message text
    element.error.textContent = message;

    // Display the error message
    element.error.style.display = 'block';

    // Hide the success message if it exists
    if (element.success) {
        element.success.style.display = 'none';
    }

    // Add a visual indicator (CSS class) to show the input is invalid
    element.input.classList.remove('valid');
    element.input.classList.add('invalid');
}

// Function to hide the error message and mark the input as valid
function hideError(inputName) {
    const element = formElements[inputName]; // Get the corresponding form element

    // Hide the error message
    element.error.style.display = 'none';

    // Update the input's CSS classes to indicate it is valid
    element.input.classList.remove('invalid');
    element.input.classList.add('valid');
}

// Function to validate the username input
function validateUsername(value) {
    if (!value) {
        // Show error if the username is empty
        showError('username', 'Username is required');
        return false;
    }

    if (!patterns.username.test(value)) {
        // Show error if the username does not match the regex pattern
        showError('username', 'Username must be 5-12 characters, letters and numbers only');
        return false;
    }

    // Hide error if the username is valid
    hideError('username');
    return true;
}

// Function to validate the email input
function validateEmail(value) {
    if (!value) {
        // Show error if the email is empty
        showError('email', 'Email is required');
        return false;
    }

    if (!patterns.email.test(value)) {
        // Show error if the email does not match the regex pattern
        showError('email', 'Please enter a valid email address');
        return false;
    }

    // Hide error if the email is valid
    hideError('email');
    return true;
}

// Function to validate the password input
function validatePassword(value) {
    if (!value) {
        // Show error if the password is empty
        showError('password', 'Password is required');
        return false;
    }

    if (!patterns.password.test(value)) {
        // Show error if the password does not match the regex pattern
        showError('password', 'Password must be at least 8 characters long and contain at least one letter and one number');
        return false;
    }

    // Hide error if the password is valid
    hideError('password');
    return true;
}

// Function to validate the confirm password input
function validateConfirmPassword(value) {
    if (!value) {
        // Show error if the confirm password field is empty
        showError('confirmPassword', 'Please confirm your password');
        return false;
    }

    if (value !== formElements.password.input.value) {
        // Show error if the confirm password does not match the password
        showError('confirmPassword', 'Passwords do not match');
        return false;
    }

    // Hide error if the confirm password is valid
    hideError('confirmPassword');
    return true;
}

// Function to validate the phone number input
function validatePhone(value) {
    if (!value) {
        // Phone number is optional, so hide error if it's empty
        hideError('phone');
        return true;
    }

    if (!patterns.phone.test(value)) {
        // Show error if the phone number does not match the regex pattern
        showError('phone', 'Please enter a valid 10-digit phone number');
        return false;
    }

    // Hide error if the phone number is valid
    hideError('phone');
    return true;
}

// Add event listeners to validate inputs as the user types
formElements.username.input.addEventListener('input', (event) => {
    validateUsername(event.target.value); // Validate username
    validateForm(); // Check if the entire form is valid
});

formElements.email.input.addEventListener('input', (event) => {
    validateEmail(event.target.value); // Validate email
    validateForm();
});

formElements.password.input.addEventListener('input', (event) => {
    validatePassword(event.target.value); // Validate password

    // Validate confirm password if it has a value (in case the user changes the password)
    if (formElements.confirmPassword.input.value) {
        validateConfirmPassword(formElements.confirmPassword.input.value);
    }
    validateForm();
});

formElements.confirmPassword.input.addEventListener('input', (event) => {
    validateConfirmPassword(event.target.value); // Validate confirm password
    validateForm();
});

formElements.phone.input.addEventListener('input', (event) => {
    validatePhone(event.target.value); // Validate phone number
    validateForm();
});

// Function to check if the entire form is valid
function validateForm() {
    const isValid =
        validateUsername(formElements.username.input.value) &&
        validateEmail(formElements.email.input.value) &&
        validatePassword(formElements.password.input.value) &&
        validateConfirmPassword(formElements.confirmPassword.input.value) &&
        validatePhone(formElements.phone.input.value);

    // Enable or disable the submit button based on form validity
    submitButton.disabled = !isValid;
}

// Add an event listener to handle form submission
form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    // Log the form data (in a real application, you would send this to a server)
    console.log('Form submitted with data:', {
        username: formElements.username.input.value,
        email: formElements.email.input.value,
        password: formElements.password.input.value,
        phone: formElements.phone.input.value || 'Not provided'
    });

    // Reset the form fields and validation states
    form.reset();
    Object.values(formElements).forEach(element => {
        element.input.classList.remove('valid', 'invalid');
    });

    // Disable the submit button until the form is valid again
    submitButton.disabled = true;
});
