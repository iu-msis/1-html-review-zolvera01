<?php

require 'class/DbConnection.php';


//$db = DbConnection::getConnection(); //variable,class, retrieve this

// Step 1: Get a datase connection from our helper class
$db = DbConnection::getConnection();


// Step 2: Create & run the query
$sql = 'SELECT * FROM books';
$vars = [];

// if (isset($_GET['books'])) {
    // This is an example of a parameterized query
  // $sql = 'SELECT * FROM offer WHERE studentId = ?';
 //  $vars = [ $_GET['student'] ];
//}

$stmt = $db->prepare($sql); //left of arrow: class. right of arrow: class method. Arrow means instance
$stmt->execute($vars);

$books = $stmt->fetchAll();

// Step 3: Convert to JSON
$json = json_encode($books, JSON_PRETTY_PRINT);

// Step 4: Output
header('Content-Type: application/json');
echo $json;