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

$query = "SELECT audio.name AS 'Name', audio.type AS 'Type', audio.time AS 'Time', author.name AS 'Author', publisher.name  AS 'Publisher'
            FROM audio, author, publisher, author_audio
            WHERE audio.publisher = publisher.id AND author_audio.author = author.id AND author_audio.audio = audio.id
             AND audio.name LIKE '%$name%'AND audio.type LIKE '%$type%'AND audio.time LIKE '%$time%'AND author.name LIKE '%$author%'AND publisher.name LIKE '%$publisher%'";


if($result = mysqli_query($connection, $query)){
    if(mysqli_num_rows($result) > 0){
        echo "<table>";
            echo "<tr>";
                echo "<th>Name</th>";
                echo "<th>Type</th>";
                echo "<th>Time</th>";
                echo "<th>Author</th>";
                echo "<th>Publisher</th>";
            echo "</tr>";
        while($row = mysqli_fetch_array($result)){
            echo "<tr>";
                echo "<td>" . $row['Name'] . "</td>";
                echo "<td>" . $row['Type'] . "</td>";
                echo "<td>" . $row['Time'] . "</td>";
                echo "<td>" . $row['Author'] . "</td>";
                echo "<td>" . $row['Publisher'] . "</td>";
            echo "</tr>";
        }
        echo "</table>";

        mysqli_free_result($result);
    } else{
        echo "No records matching your query were found.";
    }
} else{
    echo "ERROR: Could not able to execute $sql. " . mysqli_error($connection);
}

mysqli_close($connection);

?>