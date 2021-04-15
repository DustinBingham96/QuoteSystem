<html>
 <head>
  <title>Legacy Test</title>
 </head>
 <body>
 <?php
    echo "<p>All data from legacy DB</p>";
    $host = "blitz.cs.niu.edu";
    $port = "3306";
    $dbname = "csci467";
    $user = "student";
    $password = "student";

    $dsn = "mysql:dbname=$dbname;host=$host";

    $pdo = new PDO($dsn, $user, $password);

    $res = $pdo->prepare("SELECT * FROM customers");
    $res->execute();

    foreach($res as $row)
    {
        echo "<p>   CustID: $row[id]<br>
		CustName: $row[name]<br> 
		City: $row[city]<br>
		Street: $row[street]<br> 
		Contact: $row[contact]<br></p>";
    }

    $res = NULL;
    $pdo = NULL;

 ?>
 </body>
</html>