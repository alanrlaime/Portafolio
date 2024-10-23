<?php
$serverId = "localhost";
$userDb = "root";
$passwdServer = "";
$nameDb = "test";
$conexion = mysqli_connect($serverId,$userDb,$passwdServer,$nameDb);
if(!$conexion){
    die("La conexion no se realizo".mysqli_error());
}
$conect = "Conexion realizada";
// $serverId = "localhost";
// $userDb = "id22023867_gato";
// $passwdServer = "Gato.123";
// $nameDb = "id22023867_test";
?>

