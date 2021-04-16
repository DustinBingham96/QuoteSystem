<?php
    $host = "localhost";
    $user = "root";
    $dbname = "mysql";

    $userID = $_POST['id'];
    $pass = $_POST['pass'];

    $dsn = "mysql:dbname=$dbname;host=$host";
    $pdo = new PDO($dsn, $user);
    $sql = "SELECT * FROM sales WHERE userID = '$userID'";

    $res = $pdo->prepare($sql);
    $res->execute();

    $row = $res->fetch(PDO::FETCH_ASSOC);

    if($userID == $row['userID'])
    {
        if($userID==$row['userID'] && $pass == $row['password'])
        {
            echo 1;
        }
        else{
            echo 99;
        }
    }
    

    $res = NULL;
    $pdo = NULL;


?>

    