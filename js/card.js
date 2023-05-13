const form = document.getElementById("formu");
const cardContainer = document.getElementById('productos-cards');
const submitBtn = document.getElementById("btn-sub");
const formPopUp = document.querySelector(".formulario");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    const marca = document.getElementById("marca").value;
    const modelo = document.getElementById("modelo").value;
    const motor = document.getElementById("motor").value;
    const metodo = document.getElementById("metodo").value;
    const tipo = document.getElementById("tipo").value;
    const precio = document.getElementById("precio").value;

    const generarCard = {
        marca: marca,
        modelo: modelo,
        motor: motor,
        metodo: metodo,
        tipo: tipo,
        precio: precio
    };

    let cards = JSON.parse(localStorage.getItem('cards')) || [];

    cards.push(generarCard);

    localStorage.setItem('cards', JSON.stringify(cards));

    formPopUp.style.display="none";

    form.reset();

    submitBtn.click();

    location.reload();
});

const cards = JSON.parse(localStorage.getItem('cards'));

for (let i = 0; i < cards.length; i++) {
  const card = document.createElement('div');
  card.classList.add('card');
  
  const marca = document.createElement('h2');
  marca.textContent = cards[i].marca;
  
  const modelo = document.createElement('h3');
  modelo.textContent = cards[i].modelo;

  const motor = document.createElement('p');
  motor.textContent = cards[i].motor;

  const metodo = document.createElement('p');
  metodo.textContent = cards[i].metodo;

  const tipo = document.createElement('p');
  tipo.textContent = cards[i].tipo;

  const precio = document.createElement('p');
  precio.textContent = cards[i].precio;

  const buttonComprar = document.createElement('button');
  buttonComprar.textContent = 'Comprar';
  buttonComprar.id = 'botonComprar';
  buttonComprar.classList.add('botonComprar');
  buttonComprar.type = 'submit';
  
  card.appendChild(marca);
  card.appendChild(modelo);
  card.appendChild(motor);
  card.appendChild(metodo);
  card.appendChild(tipo);
  card.appendChild(precio);
  card.appendChild(buttonComprar);
  
  cardContainer.appendChild(card);
}
