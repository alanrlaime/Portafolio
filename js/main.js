//Boton de Movil
document.querySelector('button').addEventListener('click', ()=>{
    document.querySelector('.enlaces').classList.toggle('accion');
});
//Anim nav transparente
window.addEventListener("scroll", function(){
    var efect = document.querySelector("nav");
    var textNav = document.querySelectorAll("nav ul li a");

    if(window.innerWidth>500){
        if(window.scrollY>0){
            efect.style.backgroundColor="rgba(0, 145, 255)";
            textNav.forEach(t => {
                t.classList.remove('navegationtext');          
            });
        } else{
            efect.style.backgroundColor="transparent";
            textNav.forEach(t => {
                t.classList.add('navegationtext');          
            });
        }
    }
})


