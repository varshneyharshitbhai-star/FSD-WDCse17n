
function validateForm() {
    let name = document.getElementById("name").value;
    let pass = document.getElementById("password").value;

    // Name validation
    let namePattern = /^[A-Za-z]{6,}$/;
    if (!namePattern.test(name)) {
        alert("Name must contain only alphabets and minimum 6 characters.");
        return false;
    }

    // Password validation
    if (pass.length < 6) {
        alert("Password must be at least 6 characters long.");
        return false;
    }

    alert("Form submitted successfully!");
    return true;
}

