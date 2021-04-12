<!DOCTYPE html>
<html lang=EN><head><title>Associates</title></head><body>
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
    $pdo->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION); //sets the error mode attribute for debugging

    //query to select all the information from the S table to be able to display it to the user
    $rs = $pdo->query("SELECT * FROM S;");
    $rows = $rs->fetchAll(PDO::FETCH_ASSOC);

    echo "<h1>Associates</h1>";
    //calls outside function called draw table, passing the variable called rows that was the result set of the query
    draw_table($rows);
    echo "<br/>";
    //starts a form to allow the user to select a supplier to show
    echo "Select an Associate to show information";
    echo "<form action=\"http://localhost:3000/selectAssociate.php\" method=\"GET\">";
    echo "<select name=\"associate\">";
  //  displays all the S's that are available for the user to select from
    foreach($rows as $row) {
      echo "<option>" . $row["Associate"] . "</option>";
    }
    
    echo "</select>";
    echo "<input type=\"submit\" value=\"Selection\" />";
    echo "</form>";
    
    echo "<br/>";
    //allows the user to add a new supplier, not allowing them to specify the primary key, will be done itself
    echo "Add a new associate";
    echo "<form action=\"http://students.cs.niu.edu/~z1865959/associateAdded.php\" method=\"POST\">";
        //grabs the user input to know what to put into the database after they hit the submit button
    echo "userID: <input type=\"text\" name=\"userID\" /><br/>";
    echo "password: <input type=\"number\" name=\"password\" /><br/>";
    echo "commission: <input type=\"text\" name=\"commission\" /><br/>";
    echo "address: <input type=\"text\" name=\"address\" /><br/>";
    echo "<input type=\"submit\" value=\"Add Associate\" />";
    echo "</form>";

  
    }
    catch(PDOexception $e) {
      echo "Connection to database failed: " . $e->getMessage();
    }
  ?>
  </body></html>