
let login = document.getElementById("flog");
login.addEventListener("click", (e) => {
    e.preventDefault();
    let email_input = document.getElementById("username").value.trim();
    let password_input = document.getElementById("Password").value.trim();

  let errorMessage = "";

  if (!email_input) {
    errorMessage += "Please enter Email.\n";
  }

  if (!password_input) {
    errorMessage += "Please enter password.\n";
  }

  if (errorMessage) {
    alert(errorMessage);
    return;
  }
  fetch(`http://localhost:8080/login?email=${encodeURIComponent(email_input)}&password=${encodeURIComponent(password_input)}`, {
    method: "GET",
    headers: {
      "Content-Type": "Application/json",
    },

  })
    .then((Response) => {
      if (Response.ok) {
        return Response.json();
      } else {
        throw new Error("Invalid user name or password");
      }
    })
    .then((data) => {
      window.location.href = "http://127.0.0.1:5506/Agriculture---Rental-Website/index.html"
    })
    .catch(() => {
      alert("Invalid user name or password");
    });
})