const totalProceso = document.querySelector(`#totalProceso`);
const listaCompra = document.querySelector("#listaFinal");

document.addEventListener("DOMContentLoaded", () => {
    carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    procesarPedido()
});

function procesarPedido(){
    carrito.forEach((prod) => { 
        const {id,name,price,cantidad} = prod;
        listaCompra.innerHTML += `
        <li class="list-group-item d-flex justify-content-between lh-sm">
            <div>
                <h6 class="my-0">${name}</h6>
                <small class="text-muted">Brief description</small>
            </div>
            <span class="text-muted">x${cantidad}</span>
            <span class="text-muted">${price}$</span>
        </li>`;
    });
    totalProceso.textContent = carrito.reduce((acc,prod) => acc + prod.price * prod.cantidad, 0) + "$";
}