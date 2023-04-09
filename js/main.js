const carro = []

const mensaje = "selecciona tu modelo"

const motos = [{ marca: 'Zanella', modelo: 'ZR 150', motor: 150, metodo: 'carburador', tipo: 'off-road', precio: 1600, codigo: 1 },
{ marca: 'Zanella', modelo: 'ZR 200 ohc', motor: 200, metodo: 'carburador', tipo: 'off-road', precio: 2000, codigo: 2 },
{ marca: 'Zanella', modelo: 'ZR 250 ohc', motor: 250, metodo: 'carburador', tipo: 'off-road', precio: 2300, codigo: 3 },
{ marca: 'Benelli', modelo: 'tnt 300', motor: 300, metodo: 'inyeccion', tipo: 'naked', precio: 3000, codigo: 4 },
{ marca: 'Benelli', modelo: 'tnt 25', motor: 250, metodo: 'inyeccion', tipo: 'naked', precio: 2200, codigo: 5 },
{ marca: 'Benelli', modelo: 'tnt 15', motor: 150, metodo: 'carburador', tipo: 'street', precio: 1800, codigo: 6 },
{ marca: 'honda', modelo: 'CBR 300', motor: 300, metodo: 'inyeccion', tipo: 'pista', precio: 5000, codigo: 7 },
{ marca: 'Honda', modelo: 'CB190R', motor: 190, metodo: 'inyeccion', tipo: 'naked', precio: 2200, codigo: 8 },
{ marca: 'Honda', modelo: 'GLH', motor: 150, metodo: 'inyeccion', tipo: 'street', precio: 1700, codigo: 9 },
{ marca: 'Yamaha', modelo: 'Fz 25', motor: 250, metodo: 'inyeccion', tipo: 'naked', precio: 2500, codigo: 10 },
{ marca: 'Yamaha', modelo: 'FZ-16 2.0', motor: 150, metodo: 'inyeccion', tipo: 'naked', precio: 2100, codigo: 11 }]

function buscarMoto(codigo) {
    let resultado = motos.find((modelo)=> modelo.codigo === parseInt(codigo))
        return resultado
}

function finalizarAdquisicion() {
    if (carro.length === 0) {
        console.warn("No estas interesado en ningun modelo?")
            return
    }

    const shopping = new Compra(carro)
    alert(' El costo total a financiar es: $ ' + shopping.obtenerTotal())   

    let respuesta = confirm("Queres seguir con este modelo?")
    if (respuesta === true) {
        alert('El total a financiar es de (USD): $ ' + (shopping.obtenerTotal()))
        carro.length = 0
    }

}

function verTotal() {
    console.table(carro)
}

function comprar() {
    let codigo = prompt(mensaje)
        if (!parseInt(codigo)) {
            alert("No tenemos ese modelo en stock")
            let respuesta = confirm("queres buscar de nuevo?")
                if (respuesta === true) {
                    comprar()
                }
                return
        }

    let modeloSeleccionado = buscarMoto(codigo)
        if (modeloSeleccionado === undefined) {
            alert("no hay stock de ese modelo actualmente")
                return
        }

        alert(modeloSeleccionado.marca + ' ' + modeloSeleccionado.motor + ' listo para empezar los papeles ')
        carro.push(modeloSeleccionado)


        let respuesta = confirm("Desea finalizar la compra o buscar otro modelo para comprar?")
            if (respuesta === true) {
                comprar()
            } else {
                finalizarAdquisicion()
            }
}

