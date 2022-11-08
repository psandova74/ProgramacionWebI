
// etiqueta p donde debe escribirse el texto que se ingreso
const tituloACambiar=document.querySelector("#titulo")
// contenedor del titulo del texto: rectangulo
const contenedorTitulo=document.querySelector("#rectangulo")


//El input que ingresas por teclado
const checkTexto=document.getElementsByName("textoIngresado")
checkTexto.forEach( input =>{ 
    input.addEventListener("keyup",()=>{
        tituloACambiar.innerHTML = input.value
    })
} )

//La lista desplegable que selecciona el color de Fondo
const checkColorFondo=document.getElementsByName("color")
checkColorFondo.forEach(fondoColor =>{
    fondoColor.addEventListener("change",()=>{
        contenedorTitulo.style.backgroundColor = fondoColor.value
    })
})

//El radio buton que selecciona la alineacion del texto
const checkAlineacionTexto=document.getElementsByName("alineacion")
checkAlineacionTexto.forEach(letraAlineacion =>{
    letraAlineacion.addEventListener("click",()=>{

        contenedorTitulo.style.textAlign = letraAlineacion.value
    })
})











