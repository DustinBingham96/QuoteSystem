<?php

  $ID = $_POST['ID'];
  $userID = $_POST['id'];
  $password = $_POST['pass'];
  $commission = $_POST['comm'];
  $address = $_POST['addr'];

  $host = "localhost";
  $user = "root";
  $dbname = "mysql";

  $dsn = "mysql:dbname=$dbname;host=$host";
  $pdo = new PDO($dsn, $user);

  $res = $pdo->prepare("UPDATE sales SET userID = '$userID', password = '$password', commission = '$commission', address = '$address' WHERE ID = '$ID'");
  $res->execute();

  echo $ID;

  $res = NULL;
  $pdo = NULL;

 ?>