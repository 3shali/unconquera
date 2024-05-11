function resetForm() {
    document.getElementById("register-form").reset();
}

document.getElementById('register-form').addEventListener('submit', function(e) {
    e.preventDefault();
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
    var dob = document.getElementById('dob').value;
    var phoneNumber = document.getElementById('phoneNumber').value;
    var avatar = document.getElementById('avatar').files[0];

    // Here, you can add your validation logic for the fields
    // For simplicity, I'm just logging the values to console
    console.log("First Name: ", firstName);
    console.log("Last Name: ", lastName);
    console.log("Email: ", email);
    console.log("Password: ", password);
    console.log("Confirm Password: ", confirmPassword);
    console.log("Date of Birth: ", dob);
    console.log("Phone Number: ", phoneNumber);
    console.log("Avatar: ", avatar);

    // After validation logic, you can perform other actions
    // For example, you can send the form data to the server via AJAX
});