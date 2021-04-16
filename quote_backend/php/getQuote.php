<?php

    $qid = $_POST['qid'];

    $host = "localhost";
    $user = "root";
    $dbname = "mysql";

    $dsn = "mysql:dbname=$dbname;host=$host";
    $pdo = new PDO($dsn, $user);

    $res = $pdo->prepare("SELECT cID, quote, secret, finalized FROM newquote WHERE qID ='$qid'");
    $res->execute();

    $row = $res->fetch(PDO::FETCH_ASSOC);

    echo $row['cID'];
    echo  "/";
    echo $row['quote'];
    echo "/";
    echo $row['secret'];
    echo "/";
    echo $row['finalized']; 

    $res = NULL;
    $pdo = NULL;

?>