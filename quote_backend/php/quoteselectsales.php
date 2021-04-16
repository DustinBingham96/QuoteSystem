<?php 

$ID = $_POST["ID"];

header('Content-Type: application/json');
$host = "localhost";
$user = "root";
$dbname = "mysql";

$dsn = "mysql:dbname=$dbname;host=$host";
$pdo = new PDO($dsn, $user);

$res = $pdo->prepare("SELECT qID, cID, quote, secret, email, finalized FROM newquote WHERE aID = '$ID'");
$res->execute();

$data = $res->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($data);
    
    

$res = NULL;
$pdo = NULL;

?>