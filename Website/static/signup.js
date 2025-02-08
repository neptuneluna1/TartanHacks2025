document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("form").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevents the page from refreshing

        // Get user inputs
        let username = document.getElementById("username").value.trim();
        let email = document.getElementById("email").value.trim();
        let password = document.getElementById("password").value;
        let confirmPassword = document.getElementById("confirmPassword").value;

        // Basic validation
        if (username === "" || email === "" || password === "" || confirmPassword === "") {
            document.getElementById("errorMessage").innerText = "All fields are required.";
            return;
        }

        if (password !== confirmPassword) {
            document.getElementById("errorMessage").innerText = "Passwords do not match.";
            return;
        }

        // Store values in variables (you can send these to a backend server later)
        console.log("Username:", username);
        console.log("Email:", email);
        console.log("Password:", password); // In real-world apps, NEVER log passwords.

        // Clear error message
        document.getElementById("errorMessage").innerText = "";

        alert("Signup successful!");
    });
});