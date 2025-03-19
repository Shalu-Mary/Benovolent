<?php
session_start();
include 'config/database.php';

$error = '';
$success = '';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $conn->real_escape_string($_POST['email']);
    $password = $_POST['password'];

    $sql = "SELECT * FROM users WHERE email='$email'";
    $result = $conn->query($sql);

    if ($result->num_rows == 1) {
        $row = $result->fetch_assoc();
        if (password_verify($password, $row['password'])) {
            $_SESSION['user_id'] = $row['id'];
            $_SESSION['user_name'] = $row['name'];
            $success = "Login successful! Welcome, " . $row['name'];
            header("Location: index.php");
            exit();
        } else {
            $error = "Invalid password!";
        }
    } else {
        $error = "No user found with this email!";
    }

    $conn->close();
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Benevolent Beginnings - Login</title>
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
    <div class="form-container login-container">
      <form method="POST" action="">
        <h1>Welcome Back</h1>
        <p>Login to access your account and continue making a difference</p>
        <?php if($error): ?>
          <div class="alert alert-danger"><?php echo $error; ?></div>
        <?php endif; ?>
        <?php if($success): ?>
          <div class="alert alert-success"><?php echo $success; ?></div>
        <?php endif; ?>
        <input type="email" name="email" placeholder="Email Address" required>
        <input type="password" name="password" placeholder="Password" required>
        <div class="content">
          <div class="checkbox">
            <input type="checkbox" name="remember" id="remember">
            <label for="remember">Remember me</label>
          </div>
          <div class="pass-link">
            <a href="#">Forgot password?</a>
          </div>
        </div>
        <button type="submit">Login</button>
        <span>Or sign in with</span>
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
          <button class="ghost" id="login">Login <i class="lni lni-arrow-left login"></i></button>
        </div>
        <div class="overlay-panel overlay-right">
          <h2>Join Our Mission</h2>
          <p>Sign up to become part of our community and help us create a world where everyone has the opportunity to thrive</p>
          <a href="register.php"><button class="ghost" id="register">Register <i class="lni lni-arrow-right register"></i></button></a>
        </div>
      </div>
    </div>
  </div>
  <script src="script.js"></script>
</body>
</html>
