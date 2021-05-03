<?php 
session_start();

//------------------------------------------------------------------------------------------
// Connexion à la BDD
// $pdo = new PDO('mysql:host=localhost;dbname=portfolio', 'root', '', array(PDO::ATTR_ERRMODE=>PDO::ERRMODE_WARNING, PDO::MYSQL_ATTER_INIT_COMMAND=>"SET NAMES UTF8") );

//------------------------------------------------------------------------------------------
define( 'URL', 'http://localhost/project/portfolio/' );

$content = '';
$error = '';

require_once "functions.inc.php";