<?php

    $ID = $_POST['qid'];

    $host = "localhost";
    $user = "root";
    $dbname = "mysql";

    $dsn = "mysql:dbname=$dbname;host=$host";
    $pdo = new PDO($dsn, $user);

    $res = $pdo->prepare("SELECT * FROM quote WHERE qID ='$ID';");
    $res->execute();

    $msg = $res->fetch(PDO::FETCH_ASSOC);

    $res = $pdo->prepare("SELECT email FROM quote WHERE qID ='$ID';");
    $res->execute();

    $email = $res->fetch(PDO::FETCH_ASSOC);

    mail(implode($email), "Sanctioned Quote", implode($msg));

    $res = NULL;
    $pdo = NULL;

?>