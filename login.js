function login() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value;

  const users = JSON.parse(localStorage.getItem("users")) || [];

  const found = users.find(user => user.username === username && user.password === password);

  const message = document.getElementById("login-message");

  if (found) {
    alert("Login successful!");
    window.location.href = "t5.html"; // or your dashboard page
  } else {
    message.textContent = "Invalid username or password.";
    message.style.color = "red";
  }
}
