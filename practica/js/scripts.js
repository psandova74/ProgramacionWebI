
let tituloPelicula=document.querySelector("#rectangulo");
let vistaPrevia=document.querySelector("#vista-previa");


// radio button selecciona la serie
const checkSerie=document.getElementsByName("serie");
checkSerie.forEach(opcionSerie =>{
    opcionSerie.addEventListener("click",()=>{
        tituloPelicula.innerHTML=opcionSerie.value;
    })
})

//El input que ingresas por teclado
const checkTexto=document.getElementsByName("textoIngresado")
checkTexto.forEach( input =>{ 
    input.addEventListener("keyup",()=>{
        tituloPelicula.innerHTML = input.value
    })
} )

// cambio de color del fondo.
const checkColorFondo=document.getElementsByName("color-fondo");
checkColorFondo.forEach(opcionFondo =>{
    opcionFondo.addEventListener("click",()=>{
        vistaPrevia.style.background=opcionFondo.value;
    })
})

// cambio de color del texto.
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

// Select que selecciona el tipo de tipografica
const checkTipografia=document.querySelector("#tipografia");
checkTipografia.addEventListener("change",()=>{
    tituloPelicula.classList.remove("fuente-yanone");
    tituloPelicula.classList.remove("fuente-roboto");
    tituloPelicula.classList.add(`${checkTipografia.value}`);
})

checkColorFondo.forEach(opcionFondo =>{
    opcionFondo.addEventListener("click",()=>{
        vistaPrevia.style.background=opcionFondo.value;
    })

})
    

// cambio de fondo de acuerdo a un radio button
// Se deben crear las clases en css fondo1, fondo2, fondo3
const checkFondoArchivo=document.getElementsByName("fondo");
checkFondoArchivo.forEach(opcionArchivo=>{
    opcionArchivo.addEventListener("click",()=>{;
        vistaPrevia.classList.remove("fondo1");
        vistaPrevia.classList.remove("fondo2");
        vistaPrevia.classList.remove("fondo3");
        vistaPrevia.classList.add(`${opcionArchivo.value}`);
    });
});
