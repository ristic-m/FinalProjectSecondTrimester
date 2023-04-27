<?php require "partials/head.php" ?>
<?php require "partials/nav.php" ?>

<h1>All users</h1>

<ul>
    <?php foreach ($songs as $song): ?>
        <li>
            <?= $song->id." - ".$song->name . " - " . $song->artist_id ?>
            <a href="/songs/show?id=<?= $song->id ?>">Show</a>

            <a href="/songs/edit?id=<?= $song->id ?>">Edit</a>
            <a href="/songs/delete?id=<?= $song->id ?>">Delete</a>
        </li>
    <?php endforeach ?>
</ul>
<?php require "partials/footer.php" ?>
