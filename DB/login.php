<?php
include 'conexion.php';
$nombre = $_GET['nombre'];
$pass = $_GET['passwd'];
$correo = $_GET['email'];
if(!isset($_GET[$nombre])){
    $sql = "INSERT INTO `loginsportafolio` (`Nombre`, `Correo`, `passwd`) VALUES ('$nombre', '$correo', '$pass');";
    if($conexion->query($sql) === true){
        header("location: ../thanks.php");
        die();
    } else {
        echo "No pudo realizarse";
    }
}
?>