<?php require "partials/head.php" ?>
<?php require "partials/nav.php" ?>


    <h2>Tasks</h2>
    <?php foreach($tasks as $task): ?>
        <?php if(!$task->completed):?>
            <p><?= $task->user->email ?> - <?= $task->description ?></p>
        <?php else: ?>
            <p>
                <strike>
                    <?= $task->user->email ?> -
                    <?= $task->description ?>
                </strike>
            </p>
        <?php endif ?>
    <?php endforeach ?>

<?php require "partials/footer.php" ?>