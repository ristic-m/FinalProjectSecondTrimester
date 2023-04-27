<?php require "partials/head.php" ?>

<form action="login" method="post">
    <input type="text" name="email" placeholder="example@email.com">
    <input type="password" name="password">

    <button type="submit">Login</button>
    <a href="register">Register</a>
</form>


<?php require "partials/footer.php" ?>
