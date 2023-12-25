<?php
$name2 =$_request['name2'];
$email2= $_request['email2'];
$phone=$_request['phone'];


if(isset($_POST['submet2']))
{
    $host="localhost";
    $user="root";
    $password="";
    $db="coffee shop";
    
    
    $conn= mysqli_connect($host,$user,$password,$db);
     
    $insert="insert into get in touch values ('$name2','$email2','$phone')";
    mysqli_query($conn,$insert);

    if($conn){
        echo("<h4 style=' color:brawn;'> welcome</h4>")
    }
   else{
    echo("<h4 color:red;> error</h4>")
       }
    }



















?>