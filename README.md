# beanshomeservices
<!DOCTYPE html>
<html>
<head>
    <title>My Portfolio</title>
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
            display:none;
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
        input:checked + .slider {
            background-color: #2196F3;
        }
        input:checked + .slider:before {
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
    </style>
</head>
<body class="dark-theme">

<div class="navbar">
  <div>
    <a href="#header">Home</a>
    <a href="#about">About</a>
    <a href="#services">Portfolio</a>
    <a href="#contact">Contact</a>
  </div>
  <div class="theme-switch-wrapper">
    <label class="theme-switch" for="checkbox">
      <input type="checkbox" id="checkbox" checked>
      <div class="slider round"></div>
    </label>
  </div>
</div>

<div id="header">
  <h1>Welcome to My Website</h1>
  <p>About Me</p>
  <button onclick="alert('I am a techie 13-year-old saving up for an Xbox, and yes, this website is jank, but I coded and hosted the website myself using GitHub')">More</button>
</div>

<div id="about">
  <h2>About The Business</h2>
  <p>Some information about me.</p>
  <button onclick="alert('I am Jacob Bean, I am 13 years old and I want to help you with all of your home needs! Whether that is from house sitting to leaf raking, I am the kid for the job!')">Click Me</button>
</div>

<div id="services">
  <h2>Services</h2>
  <p>Examples of my work.</p>
  <button onclick="alert('I can provide you with leaf raking, car washing, home and pet sitting, and everything you need for a vacation or the holidays')">Click Me for more </button>
</div>

<div id="contact">
  <h2>Contact Me</h2>
  <p>If you have any questions, feel free to contact me.</p>
  <button onclick="alert('Thank you for your interest in my work, You can reach me at beanshousesitting@gmail.com')">Click Me</button>
</div>

<script>
    const body = document.body;
    const themeSwitch = document.getElementById('checkbox');
    themeSwitch.addEventListener('change', () => {
        if (themeSwitch.checked) {
            body.classList.remove('light-theme');
            body.classList.add('dark-theme');
        } else {
            body.classList.remove('dark-theme');
            body.classList.add('light-theme');
        }
    });
</script>

</body>
</html>
