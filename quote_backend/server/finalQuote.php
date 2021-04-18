<?php

    $ID = $_POST['qid'];
    $finalPrice = $_POST['finalprice'];
    $finalPriceMsg = "Final price - " . $finalPrice;
    $processingDate = '\0';         // outside the scope of this program
    $processDate = "Processing date - " . $processingDate;

    $host = "localhost";
    $user = "root";
    $dbname = "mysql";

    $dsn = "mysql:dbname=$dbname;host=$host";
    $pdo = new PDO($dsn, $user);

    // getting the information for the msg portion of the email
    $res = $pdo->prepare("SELECT cID, quote, email FROM quote WHERE qID ='$ID';");
    $res->execute();

    $msg = $res->fetch(PDO::FETCH_ASSOC);

    // getting the associate ID based on the quote ID to use to get the commission for the associate
    $res = $pdo->prepare("SELECT aID FROM quote WHERE qID ='$ID';");
    $res->execute();

    $aID = $res->fetch(PDO::FETCH_ASSOC);

    // getting the commission based on the associate ID that was just grabbed previously
    $res = $pdo->prepare("SELECT commission FROM sales WHERE ID ='$aID';");
    $res->execute();

    $commission = $res->fetch(PDO::FETCH_ASSOC);

    //update the commission based on the aID
    // commission += final_price * commission %
    $commission += $finalPrice * 0.025;

    // updates the new commission amount for the associate that was responsible for the quote
    $res = $pdo->prepare("UPDATE sales SET commission = '$commission' WHERE aID ='$aID';");
    $res->execute();

    // grabs the email of the customer for the mail() function below
    $res = $pdo->prepare("SELECT email FROM quote WHERE qID ='$ID';");
    $res->execute();

    $email = $res->fetch(PDO::FETCH_ASSOC);

    // sends the information to the customer based on the email address provided in the customer information
    mail($email, "Final Quote - Purchase Order", $processDate, $finalPriceMsg, $msg);

    $res = NULL;
    $pdo = NULL;

?>