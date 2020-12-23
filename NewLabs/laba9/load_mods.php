<?php
                        
                        include("conn.php");

                        
                        
                        if (mysqli_connect_errno()) {
                            printf("Не удалось подключиться: %s\n", mysqli_connect_error());
                            exit();
                        }
                        $query = "SELECT mods.name AS 'Name', mods.description AS 'Description', mods.game  AS 'Game', mods.file  AS 'File', users.name  AS 'Loaded by' FROM mods, users WHERE mods.author = users.id";
                        if($result = mysqli_query($conn, $query)){
                            if(mysqli_num_rows($result) > 0){
                                echo "<table style = 'border-spacing: 15px;'>";
                                    echo "<tr>";
                                        echo "<th>Name</th>";
                                        echo "<th>Description</th>";
                                        echo "<th>Game</th>";
                                        echo "<th>File</th>";
                                        echo "<th>Loaded by</th>";
                                    echo "</tr>";
                                while($row = mysqli_fetch_array($result)){
                                    echo "<tr>";
                                        echo "<td>" . $row['Name'] . "</td>";
                                        echo "<td>" . $row['Description'] . "</td>";
                                        echo "<td>" . $row['Game'] . "</td>";
                                        echo "<td><a href = '" . $row['File'] . "'> Link</td>";
                                        echo "<td>" . $row['Loaded by'] . "</td>";
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
                        


?>