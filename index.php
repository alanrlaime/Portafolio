<?php
$paginas = isset($_GET['p']) ? strtolower($_GET['p']) : 'Pages';
require_once 'meta.html';
require_once 'nav.html';
if($paginas == 'Pages'){
    require_once 'Pages/main.html';
} else {
    require_once 'Pages/'.$paginas.'.html';
}
require_once 'foot.html';
?>