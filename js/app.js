const botonFormulario = document.querySelector(".btn-f");
const formulario = document.querySelector(".formulario");
const cerrar = document.querySelector(".close");

botonFormulario.addEventListener("click", ()=>{
    formulario.style.display="flex"
})

cerrar.addEventListener("click", ()=>{
    formulario.style.display="none"
})


