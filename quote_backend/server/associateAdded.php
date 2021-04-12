<html><head><title>AssociateAdded</title></head><body>
<?php

  include("library.php");

  try {
    $userID = $_POST['id'];
    $password = $_POST['pass'];
    $commission = $_POST['comm'];
    $address = $_POST['addr'];

    $host = "localhost";
    $user = "root";
    $dbname = "mysql";

    $dsn = "mysql:dbname=$dbname;host=$host";
    $pdo = new PDO($dsn, $user); //connects to the database
    $pdo->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);

    //query to get the count of the rows in the S table to use for the primary key
    $sql = $pdo->query("SELECT COUNT(`ID`) FROM sales;");
    $sql1 = $sql->fetchColumn();
        //adds 1 to the current count of the S table for the primary key
    $answer = $sql1+1;
    //prepare statement for the user input that was given, using the variable answer to set up the primary key
    $prepared = $pdo->prepare("INSERT INTO sales(ID,userID,password,commission,address)VALUES(:S,:userID,:password,:commission,:address)");
    $success = $prepared->execute(array(':ID' => $answer, ':userID' => $_POST["userID"], ':password' => $_POST["password"], ':commission' => $_POST["commission"], ':address' => $_POST["address"] ));

    //shows that the supplier was added and allows the user a button to go back to the home
    echo "<h3>Associate Added!</h3>";
    //shows a button to allows the user to go back to the home page
    echo "<form action=\"http://students.cs.niu.edu/~z1865959/home.php\" method=\"POST\">";
    echo "<input type=\"submit\" value=\"Home Page\" />";
    echo "</form>";
}
  catch(PDOexception $e) {
    echo "Connection to database failed: " . $e->getMessage();
}
?>
</body></html>
