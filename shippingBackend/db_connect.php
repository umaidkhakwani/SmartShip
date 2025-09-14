<?php
// db_connect.php

$host = 'localhost';
$dbname = 'logistics_db';
$username = 'root';
$password = '';


// $host = 'localhost'; 
// $dbname = 'u668769206_logistics_db';
// $username = 'u668769206_logistics_db'; 
// $password = 'Usama@12_34'; 

// Create a PDO connection
try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Connection failed: " . $e->getMessage());
}
?>