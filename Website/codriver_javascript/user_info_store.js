document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission   


    // Get form values
    const username = document.getElementById("Username").value;
    const email = document.getElementById("Phone_Number_or_Email").value;
    const password = document.getElementById("Password").value;

    // Basic validation (you can add more)
    if (username === "" || email === "" || password === "") {
        document.getElementById("message").textContent = "Please fill in all fields.";
        return;
    }

    // Send data to server using AJAX (replace with your server-side endpoint)
    fetch("your_server_side_script.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: `username=${username}&email=${email}&password=${password}`   

    })
    .then(response => response.json())   

    .then(data => {
        if (data.success) {
            document.getElementById("message").textContent = "Registration successful!";
        } else {
            document.getElementById("message").textContent = data.message;
        }
    })
    .catch(error => {
        console.error(error);
        document.getElementById("message").textContent   
 = "An error occurred. Please try again.";
    });
});