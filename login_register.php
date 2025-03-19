<?php
session_start();
include 'config/database.php';

$error = ''; // Ensure $error is initialized
$success = ''; // Ensure $success is initialized
?>


<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Benevolent Beginnings - Login</title>
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600&family=Playfair+Display:wght@400;500;600&display=swap" rel="stylesheet">
  <link href="https://cdn.lineicons.com/4.0/lineicons.css" rel="stylesheet" />
  <link rel="stylesheet" href="Pages/Styles/login.css">
</head>
<body>
  <div class="container" id="container">
    <div class="logo-section">
      <a href="index.php">
        <div class="logo-container">
          <img src="logo-removebg-preview.png" alt="Benevolent Beginnings Logo">
          <h1>Benevolent Beginnings</h1>
        </div>
      </a>
    </div>

    <div class="form-container login-container">
      <form method="POST" action="login.php">
        <h1>Welcome Back</h1>
        <p>Login to access your account and continue making a difference</p>
        <?php if($error): ?>
          <div class="alert alert-danger"><?php echo $error; ?></div>
        <?php endif; ?>
        <input type="email" name="email" placeholder="Email Address" required>
        <input type="password" name="password" placeholder="Password" required>
        <button type="submit">Login</button>
        <span>Or sign in with</span>
        <div class="social-container">
          <a href="#" class="social"><i class="lni lni-facebook-fill"></i></a>
          <a href="#" class="social"><i class="lni lni-google"></i></a>
          <a href="#" class="social"><i class="lni lni-linkedin-original"></i></a>
        </div>
        <p>Don't have an account? <a href="register.php">Register here</a></p>
      </form>
    </div>
  </div>
</body>
</html>
