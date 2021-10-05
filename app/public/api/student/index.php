<?php

require 'class/DbConnection.php';

echo 'test';

//$db = DbConnection::getConnection(); //variable,class, retrieve this

// Step 1: Get a datase connection from our helper class
$db = DbConnection::getConnection();

echo $db;
exit;

// Step 2: Create & run the query
$sql = 'SELECT * FROM Students';
$vars = [];

// if (isset($_GET['guid'])) {
//   // This is an example of a parameterized query
//   $sql = 'SELECT * FROM Patient WHERE patientGuid = ?';
//   $vars = [ $_GET['guid'] ];
// }

$stmt = $db->prepare($sql); //left of arrow: class. right of arrow: class method. Arrow means instance
$stmt->execute($vars);

$student = $stmt->fetchAll();

// Step 3: Convert to JSON
$json = json_encode($student, JSON_PRETTY_PRINT);

// Step 4: Output
header('Content-Type: application/json');
echo $json;