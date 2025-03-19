<?php
session_start();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Benevolent Beginnings | Charity Organization</title>
    <link rel="stylesheet" href="Pages/Styles/indexstyle.css">
    <link rel="stylesheet" href="Pages/Styles/popup.css">
    <script src="Scripts/popup.js" defer></script>
</head>
<body>
    <header>
        <nav>
            <div class="logo-container">
                <img src="Assets/logo-removebg-preview.png" alt="Benevolent Beginnings Logo">
                <h1>Benevolent Beginnings</h1>
            </div>
            <ul>
                <li><a href="index.php" class="active">Home</a></li>
                <li><a href="Pages/about.html">About Us</a></li>
                <li><a href="Pages/services.html">Services</a></li>
                <li><a href="Pages/stats.html">Stats</a></li>
                <li><a href="Pages/chatbot.html">Support Chat</a></li>
                <li><a href="login.php">Logout</a></li>
            </ul>
        </nav>
    </header>

    <section class="hero">
        <div class="hero-content">
            <h2>Changing Lives, One Step at a Time</h2>
            <p>Join us in our mission to support both humans and animals in need.</p>
            <a href="Pages/donations.html" class="btn">Make a Donation</a>
        </div>
    </section>

    <section class="our-work">
        <div class="container">
            <h2>Our Impact</h2>
            <div class="work-container">
                <div class="work-item">
                    <img src="Assets/food_and_nutrition.jpg" alt="Meals Provided">
                    <div class="work-item-content">
                        <h3>10,000+ Meals Provided</h3>
                        <p>Nourishing communities with healthy, sustainable food sources.</p>
                    </div>
                </div>
                <div class="work-item">
                    <img src="Assets/animalrescue.jpeg" alt="Rescued Animals">
                    <div class="work-item-content">
                        <h3>500+ Rescued Animals</h3>
                        <p>Finding loving homes and providing care for abandoned animals.</p>
                    </div>
                </div>
                <div class="work-item">
                    <img src="Assets/familyhelp.jpg" alt="Families Helped">
                    <div class="work-item-content">
                        <h3>1,000+ Families Helped</h3>
                        <p>Supporting families through difficult times with resources and care.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <div class="chat-popup-button" id="chatPopupButton">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
        <span>Chat with us</span>
    </div>

    <script>
        document.getElementById('chatPopupButton').addEventListener('click', function() {
            window.location.href = 'chatbot.php';
        });
    </script>

    <footer>
        <p>&copy; 2025 Benevolent Beginnings - All Rights Reserved.</p>
        <ul>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
        </ul>
    </footer>
</body>
</html>
