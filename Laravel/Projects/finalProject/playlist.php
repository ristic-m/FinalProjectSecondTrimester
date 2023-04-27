<?php

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SAEify | Playlist</title>

    <!-- imports -->
    <link rel="stylesheet" href="CSS/style.css">
    <link rel="stylesheet" href="CSS/playlistStyle.css">
    <script src="playlistScript.js" defer></script>

    <!-- fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Kanit:wght@100;200;300;400;500;600;700;800;900&family=Ubuntu:wght@300;400;500;700&display=swap" rel="stylesheet">

    <!--    axios-->
    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>

</head>
<body>
<div class="container">

    <div class="navContainer">
        <nav class="navContainer">
            <ul>
                <li><a href="/profile.html"><img src="/images/flaticon/userProfile.png" alt="userProfile" class="icon"></a></li>
                <li><a href="/home.html"><img src="/images//flaticon/home.png" alt="home" class="icon"></a></li>
                <li><a href="explore.html"><img src="/images/flaticon/explore.png" alt="explore" class="icon"></a></li>
                <li><a href="playlist.html"><img src="/images/flaticon/playlist.png" alt="playlist" class="icon"></a></li>
            </ul>
        </nav>

        <a href="/index.html" id="logout">Log Out</a>
        <p class="footer">&#169;2023</p>
    </div>

    <main class="mainContainer">
        <h1>Your personal playlist</h1>

        <div class="songContainer">
            <div class="songComponent">

            </div>

        </div>
</div>

</main>
</div>
</body>
</html>
