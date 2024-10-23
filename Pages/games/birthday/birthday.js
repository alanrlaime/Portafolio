const actual = new Date();
actual.setHours(0,0,0,0);
let dia = actual.getDate();
let mes = actual.getMonth() +1;
let año = actual.getFullYear();

var bot1 = document.querySelector('.g');
var bot2 = document.querySelector('.h');
var bot3 = document.querySelector('.f');
bot1.classList.add('invisible');
bot2.classList.add('invisible');
bot3.classList.add('invisible');

var botonNum = document.getElementById('inputNumber');
botonNum.classList.add('invisible'); 

var boton = document.getElementById('inputEdad');
boton.addEventListener('click', (f)=>{
    f.preventDefault();
    var edad = document.getElementById('readEdad').value;
    var fecha = new Date(edad);
    var diaf = fecha.getDate()+1;
    var mesf = fecha.getMonth()+1;
    var añof = fecha.getFullYear();
    if (diaf != dia || mesf != mes || añof != año ) {
        document.getElementById('cc').textContent = "Di la verdad, no es el "+diaf;
    } else {
        document.getElementById('readEdad').classList.add('invisible');
        document.getElementById('cc').textContent = "Gracias, presiona el boton";
        boton.addEventListener('click', function(){
            document.querySelector('form').classList.add('invisible');
            bot1.classList.remove('invisible');
            bot1.addEventListener('click', function(){
                bot2.classList.remove('invisible');
                bot1.classList.add('invisible');
                bot2.addEventListener('click', function(){
                    bot3.classList.remove('invisible');
                    bot2.classList.add('invisible');
                })
            })
        })
    }
    bot3.addEventListener('click', ()=>{
        bot3.classList.add('invisible');
        document.getElementById('readEdad').value = "";
        document.getElementById('readEdad').type = "number";
        document.getElementById('cc').textContent = "Piensa en un número";
        document.getElementById('readEdad').classList.remove('invisible');
        document.querySelector('form').classList.remove('invisible');
        boton.classList.add('invisible');
        botonNum.classList.remove('invisible');
        botonNum.addEventListener('click', function(ff){
            ff.preventDefault();
            botonNum.classList.add('invisible');
            document.getElementById('readEdad').classList.add('invisible');
            document.getElementById('cc').textContent = "Cargando.";
            setTimeout(() => {
                document.getElementById('cc').textContent = "Cargando un poco..";
            }, 2000);
            setTimeout(() => {
                document.getElementById('cc').textContent = "Procesando..."; 
            }, 4000);
            setTimeout(() => {
                document.getElementById('cc').textContent = "El numero en el que pensaste es: "+document.getElementById('readEdad').value;
            }, 6000);
        })
    })
})


