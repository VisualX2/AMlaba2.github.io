<?php
$connection = mysqli_connect("127.0.0.1","root","","audio_library") or die("NO");
$name = $_POST["name"];
$type = $_POST["type"];
$time = $_POST["time"];
$author = $_POST["author"];
$publisher = $_POST["publisher"];
$len_author = strlen($author);
$len_name = strlen($name);
if($len_author > 0 & $len_name > 0)
{
    $query = "INSERT IGNORE INTO author (id,name) VALUES (NULL, '$author')";
    mysqli_query($connection,$query) or die(mysqli_error());
    $query = "INSERT IGNORE INTO publisher (id,name) VALUES (NULL, '$publisher')";
    mysqli_query($connection,$query) or die(mysqli_error());
    $query = "INSERT IGNORE INTO audio (id,name,type,time, publisher) VALUES (NULL, '$name', '$type', '$time', (SELECT id FROM publisher WHERE name = '$publisher'))";
    mysqli_query($connection,$query) or die(mysqli_error());
    $query = "INSERT IGNORE INTO author_audio (audio,author) VALUES ((SELECT id FROM author WHERE name = '$author'), (SELECT id FROM audio WHERE name = '$name'))";
    mysqli_query($connection,$query) or die(mysqli_error());
}
echo 'Дані про аудіо успішно додано!';

?>