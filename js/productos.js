
const productos = [{ marca: 'Zanella', modelo: 'ZR 150', motor: 150, metodo: 'carburador', tipo: 'off-road', precio: 1600, },
{ marca: 'Zanella', modelo: 'ZR 200 ohc', motor: 200, metodo: 'carburador', tipo: 'off-road', precio: 2000, },
{ marca: 'Zanella', modelo: 'ZR 250 ohc', motor: 250, metodo: 'carburador', tipo: 'off-road', precio: 2300, },
{ marca: 'Benelli', modelo: 'tnt 300', motor: 300, metodo: 'inyeccion', tipo: 'naked', precio: 3000, },
{ marca: 'Benelli', modelo: 'tnt 25', motor: 250, metodo: 'inyeccion', tipo: 'naked', precio: 2200, },
{ marca: 'Benelli', modelo: 'tnt 15', motor: 150, metodo: 'carburador', tipo: 'street', precio: 1800, },
{ marca: 'honda', modelo: 'CBR 300', motor: 300, metodo: 'inyeccion', tipo: 'pista', precio: 5000, },
{ marca: 'Honda', modelo: 'CB190R', motor: 190, metodo: 'inyeccion', tipo: 'naked', precio: 2200, },
{ marca: 'Honda', modelo: 'GLH', motor: 150, metodo: 'inyeccion', tipo: 'street', precio: 1700, },
{ marca: 'Yamaha', modelo: 'Fz 25', motor: 250, metodo: 'inyeccion', tipo: 'naked', precio: 2500, },
{ marca: 'Yamaha', modelo: 'FZ-16 2.0', motor: 150, metodo: 'inyeccion', tipo: 'naked', precio: 2100, }];


function generarCard() {
    const cardContainer = document.getElementById('productos-cards');

    productos.forEach(producto => {
        const card = document.createElement('div');
        card.classList.add("card");

        const marca = document.createElement("h2");
        marca.textContent = producto.marca;
        card.appendChild(marca);

        const modelo = document.createElement("h3");
        modelo.textContent = producto.modelo;
        card.appendChild(modelo);

        const motor = document.createElement("p");
        motor.textContent = producto.motor;
        card.appendChild(motor);

        const metodo = document.createElement("p");
        metodo.textContent = producto.metodo;
        card.appendChild(metodo);

        const tipo = document.createElement("p");
        tipo.textContent = producto.tipo;
        card.appendChild(tipo);

        const precio = document.createElement("p");
        precio.textContent = producto.precio;
        card.appendChild(precio);

        const buttonComprar = document.createElement("button");
        buttonComprar.textContent = "comprar";
        buttonComprar.id = 'botonComprar';
        buttonComprar.classList.add('botonComprar');
        buttonComprar.type = 'submit';
        card.appendChild(buttonComprar);

        cardContainer.appendChild(card);
    })
}

window.addEventListener("load", () => {
    generarCard();
  });


