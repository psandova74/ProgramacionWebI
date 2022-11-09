
let tituloPelicula=document.querySelector("#rectangulo");
let vistaPrevia=document.querySelector("#vista-previa");


//El input que ingresas por teclado
const checkTexto=document.querySelector("#textoIngresado")
checkTexto.addEventListener("keyup",()=>{
   tituloPelicula.innerHTML = checkTexto.value
})


// radio button selecciona la serie
const checkSerie=document.getElementsByName("serie");
checkSerie.forEach(opcionSerie =>{
    opcionSerie.addEventListener("click",()=>{
        tituloPelicula.innerHTML=opcionSerie.value;
    })
})


// radio button cambio de color del texto.
const checkColorTexto=document.getElementsByName("color-texto");
checkColorTexto.forEach(letraColor =>{
    letraColor.addEventListener("click",()=>{
        tituloPelicula.style.color=letraColor.value
    })
})


//El radio buton que selecciona la alineacion del texto
const checkAlineacionTexto=document.getElementsByName("alineacion")
checkAlineacionTexto.forEach(letraAlineacion =>{
    letraAlineacion.addEventListener("click",()=>{

        tituloPelicula.style.textAlign = letraAlineacion.value
    })
})

// Radio button Se deben crear las clases en css fondo1, fondo2, fondo3

const checkFondoArchivo=document.getElementsByName("fondo");
checkFondoArchivo.forEach(opcionArchivo=>{
    opcionArchivo.addEventListener("click",()=>{;
        vistaPrevia.classList.remove("fondo1");
        vistaPrevia.classList.remove("fondo2");
        vistaPrevia.classList.remove("fondo3");
        vistaPrevia.classList.add(`${opcionArchivo.value}`);
    });
});

// Select que selecciona el tipo de tipografica Se deben crear las clases en css fondo1, fondo2, fondo3
const checkTipografia=document.querySelector("#tipografia");
checkTipografia.addEventListener("change",()=>{
    tituloPelicula.classList.remove("fuente-yanone");
    tituloPelicula.classList.remove("fuente-roboto");
    tituloPelicula.classList.add(`${checkTipografia.value}`);
})

// Select cambio de color del fondo.
const checkColorFondo=document.querySelector("#color-fondo");
checkColorFondo.addEventListener("change",()=>{
    vistaPrevia.style.background=checkColorFondo.value;
})




