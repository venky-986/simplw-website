function login(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Simple validation for demonstration
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("errorMessage");

    if (username === "admin" && password === "password") {
        // Redirect to another page after successful login
        window.location.href = "dashboard.html";
    } else {
        errorMessage.textContent = "Invalid username or password";
    }
}
