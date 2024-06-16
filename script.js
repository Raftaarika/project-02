document.getElementById('registrationForm').addEventListener('submit', function (event) {
    event.preventDefault();
    validateForm();
});

function validateForm() {
    let isValid = true;

    // Full Name validation
    const fullName = document.getElementById('fullName');
    if (fullName.value.length < 5) {
        setError(fullName, 'Name must be at least 5 characters long.');
        isValid = false;
    } else {
        clearError(fullName);
    }

    // Email validation
    const email = document.getElementById('email');
    if (!email.value.includes('@')) {
        setError(email, 'Please enter a valid email address.');
        isValid = false;
    } else {
        clearError(email);
    }

    // Phone Number validation
    const phoneNumber = document.getElementById('phoneNumber');
    if (phoneNumber.value === '123456789' || phoneNumber.value.length !== 10 || isNaN(phoneNumber.value)) {
        setError(phoneNumber, 'Please enter a valid 10-digit phone number.');
        isValid = false;
    } else {
        clearError(phoneNumber);
    }

    // Password validation
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');
    const fullNameValue = fullName.value.toLowerCase();
    if (password.value.length < 8 || password.value.toLowerCase() === 'password' || password.value.toLowerCase() === fullNameValue) {
        setError(password, 'Password must be at least 8 characters long and not "password" or your name.');
        isValid = false;
    } else {
        clearError(password);
    }

    // Confirm Password validation
    if (password.value !== confirmPassword.value) {
        setError(confirmPassword, 'Passwords do not match.');
        isValid = false;
    } else {
        clearError(confirmPassword);
    }

    if (isValid) {
        alert('Form submitted successfully!');
        // Submit form or other actions
    }
}

function setError(element, message) {
    element.classList.add('is-invalid');
    element.nextElementSibling.textContent = message;
}

function clearError(element) {
    element.classList.remove('is-invalid');
}
