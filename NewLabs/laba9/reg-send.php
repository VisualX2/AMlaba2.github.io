<?php include("conn.php");
if($_SERVER['REQUEST_METHOD'] == "POST" and isset($_POST['submit']))

{
  $email=$_POST['email'];
  $name=$_POST['Login'];
  $password=$_POST['password'];  

    if($name!="" && $email!="" && $password!="")
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
    
}

