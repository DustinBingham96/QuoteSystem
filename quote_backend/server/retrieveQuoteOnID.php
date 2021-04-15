<?php

    $ID = $_POST['qid'];

    $host = "localhost";
    $user = "root";
    $dbname = "mysql";

    $dsn = "mysql:dbname=$dbname;host=$host";
    $pdo = new PDO($dsn, $user);

    $res = $pdo->prepare("SELECT * FROM newquote WHERE qID ='$ID';");
    $res->execute();

    $data = $res->fetch(PDO::FETCH_ASSOC);

    echo json_encond($data);

    $res = NULL;
    $pdo = NULL;

?>