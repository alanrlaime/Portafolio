//VALIDACION
let passwordVar = document.getElementById("con");
let nombreVar = document.getElementById("nom");
let correoVar = document.getElementById("em");
let formulario = document.getElementById("formu");
//Elementos dinamicos
let elem = document.createElement('p');
elem.id = 'notify'; 
elem.style.display = 'none'; 
formulario.insertBefore(elem, passwordVar);
let em = document.createElement('p');
em.id = 'notify'; 
em.style.display = 'none';
formulario.insertBefore(em, correoVar);
let lem = document.createElement('p');
lem.id = 'notify'; 
lem.style.display = 'none';
formulario.insertBefore(lem, nombreVar);

passwordVar.addEventListener('invalid', function(event){ 
    event.preventDefault();
    if ( ! event.target.validity.valid ) { 
        elem.textContent = 'Se requiere la contraseña con 8 digitos minimamente';
        elem.className = 'error';
        elem.style.display = 'block'; 
        passwordVar.className = 'invalid';
    } 
});
nombreVar.addEventListener('invalid', function(event){ 
    event.preventDefault();
    if ( ! event.target.validity.valid ) { 
        lem.textContent = 'Ingrese un nombre';
        lem.className = 'error';
        lem.style.display = 'block'; 
        nombreVar.className = 'invalid';
    } 
});
correoVar.addEventListener('invalid', function(event){ 
    event.preventDefault();
    if ( ! event.target.validity.valid ) { 
        em.textContent = 'La extencion @ no es reconocida';
        em.className = 'error';
        em.style.display = 'block'; 
        correoVar.className = 'invalid';
    } 
});
//Desactivar advertencias
passwordVar.addEventListener('input', function(event){
    if ( 'block' === elem.style.display ) {
    passwordVar.className = '';
    elem.style.display = 'none';
    }
});
nombreVar.addEventListener('input', function(event){
    if ( 'block' === elem.style.display ) {
    nombreVar.className = '';
    lem.style.display = 'none';
    }
});
correoVar.addEventListener('input', function(event){
    if ( 'block' === elem.style.display ) {
    correoVar.className = '';
    em.style.display = 'none';
    }
});