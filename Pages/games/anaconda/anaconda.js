var boton = document.querySelector('button');
var cuadro = document.querySelector('.cuadrado');
var ejeX = 0;
var ejeY = 0;
document.addEventListener('keypress', (e)=>{
    if(e.key == 'd') {
        ejeX=ejeX+10;
    }
    if(e.key == 'a') {
        ejeX=ejeX-10;
    }
    if(e.key == 'w') {
        ejeY=ejeY-10;
    }
    if(e.key == 's') {
        ejeY=ejeY+10;
    }
    cuadro.style.cssText="top: "+ejeY+"px; left: "+ejeX+"px;";
})