<?php

header('Content-Type: application/json');
$host = "localhost";
$user = "root";
$dbname = "mysql";

$dsn = "mysql:dbname=$dbname;host=$host";
$pdo = new PDO($dsn, $user);

$res = $pdo->prepare("SELECT * FROM sales");
$res->execute();

$data = $res->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($data);
    
    

$res = NULL;
$pdo = NULL;

?>