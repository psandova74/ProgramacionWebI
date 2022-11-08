// etiqueta p donde debe escribirse el titulo de la serie: tituloPelicula
let tituloPelicula=document.querySelector("#tituloPelicula")
// contenedor del titulo de la serie: rectangulo
let contenedorTitulo=document.querySelector("#rectangulo")


//El radio buton que selecciona la serie
const checkSeries=document.getElementsByName("series")
checkSeries.forEach( input =>{ 
    input.addEventListener("click",()=>{
        tituloPelicula.innerHTML = input.value
    })
} )

//La lista desplegable que selecciona el color de Fondo
const checkColorFondo=document.getElementsByName("color")
checkColorFondo.forEach(fondoColor =>{
    fondoColor.addEventListener("change",()=>{
        contenedorTitulo.style.backgroundColor = fondoColor.value
    })
})

//El radio buton que selecciona el color del texto
const checkColorTexto=document.getElementsByName("colorTexto")
checkColorTexto.forEach(letraColor =>{
    letraColor.addEventListener("click",()=>{
        tituloPelicula.style.color=letraColor.value
    })
})












