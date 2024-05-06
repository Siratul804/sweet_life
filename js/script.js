function validateRegistration() {
    // Get form elements
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var email = document.getElementById('email').value;
    var gender = document.querySelector('input[name="gender"]:checked');
    var termsCheckbox = document.getElementById('termsCheckbox');

    // Check if any required field is blank
    if (username.trim() === '' || password.trim() === '' || email.trim() === '' || !gender || !termsCheckbox.checked) {
        alert('Please fill in all required fields.');
        return false;
    }

    // Check password length
    if (password.length < 9) {
        alert('Password must be at least 9 characters long.');
        return false;
    }

    // Validate email format
    var emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
        alert('Invalid email format.');
        return false;
    }

    // If all validations pass, return true to allow form submission
    return true;
}

function validateForm() {
    // Get form elements
    var deliveryType = document.getElementById('deliveryType').value;
    var deliveryAddress = document.getElementById('deliveryAddress').value;
    var billingAddress = document.getElementById('billingAddress').value;
    var contactNumber = document.getElementById('contactNumber').value;
    var email = document.getElementById('email').value;
    var paymentType = document.querySelector('input[name="paymentType"]:checked');
    var creditCardInfo = document.getElementById('creditCardInfo').value;

    // Check if any required field is blank
    if (deliveryType.trim() === '' || billingAddress.trim() === '' || contactNumber.trim() === '' || email.trim() === '' || !paymentType) {
        alert('Please fill in all required fields.');
        return false;
    }

    // Check if delivery type is selected and if delivery address is provided
    if (deliveryType === 'delivery' && deliveryAddress.trim() === '') {
        alert('Please provide a delivery address.');
        return false;
    }

    // Check if payment type is 'online' and if credit card information is provided
    if (paymentType.value === 'online' && creditCardInfo.trim() === '') {
        alert('Please provide credit card information for online payment.');
        return false;
    }

    // Validate email format
    var emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
        alert('Invalid email format.');
        return false;
    }

    // If all validations pass, return true to allow form submission
    return true;
}

// Checkbox for Same as Delivery Address
var sameAsDeliveryCheckbox = document.getElementById("sameAsDelivery");
sameAsDeliveryCheckbox.addEventListener("change", function() {
    var deliveryAddress = document.getElementById("deliveryAddress").value;
    var billingAddress = document.getElementById("billingAddress");
    if (sameAsDeliveryCheckbox.checked) {
        if (deliveryAddress.trim() === "") {
            alert("Please enter your delivery address first");
            sameAsDeliveryCheckbox.checked = false;
        } else {
            billingAddress.value = deliveryAddress;
        }
    } else {
        billingAddress.value = "";
    }
});


// Highlight current page in navigator
document.addEventListener("DOMContentLoaded", function() {
    var currentPage = window.location.pathname.split("/").pop();
    var menuItems = document.querySelectorAll("nav ul li a");
    menuItems.forEach(function(item) {
        if (item.getAttribute("href") === currentPage) {
            item.classList.add("active");
        }
    });
});

// Limit Credit Card Number Length
function limitCreditCardLength() {
    var creditCardType = document.getElementById("creditCardType").value;
    var creditCardNumber = document.getElementById("creditCardNumber");
    if (creditCardType === "amex") {
        creditCardNumber.maxLength = 15;
    } else {
        creditCardNumber.maxLength = 16;
    }
}