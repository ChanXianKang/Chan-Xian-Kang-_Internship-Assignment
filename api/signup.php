<?php
include('db.php')

if($_SERVER["REQUEST_METHOD"] == "POST"){
    $email = $_POST['email'];
    $password = $_POST['password'];
    $confirm = $_POST['passwordConfirm'];

    if($password != $confirm){
        die('Passwords do not match')
    }

    //Hash passwords before saving
    $hashed = $password_hash($password, PASSWORD_DEFAULT);

    $sql = "INSERT INTO users (email, password) VALUES ('$email', '$hashed')";
    if($conn->query($sql) === TRUE){
        echo "Account created successfully! <a href='index.html'>Login here </a>"
    }else{
        echo "Error: " . $conn->error;
    }
}
?>