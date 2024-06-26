<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bean's Home Services</title>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap" rel="stylesheet">
    <style>
        body {
            font-family: 'Roboto', sans-serif;
            color: #333;
            transition: background-color 0.5s ease, color 0.5s ease;
        }

        .dark-theme {
            background-color: #121212;
            color: white;
        }

        .light-theme {
            background-color: white;
            color: black;
        }

        .navbar {
            overflow: hidden;
            background-color: #f0f0f0;
            color: #333;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 16px;
        }

        .navbar a {
            float: left;
            display: block;
            color: #333;
            text-align: center;
            padding: 14px 16px;
            text-decoration: none;
        }

        .navbar a:hover {
            background-color: #ddd;
            color: black;
        }

        .theme-switch-wrapper {
            display: flex;
            align-items: center;
        }

        .theme-switch {
            display: inline-block;
            height: 34px;
            position: relative;
            width: 60px;
        }

        .theme-switch input {
            display: none;
        }

        .slider {
            background-color: #ccc;
            bottom: 0;
            cursor: pointer;
            left: 0;
            position: absolute;
            right: 0;
            top: 0;
            transition: .4s;
        }

        .slider:before {
            background-color: white;
            bottom: 4px;
            content: "";
            height: 26px;
            left: 4px;
            position: absolute;
            transition: .4s;
            width: 26px;
        }

        input:checked+.slider {
            background-color: #2196F3;
        }

        input:checked+.slider:before {
            transform: translateX(26px);
        }

        .slider.round {
            border-radius: 34px;
        }

        .slider.round:before {
            border-radius: 50%;
        }

        /* Responsive layout - makes the menu and the content stack on top of each other */
        @media (max-width: 600px) {
            .navbar a {
                float: none;
                width: 100%;
            }
        }

        /* Center text for larger screens */
        @media (min-width: 601px) {
            .navbar a {
                text-align: center;
            }
        }

        /* Added styling for images */
        .section-image {
            max-width: 100%;
            height: auto;
        }

        /* Styling for sections */
        .section {
            padding: 50px;
            text-align: center;
        }
    </style>
</head>

<body class="dark-theme">

    <div class="navbar">
        <div>
            <a href="#car-washing">Car Washing</a>
            <a href="#home-pet-sitting">Home and Pet Sitting</a>
            <a href="#leaf-raking">Leaf Raking</a>
            <a href="#contact">Contact</a>
        </div>
        <div class="theme-switch-wrapper">
            <label class="theme-switch" for="checkbox">
                <input type="checkbox" id="checkbox" checked>
                <div class="slider round"></div>
            </label>
        </div>
    </div>

    <div id="car-washing" class="section">
        <h2>Car Washing</h2>
        <p>Get your car sparkling clean! For a small car you can expect about $18, and small trucks and SUVs you can expect around $20. Larger vehicles will cost around $25-$30. These prices are aproxamite and will be addresed on a case by case basis. This service may not be avaliable on certan dates.</p>
        <img src="https://th.bing.com/th/id/OIP.6WKDaEllZF6VQrsnREBKKgHaEy?w=281&h=183&c=7&r=0&o=5&pid=1.7" alt="Car Washing" class="section-image">
    </div>

    <div id="home-pet-sitting" class="section">
        <h2>Home and Pet Sitting</h2>
        <p>Reliable care for your home and furry friends, for just one cat you can expect about $14 a day, but can very dramaticaly. Dog walking may also be avalable along with other pet related services.</p>
        <img src="data:image/jpeg;base64,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" alt="Home and Pet Sitting" class="section-image">
    </div>

    <div id="leaf-raking" class="section">
        <h2>Leaf Raking</h2>
        <p>Let us take care of this tedious task, prices are determined on a case by case basis.</p>
        <img src="https://www.lawnstarter.com/blog/wp-content/uploads/2020/07/leaf-rake.jpg" alt="Leaf Raking" class="section-image">
    </div>

    <div id="contact" class="section">
        <h2>Contact</h2>
        <p>Thank you for your intrest in my work! For pricing and service requests, you can get in touch with me at beanhousesitting@gmail.com</p>
    </div>

    <script>
        const checkbox = document.getElementById('checkbox');
        const body = document.body;

        checkbox.addEventListener('change', function () {
            if (this.checked) {
                body.classList.remove('dark-theme');
                body.classList.add('light-theme');
            } else {
                body.classList.remove('light-theme');
                body.classList.add('dark-theme');
            }
        });
    </script>

</body>

</html>
