let precio = 400000;
let cantidad = 0;

const precioSpan = document.querySelector(".precio-inicial");
const cantidadSpan = document.querySelector(".cantidad");
const valorTotalSpan = document.querySelector(".valor-total");

precioSpan.innerHTML = precio;

function actualizarTotal() {
    let total = cantidad * precio;
    valorTotalSpan.innerHTML = total;
}

function incrementar() {
    cantidad++;
    cantidadSpan.innerHTML = cantidad;
    actualizarTotal();
}

function decrementar() {
    if (cantidad > 0) {
        cantidad--;
    }
    cantidadSpan.innerHTML = cantidad;
    actualizarTotal();
}
