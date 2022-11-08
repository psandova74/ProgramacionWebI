const nombre=document.querySelector("#nombre");
const texto=document.querySelector("#texto");
const vistaPrevia=document.querySelector(".vista-previa");

// Cargo en la vista lo que se escribe en el input.
nombre.addEventListener("keyup",()=>{
    texto.innerHTML=nombre.value;
});

// Cambio de tipografia de acuerdo a un selector
const tipo=document.querySelector("#tipografia");
tipo.addEventListener("change",()=>{
    const valor=tipo.value;
    if(valor=="roboto"){
        texto.classList.remove("fuente-yanone");
        texto.classList.add("fuente-roboto");
    }else{
        texto.classList.add("fuente-yanone");
        texto.classList.remove("fuente-roboto");
    }
});

// cambio de fondo de acuerdo a un radio button
// Se deben crear las clases en css fondo1, fondo2, fondo3
const fondos=document.getElementsByName("fondo");
fondos.forEach((item)=>{
    item.addEventListener("click",()=>{;
        vistaPrevia.classList.remove("fondo1");
        vistaPrevia.classList.remove("fondo2");
        vistaPrevia.classList.remove("fondo3");
        vistaPrevia.classList.add(`fondo${item.value}`);
    });
});


/// cambio de color del texto.
const checkColorTexto=document.getElementsByName("color")
checkColorTexto.forEach(letraColor =>{
    letraColor.addEventListener("click",()=>{
        texto.style.color=letraColor.value
    })
})