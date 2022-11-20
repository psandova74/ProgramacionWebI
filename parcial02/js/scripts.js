const checkBottonBlue=document.querySelector("#blue")
const checkBottonGreen=document.querySelector("#green")
const checkBottonYellow=document.querySelector("#yellow")
const checkBottonRestablecer=document.querySelector("#restablecer")
const checkBotton=document.getElementsByClassName("boton")
const checkInput=document.querySelector("#institucion")
const cambiarInstitucion=document.querySelector("#institucion-ingresada")
const modificarFondo=document.querySelector("#rectangulo")


checkBottonBlue.addEventListener("click",()=>{
    modificarFondo.classList.remove("coloryellow")
    modificarFondo.classList.remove("colorgreen")
    modificarFondo.classList.remove("restablecer")
    modificarFondo.classList.remove("colorblue")
    modificarFondo.classList.add(`${checkBottonBlue.value}`)
})


checkBottonGreen.addEventListener("click",()=>{
    modificarFondo.classList.remove("coloryellow")
    modificarFondo.classList.remove("colorblue")
    modificarFondo.classList.remove("restablecer")
    modificarFondo.classList.add("colorgreen")
})

checkBottonYellow.addEventListener("click",()=>{
    modificarFondo.classList.remove("colorgreen")
    modificarFondo.classList.remove("colorblue")
    modificarFondo.classList.remove("restablecer")
    modificarFondo.classList.add("coloryellow")
})

checkBottonRestablecer.addEventListener("click",()=>{
    modificarFondo.classList.remove("colorgreen")
    modificarFondo.classList.remove("colorblue")
    modificarFondo.classList.remove("coloryellow")
    modificarFondo.classList.add("restablecer")
})

checkInput.addEventListener("keyup",()=>{
    cambiarInstitucion.innerHTML=checkInput.value;
})



