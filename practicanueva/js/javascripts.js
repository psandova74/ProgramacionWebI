let tituloPelicula=document.querySelector("#rectangulo");
let vistaPrevia=document.querySelector("#vista-previa");


//El input que ingresas por teclado
const checkTexto=document.querySelector("#texto-ingresado")
checkTexto.addEventListener("keyup",()=>{
   tituloPelicula.innerHTML = checkTexto.value
})