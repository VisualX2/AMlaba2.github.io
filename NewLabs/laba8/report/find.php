<?php
$connection = mysqli_connect("127.0.0.1","root","","audio_library") or die("NO");
$name = $_POST["name"];
$type = $_POST["type"];
$time = $_POST["time"];
$author = $_POST["author"];
$publisher = $_POST["publisher"];

if (mysqli_connect_errno()) {
    printf("Не удалось подключиться: %s\n", mysqli_connect_error());
    exit();
}

$query = "SELECT audio.name, audio.type, audio.time, author.name, publisher.name FROM audio AND audio.name LIKE '$name'";


if ($result = mysqli_query($connection, $query)) {

    /* выборка данных и помещение их в массив */
    while ($row = mysqli_fetch_row($result)) {
        printf ("%s (%s)\n", $row[0], $row[1], $row[2]);
    }

    /* очищаем результирующий набор */
    mysqli_free_result($result);
}

/* закрываем подключение */
mysqli_close($connection);

?>