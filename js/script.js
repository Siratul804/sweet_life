function validateRegistration() {
    // Get form elements
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
    var email = document.getElementById('email').value;
    var gender = document.querySelector('input[name="gender"]:checked');
    var termsCheckbox = document.getElementById('termsCheckbox');

    // Check if any required field is blank
    if (username.trim() === '' || password.trim() === '' || confirmPassword.trim() === '' || email.trim() === '' || !gender || !termsCheckbox.checked) {
        alert('Please fill in all required fields.');
        return false;
    }

    // Check password length
    if (password.length < 9) {
        alert('Password must be at least 9 characters long.');
        return false;
    }

    // Check if passwords match
    if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return false;
    }

    // Validate email format
    var emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
        alert('Invalid email format.');
        return false;
    }

    // Additional validation logic for gender, terms acceptance, etc.

    // If all validations pass, return true to allow form submission
    return true;
}

function validateOrder() {
    // Validation logic for order form
}
