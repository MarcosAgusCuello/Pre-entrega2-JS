const botonesComprar = document.querySelectorAll(".botonComprar");
const contactoEnvio = document.querySelector(".fomulario-1");
const close = document.querySelector(".close");

botonesComprar.forEach((boton) => {
    boton.addEventListener("click", () => {
        Swal.fire({
            title: 'Queres este modelo?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Deseo este modelo'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Modelo seleccionado',
                'Felicidades por su moto! maneja con cuidado'
              )
            }
          })
    })
});


botonesComprar.addEventListener("click", ()=> {
    contactoEnvio.style.display="flex"
})