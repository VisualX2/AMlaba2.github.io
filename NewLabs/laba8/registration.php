<?php include("conn.php");
session_start();
if($_SERVER['REQUEST_METHOD'] == "POST" and isset($_POST['submit']))

{
  $email=$_POST['Email'];
  $name=$_POST['Login'];
  $password=$_POST['Password'];  
    
  $_SESSION["sname"]=$name;
    
    
    
    if($name!="" && $email!="" && $password!="" )
  { 
        $insert="INSERT INTO `users`(`name`,`email`,`password`) VALUES('".$name."','".$email."','".$password."')";
      $data=mysqli_query($conn,$insert); 
      if($data)
	  {
	  
	  
          header("Location:index.php"); 
	  }
        else
        {
            echo "Something Wrong Occurs..!! Please Try Again";
        }
        
    }
    else{
        echo "Fields Should Not Be Empty..!!";
    }
}


?>

<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Laba 3</title>
        <meta charset="utf-8">
        <link rel="stylesheet" href="style.css">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.1/css/all.css"
integrity="sha384-gfdkjb5BdAXd+lj+gudLWI+BXq4IuLW5IT+brZEZsLFm++aCMlF1V92rMkPaX4PP" crossorigin="anonymous">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body>
            
            <header class="header">
                
                
            </header>

                <div class="menu menu-width">
                    <a href="1">Mods</a>
                    <a href="1">Indie-games</a>
                    <a href="1">Arts</a>
                    <a href="1">Library</a>
                </div>
                
                <main class="main-container">
                    
                    
                    <div style = "
  max-width: 1920px;
  background-image: url(images/vhkaywlf96lz.png);
  min-height: 932px;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
"></div>
                   
                    <div style = "position:absolute; top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color:white; border-radius: 10px;  padding:10px 10px 10px 10px;">    
                        <form style = "display:grid; grid-template-rows: 1fr; row-gap: 5px;" action="" method="post">
                        <input name = "Email" style = "width: 300px; height: 50px; font-size:17px;">
                            <input name = "Login" style = "width: 300px; height: 50px; font-size:17px;">
                            <input type="password" name = "Password" style = "width: 300px; height: 50px;">
                            
                            <input type="submit" name="submit"
                                                                value="REGISTER">
                        </form>    
                    <div>
                    
                    
                    
                    
                    
                </main>
                
            
            
        
    </body>
</html>
