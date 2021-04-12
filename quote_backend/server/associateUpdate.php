<html><head><title>Update Associate</title></head><body>
<?php
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

    echo "<h1>Update Associate</h1>";
    //allows the user to update their weight with a date associated with it
    echo "Update associate here!";
        echo "<form action=\"http://students.cs.niu.edu/~z1865959/associateAdded.php\" method=\"POST\">";


            //FIND OUT WHAT INFORMATION NEEDS TO BE UPDATED BASED ON THE USER
    //grabs the information from the user
    echo "User ID: <input type=\"number\" name=\"userID\" min=\"1\"/><br/>";
    echo "New password: <input type=\"text\" name=\"password\" /><br/>";
    echo "commission: <input type=\"number\" name=\"commission\" /><br/>";
    echo "address: <input type=\"text\" name=\"address\" /><br/>";

    echo "<input type=\"submit\" value=\"Update Associate\" />";
    echo "</form>";

    echo "<form action=\"http://students.cs.niu.edu/~z1865959/home.php\" method=\"POST\">";
        echo "<input type=\"submit\" value=\"Home\" />";
        echo "</form>";
    }
    catch(PDOexception $e) {
        echo "Connection to database failed: " . $e->getMessage();
    }
?>
</body></html>
