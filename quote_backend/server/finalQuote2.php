<?php

$ID = $_POST['qid'];
$finalPrice = $_POST['finalprice'];

$host = "localhost";
$user = "root";
$dbname = "mysql";

$dsn = "mysql:dbname=$dbname;host=$host";
$pdo = new PDO($dsn, $user);

// getting the associate ID based on the quote ID
$res = $pdo->prepare("SELECT aID FROM quote WHERE qID ='$ID';");
$res->execute();

$aID = $res->fetch(PDO::FETCH_ASSOC);

// getting the customer ID based on the quote ID
$res = $pdo->prepare("SELECT cID FROM quote WHERE qID ='$ID';");
$res->execute();

$cID = $res->fetch(PDO::FETCH_ASSOC);

// grabs the email of the customer for the mail() function below
$res = $pdo->prepare("SELECT email FROM quote WHERE qID ='$ID';");
$res->execute();

$email = $res->fetch(PDO::FETCH_ASSOC);

$url = 'http://blitz.cs.niu.edu/PurchaseOrder/';
$data = array(
	'order' => $ID, 
	'associate' => $aID,
	'custid' => $cID, 
	'amount' => $finalPrice);
		
$options = array(
    'http' => array(
        'header' => array('Content-type: application/json', 'Accept: application/json'),
        'method'  => 'POST',
        'content' => json_encode($data)
    )
);

$context  = stream_context_create($options);
$result = file_get_contents($url, false, $context);

// sends the information to the customer based on the email address provided in the customer information
mail($email, "Final Quote - Purchase Order", $processDate, $finalPriceMsg, $result);

echo($result);
?>