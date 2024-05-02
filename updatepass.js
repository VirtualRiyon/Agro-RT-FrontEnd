let updatePasswordBtn = document.getElementById("updatePasswordBtn");
updatePasswordBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let newPassword = document.getElementById("new-pass").value.trim();
    let confirmPassword = document.getElementById("cn-Password").value.trim();

    let errorMessage = "";

    if (!newPassword) {
        errorMessage += "Please enter a new password.\n";
    }

    if (newPassword !== confirmPassword) {
        errorMessage += "Passwords do not match.\n";
    }

    if (errorMessage) {
        alert(errorMessage);
        return;
    }
    let email=localStorage.getItem("email");
    console.log(email);
    fetch('http://localhost:8080/update', {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ newPassword: newPassword }),
    })
    .then((response) => {
        if (response.ok) {
            // alert("Password Updated successfully");
            return response.json();
        } else {
            throw new Error("Failed to update password");
        }
    })
    .then((data) => {
        alert("Password updated successfully");
        // Optionally, you can redirect the user to another page or perform any other actions here
    })
    .catch((error) => {
        alert("Failed to update password: " + error.message);
    });
});
