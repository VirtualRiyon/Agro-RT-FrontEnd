document.addEventListener("DOMContentLoaded", () => {
    const verifyBtn = document.getElementById("verifyBtn");
    const otpInput = document.getElementById("otpInput");
    const otpError = document.getElementById("otp-alert");

    verifyBtn.addEventListener("click", (e) => {
        const enteredOTP = otpInput.value.trim();
        const storedOTP = localStorage.getItem("otpData");

        if (enteredOTP === storedOTP) {
            // OTP is correct, proceed with further actions
            alert("OTP Verified Successfully!");
            // Perform further actions like allowing user to proceed
            window.location.href="http://127.0.0.1:5506/Agriculture-Machinery-Rental-Website/Updatepass.html"
        } else {
            e.preventDefault();
            // OTP is incorrect
            otpError.textContent = "Invalid OTP. Please try again.";
        }
    });
});