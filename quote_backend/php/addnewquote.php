<?php

    $Lhost = "blitz.cs.niu.edu";
    $Lport = "3306";
    $Ldbname = "csci467";
    $Luser = "student";
    $Lpassword = "student";

    $cid = $_POST['cid'];
    $aid = $_POST['aid'];
    $qtext = $_POST['qtext'];
    $stext = $_POST['stext'];
    $email = $_POST['email'];

    $host = "localhost";
    $user = "root";
    $dbname = "mysql";
    
    $dsn2 = "mysql:dbname=$Ldbname;host=$Lhost";
    $dsn = "mysql:dbname=$dbname;host=$host";
    $pdo = new PDO($dsn2, $Luser, $Lpassword);

    


    $pdo = new PDO($dsn, $user);
    $res = $pdo->prepare("INSERT INTO quote (cID, aID, quote, secret, email) VALUES ('$cid', '$aid', '$qtext', '$stext', '$email')");
    $res->execute();

    




    

    $res = NULL;
    $pdo = NULL;

?>