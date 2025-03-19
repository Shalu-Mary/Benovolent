<?php
session_start();
include 'config/database.php';

$error = '';
$success = '';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $conn->real_escape_string($_POST['name']);
    $email = $conn->real_escape_string($_POST['email']);
    $password = $_POST['password'];
    $confirm_password = $_POST['confirm_password'];

    if ($password !== $confirm_password) {
        $error = "Passwords do not match!";
    } else {
        $check_sql = "SELECT id FROM users WHERE email='$email'";
        $check_result = $conn->query($check_sql);
        
        if ($check_result->num_rows > 0) {
            $error = "Email already registered!";
        } else {
            $hashed_password = password_hash($password, PASSWORD_DEFAULT);
            $sql = "INSERT INTO users (name, email, password) VALUES ('$name', '$email', '$hashed_password')";

            if ($conn->query($sql) === TRUE) {
                $success = "Registration successful! Please login.";
                header("refresh:2;url=login.php");
            } else {
                $error = "Error: " . $sql . "<br>" . $conn->error;
            }
        }
    }

    $conn->close();
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Register - Benevolent Beginnings</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600&family=Playfair+Display:wght@400;500;600&display=swap" rel="stylesheet">
    <link href="https://cdn.lineicons.com/4.0/lineicons.css" rel="stylesheet" />
    <link rel="stylesheet" href="Pages/Styles/login.css">
</head>
<body>
  <div class="container" id="container">
    <div class="logo-section">
      <a href="index.php">
        <div class="logo-container">
          <img src="Assets/logo-removebg-preview.png" alt="Benevolent Beginnings Logo">
          <h1>Benevolent Beginnings</h1>
        </div>
      </a>
    </div>
    <div class="form-container register-container">
      <form method="POST" action="">
        <h1>Join Our Community</h1>
        <p>Create an account to track your donations and get involved</p>
        <?php if($error): ?>
          <div class="alert alert-danger"><?php echo $error; ?></div>
        <?php endif; ?>
        <?php if($success): ?>
          <div class="alert alert-success"><?php echo $success; ?></div>
        <?php endif; ?>
        <input type="text" name="name" placeholder="Full Name" required>
        <input type="email" name="email" placeholder="Email Address" required>
        <input type="password" name="password" placeholder="Password" required>
        <input type="password" name="confirm_password" placeholder="Confirm Password" required>
        <button type="submit">Sign Up</button>
        <span>Or login with</span>
        <div class="social-container">
          <a href="#" class="social"><i class="lni lni-facebook-fill"></i></a>
          <a href="#" class="social"><i class="lni lni-google"></i></a>
          <a href="#" class="social"><i class="lni lni-linkedin-original"></i></a>
        </div>
      </form>
    </div>
    <div class="overlay-container">
      <div class="overlay">
        <div class="overlay-panel overlay-left">
          <h2>Welcome Back!</h2>
          <p>Continue your journey of compassion and support by logging into your account</p>
          <a href="login.php"><button class="ghost" id="login">Login <i class="lni lni-arrow-left login"></i></button></a>
        </div>
        <div class="overlay-panel overlay-right">
          <h2>Join Our Mission</h2>
          <p>Sign up to become part of our community and help us create a world where everyone has the opportunity to thrive</p>
          <a href="login.php"><button class="ghost" id="login">Login <i class="lni lni-arrow-right register"></i></button></a>
        </div>
      </div>
    </div>
  </div>
  <script src="script.js"></script>
</body>
</html>
