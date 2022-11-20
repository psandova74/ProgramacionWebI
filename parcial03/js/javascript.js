const direccion = document.getElementById("direccion")
const color = document.getElementById("color")
const ingreso = document.getElementById("direccion-ingresada")

color.addEventListener("change", ()=>{
    document.querySelector(".vista-previa").classList.remove("darkred")
    document.querySelector(".vista-previa").classList.remove("darkgreen")
    document.querySelector(".vista-previa").classList.remove("midnightblue")
    document.querySelector(".vista-previa").classList.remove("restablecer")

    document.querySelector(".vista-previa").classList.add(`${color.value}`)
})

ingreso.addEventListener("keyup", ()=>{
    direccion.innerHTML = ingreso.value;
})