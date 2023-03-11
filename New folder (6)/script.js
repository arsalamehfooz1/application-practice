function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var errorMessage = document.getElementById("error-message");
  
    if (username === "" || password === "") {
      errorMessage.innerHTML = "Please enter your username and password.";
      return;
    }
  
    if (username === "admin" && password === "password") {
      alert("Login successful!");
    } else {
      errorMessage.innerHTML = "Invalid username or password.";
    }
  }
  function login() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var errorMessage = document.getElementById("error-message");
  
    if (email === "" || password === "") {
      errorMessage.innerHTML = "Please enter your email and password.";
      return;
    }
  }
  
   