<?php 
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gracias :D</title>
    <link rel="stylesheet" href="css/main.css">
    <style>
        #number{
            border-radius: 100%;
            border: solid 1px black;
            padding: 12px;
            font-size: 23px;
        }
    </style>
</head>
<body>
    <section>
        <div id="number"></div>
        <h1>Gracias por su registro :D. Puede seguir navegando en nuestro sitio web</h1>
    </section>
</body>
<script>
    var n = 5;
    var l = document.getElementById("number");
    window.setInterval(function(){
    l.innerHTML = n;
        if (n>0){
        n--; 
        }
    },1000);
    setTimeout(() => {
        location.replace("./?p=app");
    }, 5000);
</script>
</html>