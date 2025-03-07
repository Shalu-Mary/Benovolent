document.addEventListener('DOMContentLoaded', function() {
  const registerButton = document.getElementById("register");
  const loginButton = document.getElementById("login");
  const container = document.getElementById("container");
  const logoText = document.querySelector('.logo-container h1');
  const loginForm = document.querySelector('.login-container form');
  const signUpForm = document.querySelector('.register-container form');

  // Panel switching animation
  registerButton.addEventListener("click", () => {
    container.classList.add("right-panel-active");
    // Change logo text color to white when in register mode
    logoText.classList.add('white-text');
  });

  loginButton.addEventListener("click", () => {
    container.classList.remove("right-panel-active");
    // Change logo text color back to green/primary when in login mode
    logoText.classList.remove('white-text');
  });

  // Add form submission handlers
  loginForm.addEventListener("submit", function(e) {
    e.preventDefault(); // Prevent default form submission
    window.location.href = "../Pages/index.html"; // Redirect to home page
  });

  signUpForm.addEventListener("submit", function(e) {
    e.preventDefault(); // Prevent default form submission
    window.location.href = "../Pages/index.html"; // Redirect to home page after signup
  });

  // Add smooth transitions for form elements
  const inputs = document.querySelectorAll('input');
  inputs.forEach(input => {
    input.addEventListener('focus', function() {
      this.parentElement.classList.add('focused');
    });
    
    input.addEventListener('blur', function() {
      if (this.value === '') {
        this.parentElement.classList.remove('focused');
      }
    });
  });

  // Add subtle floating animation to buttons
  const animateButtons = () => {
    const buttons = document.querySelectorAll('.ghost');
    buttons.forEach(button => {
      button.classList.add('floating');
      setTimeout(() => {
        button.classList.remove('floating');
      }, 1000);
    });
  };
  
  // Run the animation every 5 seconds
  setInterval(animateButtons, 5000);
  
  // Initialize animation
  setTimeout(animateButtons, 1500);
});