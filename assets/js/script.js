let carrito = [];

class Productos {
    constructor(id,nombre,precio,stock,cantidad,img){
        this.id=id,
        this.name=nombre;
        this.price=precio;
        this.stock=stock;
        this.img=img;
        this.cantidad=cantidad
    }
}
const Stock = [
    new Productos (0,"Bota charol",400,10,0,"botas.PNG"),
    new Productos (1,"Sandalias",300,20,0,"sandalias.PNG"),
    new Productos (2,"Bolso",1000,5,0,"bolso.PNG"),
    new Productos (3,"Brazalete",500,30,0,"brazalete.PNG"),
    new Productos (4,"Collar",650,30,0,"collar.PNG"),
    new Productos (5,"Zapatilla",1200,30,0,"zapatilla.PNG")
]

const contenedor = document.querySelector("#contenedor");
const vaciarCarrito = document.querySelector("#vaciarCarrito");
const precioTotal = document.querySelector("#precioTotal");
const mostrar = document.querySelector(`.modal .modal-body`);
const procesarCompra = document.querySelector(`#procesarCompra`);

document.addEventListener("DOMContentLoaded", () => {
    carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    verCarrito();
});

for (elem of Stock){
    const {name,price,id,img,cantidad}= elem;
    contenedor.innerHTML += `
    <div class="col-md-4 my-2 d-flex justify-content-center" data-aos="zoom-in" data-aos-duration="1000">
    <div class="card text-center" style="width: 18rem">
    <img class="card-img-top mt-2 img-thumbnail" src="./assets/img/${img}" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">${name}</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <p class="card-text">${price}$</p>     
      <a onclick="agregaCarrito(${id})" class="btn btn-secondary border-0" style="background-color:#F7C1C1">Agregar al carrito</a>
    </div>
    </div>
    </div>
    `;    
}

agregaCarrito = (id) =>{
    const existeEnCarrito = carrito.some((item)=>item.id == id)
    if(existeEnCarrito){
        for(item of carrito){
            if(item.id === id){
                item.cantidad ++
            }
        }      
    }
    else{
        const prod = Stock.find((item) => item.id === id)
        prod.cantidad = 1
        carrito.push(prod);
    }
    swal({
        text:`Agregado al carrito`,
        icon:"success",
        button:false,
        timer:1000,
    });
    verCarrito();
}

const verCarrito = () =>{  
    mostrar.innerHTML = "";
    if(carrito.length == 0){
        mostrar.innerHTML = `
        <p class="text-center text-primary fw-semibold mb-0">¡No hay nada aun en el carrito!</p>`
    }
    for (prod of carrito){
        const {id,name,price,img,cantidad} = prod;
        mostrar.innerHTML += `<div class="card" style="max-width: 540px;">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="./assets/img/${img}" class="img-fluid rounded-start" alt="...">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${name}</h5>
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <p>Precio: ${price}</p>
              <p>Cantidad: ${cantidad}</p>
              <button onclick="eliminarProducto(${id})" class="btn btn-danger" style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;">X</button>  
            </div>
          </div>
        </div>
      </div>`;
    }
    precioTotal.textContent = carrito.reduce((acc,prod) => acc + prod.price * prod.cantidad, 0) + "$";
    guardarStorage();
}


function eliminarProducto(id){
    const itemId = id;
    id.cantidad --
    carrito = carrito.filter((item)=> item.id !== itemId);
    verCarrito();
}

vaciarCarrito.addEventListener("click", () =>{
    carrito = [];   
    verCarrito()
})


procesarCompra.addEventListener("click",()=>{
    carrito.length === 0 ? swal("¡Tu carrito esta vacio!", "Agrega algo para continuar", "error") : location.href = "assets/pages/compra.html"; 
})

function guardarStorage(){
    localStorage.setItem("carrito", JSON.stringify(carrito));
}









