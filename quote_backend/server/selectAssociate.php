<!DOCTYPE html>
<html lang=EN><head><title>AssocaiteSelection</title></head><body>
<?php

  include("drawTable.php");
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
    $pdo->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION); //sets up the error mode attributes for debugging

    //starts a prepare statement since it will be using user input
    $rs = $pdo->prepare("SELECT * FROM S WHERE S = ?;");
    //gets the supplier that was selected from the user
    $rs->execute(array($_GET["associate"]));
    $rows = $rs->fetchAll(PDO::FETCH_ASSOC);

    echo "<h1>Associate Selected</h1>";
    //calls the outside function to show the information in a table
    draw_table($rows);

    echo "<br/>";
        //shows a button for the user to go back to the home page
    echo "<form action=\"http://students.cs.niu.edu/~z1865959/home.php\" method=\"POST\">";
    echo "<input type=\"submit\" value=\"Home Page\" />";
    echo "</form>";
  }
  catch(PDOexception $e) {
    echo "Connection to database failed: " . $e->getMessage();
}
?>
</body></html>
