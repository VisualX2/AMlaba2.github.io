<?php
session_start();
if($_SERVER['REQUEST_METHOD'] == "POST" and isset($_POST['submit']))
{  
   $count=0;
   $data=mysqli_query($conn,"select * from users where name='$_POST[login]' && password='$_POST[password]'");
   $count=mysqli_num_rows($data);
   $row = mysqli_fetch_array($data);
   
   if($count==0)
   {
      $error= "Invalid username or password";
   }
   
else 
    
    
{
        
           $_SESSION["sname"]=$row["name"];

           
}
   
}
?>