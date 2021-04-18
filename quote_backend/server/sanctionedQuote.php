<?php

    $ID = $_POST['qid'];

    $host = "localhost";
    $user = "root";
    $dbname = "mysql";

    $dsn = "mysql:dbname=$dbname;host=$host";
    $pdo = new PDO($dsn, $user);

    $res = $pdo->prepare("SELECT cID, quote, email FROM quote WHERE qID ='$ID';");
    $res->execute();

    $msg = $res->fetch(PDO::FETCH_ASSOC);

    $res = $pdo->prepare("SELECT email FROM quote WHERE qID ='$ID';");
    $res->execute();

    $email = $res->fetch(PDO::FETCH_ASSOC);

    mail($email, "Sanctioned Quote", $msg);

    $res = NULL;
    $pdo = NULL;

?>