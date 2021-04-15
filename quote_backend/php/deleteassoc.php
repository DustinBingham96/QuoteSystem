<?php

    $ID = $_POST['id'];

    $host = "localhost";
    $user = "root";
    $dbname = "mysql";

    $dsn = "mysql:dbname=$dbname;host=$host";
    $pdo = new PDO($dsn, $user);

    $res = $pdo->prepare("DELETE FROM sales WHERE ID='$ID';");
    $res->execute();

    $res = NULL;
    $pdo = NULL;

?>