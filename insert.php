<?php
$data = json_decode(file_get_contents("php://input"));
$username = mysql_real_escape_string($data->username);
$password = mysql_real_escape_string($data->password);
mysql_connect("localhost", "root", "") or die(mysql_error());
mysql_select_db("mobileappdb") or die(mysql_error());
mysql_query("INSERT INTO friends (Username,Password) VALUES ('$username', '$password')");
Print "Your information has been successfully added to the database.";


?>
