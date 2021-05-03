<?php require_once "inc/header.inc.php" ?>

    <!------ MORPION.CSS ------>
    <link rel="stylesheet" href="assets/css/morpion.css">
    <!------ MOPRION.JS ------>
    <script src="assets/js/morpion.js" defer></script>

<!-------------------------------------------------------------------------------------->

    <div class="container">
        <div class="row justify-content-center p-5">
            <canvas id="canvasMorpion">
                
            </canvas>
        </div>

        <h3 id="joueur"> Au joueur de placer une croix </h3>
        <p>Le jeu n'est actuellement pas 100% fonctionnel. En effet, le click n'est pas synchronisé avec les cases. De plus, il ne détermine pas de vainqueur, ni si la partie est finie, pour le moment.
        </p>
    </div>

<?php require_once "inc/footer.inc.php" ?>