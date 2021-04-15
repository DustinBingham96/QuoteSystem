<?php

    $cid = $_POST['cid'];
    $qtext = $_POST['qtext'];
    $stext = $_POST['stext'];
    $email = $_POST['email'];

    $host = "localhost";
    $user = "root";
    $dbname = "mysql";
  
    $dsn = "mysql:dbname=$dbname;host=$host";
    $pdo = new PDO($dsn, $user);

    $res = $pdo->prepare("INSERT INTO newquote (cID, aID, quote, secret, email) VALUES ('$cid', 1, '$qtext', '$stext', '$email')");
    $res->execute();

    $res = NULL;
    $pdo = NULL;

?>