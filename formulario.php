<?php

$servername = "localhost";
$username = "root";
$password = "";
$database = "proyecto";


$conn = new mysqli($servername, $username, $password, $database);


if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}


$nombre = $_POST['nombre'];
$apellido = $_POST['apellido'];
$clave= $_POST['clave'];


$sql = "INSERT INTO goldentulip (nombre, apellido, clave) VALUES ('$nombre', '$apellido', '$clave')";


if ($conn->query($sql) === TRUE) {
    echo "Registro exitoso";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}


$conn->close();
?>