<?php 
session_start();
include("conn.php");

$name = $_POST["name"];
$desc = $_POST["description"];
$game = $_POST["game"];
$file = $_POST["file"];
$author = $_SESSION["sname"];
$len_author = strlen($author);
$len_name = strlen($name);
if($len_author > 0 & $len_name > 0)
{

    
    $query = "INSERT IGNORE INTO mods (id,name,description,game, file, author) VALUES (NULL, '$name', '$desc', '$game', '$file', (SELECT id FROM users WHERE name = '$author'))";
    mysqli_query($conn,$query) or die(mysqli_error());
    
}
if (mysqli_connect_errno()) {
    printf("Не удалось подключиться: %s\n", mysqli_connect_error());
    exit();
}

header("Location:mods.php");

?>