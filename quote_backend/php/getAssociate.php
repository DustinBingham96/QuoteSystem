<?php

    $ID = $_POST['id'];

    $host = "localhost";
    $user = "root";
    $dbname = "mysql";

    $dsn = "mysql:dbname=$dbname;host=$host";
    $pdo = new PDO($dsn, $user);

    $res = $pdo->prepare("SELECT * FROM sales WHERE ID='$ID';");
    $res->execute();

    $row = $res->fetch(PDO::FETCH_ASSOC);

    echo $row['userID'];
    echo  " ";
    echo $row['password'];
    echo " ";
    echo $row['commission'];
    echo " ";
    echo $row['address']; 

    $res = NULL;
    $pdo = NULL;

?>