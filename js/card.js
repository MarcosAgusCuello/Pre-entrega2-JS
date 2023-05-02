const form = document.getElementById("formu");
const cardContainer = document.getElementById("productos");
const submitBtn = document.getElementById("btn-sub");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    const marca = document.getElementById("marca").value;
    const modelo = document.getElementById("modelo").value;
    const motor = document.getElementById("motor").value;
    const metodo = document.getElementById("metodo").value;
    const tipo = document.getElementById("tipo").value;
    const precio = document.getElementById("precio").value;
    
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
        <img src="img/fz-25.jpg" alt="Yamaha FZ 25">
        <div class="card-info">
        <h2>${marca}</h2>
        <h3>${modelo}</h3>
        <p>${motor}CC</p>
        <p>${metodo}</p>
        <p>${tipo}</p>
        <p>$${precio}USD</p>

        <button class="botoncito" id="comprar">Comprar</button>
    </div>`;

        cardContainer.appendChild(card);

        form.reset();

        submitBtn.click();
});