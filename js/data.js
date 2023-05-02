let dataForm = {}

const marca = document.getElementById("marca").value;
const modelo = document.getElementById("modelo").value;
const motor = document.getElementById("motor").value;
const metodo = document.getElementById("metodo").value;
const tipo = document.getElementById("tipo").value;
const precio = document.getElementById("precio").value;

dataForm.marca = marca;
dataForm.modelo = modelo;
dataForm.motor = motor;
dataForm.metodo = metodo;
dataForm.tipo = tipo;
dataForm.precio = precio;

let dataFormJSON = JSON.stringify(dataForm);

function saveData() {
    let dataForm = {};
    dataForm.marca = document.getElementById("marca").value;
    dataForm.modelo = document.getElementById("modelo").value;
    dataForm.motor = document.getElementById("motor").value;
    dataForm.metodo = document.getElementById("metodo").value;
    dataForm.tipo = document.getElementById("tipo").value;
    dataForm.precio = document.getElementById("precio").value;
    
    localStorage.setItem("dataForm", JSON.stringify(dataForm));

    console.log(dataFormJSON);
}
    


