<?php

  $qid = $_POST['qid'];
  $cid = $_POST['cid'];
  $quote = $_POST['quote'];
  $secret = $_POST['secret'];
  $finalized = $_POST['finalized'];

  $host = "localhost";
  $user = "root";
  $dbname = "mysql";

  $dsn = "mysql:dbname=$dbname;host=$host";
  $pdo = new PDO($dsn, $user);

  $res = $pdo->prepare("UPDATE newquote SET cID = '$cid', quote = '$quote', secret = '$secret', finalized = '$finalized' WHERE qID = '$qid'");
  $res->execute();

  $res = NULL;
  $pdo = NULL;

 ?>