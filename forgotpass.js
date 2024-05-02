let btn = document.querySelector(".submit");

btn.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent form submission

    let email = document.querySelector(".username").value.trim();
    let alertMessage = document.querySelector("#alertm");

    if (!email) {
        alertMessage.textContent = "* Username or Email is mandatory.";
    } else {
    
        fetch(`http://localhost:8080/Otp?email=${encodeURIComponent(email)}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            if (response.ok) {
              
                return response.json();
            } else {
                throw new Error("Failed to send OTP. Please try again.");
            }
        })
        .then(data => {
            
            localStorage.setItem('otpData', JSON.stringify(data.data));
            localStorage.setItem('email',email);

          
            window.location.href = "http://127.0.0.1:5506/Agriculture-Machinery-Rental-Website/Otpverify.html";
        })
        .catch(error => {
        
            console.error('Fetch Error:', error);
            alert("Failed to send OTP. Please try again.");
        });
    }
});
