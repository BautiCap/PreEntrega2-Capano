
class Productos {
    constructor(id,nombre,precio,cantidad,img){
        this.id=id,
        this.name=nombre;
        this.price=precio;
        this.stock=cantidad;
        this.img=img
    }
}
const Stock = [
    new Productos (0,"Botas",400,10,"botas.PNG"),
    new Productos (1,"Sandalias",300,20,"sandalias.PNG"),
    new Productos (2,"Bolso",1000,5,"bolso.PNG"),
    new Productos (3,"Brazalete",500,30,"brazalete.PNG")
]

let carrito = [];

const contenedor = document.querySelector("#contenedor")

document.addEventListener("DOMContentLoaded", () => {
    carrito = JSON.parse(localStorage.getItem("carrito")) || []
    verCarrito()
});
    

for (elem of Stock){
    const {name,price,stock,id,img}= elem;
    contenedor.innerHTML += `
    <div class="card text-center" style="width: 18rem">
    <img class="card-img-top mt-2 img-responsive" src="./assets/img/${img}" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">${name}</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <p class="card-text">${price}$</p>
      <a onclick="agregaCarrito(${id})" class="btn btn-primary">Agregar al carrito(${stock})</a>
    </div>
    </div>`;    
}

 agregaCarrito = (id) =>{
    const prod = Stock.find((item) => item.id === id)
    carrito.push(prod);
    console.table(carrito)
    swal({
        text:`Agregado al carrito`,
        icon:"success",
        button:false,
        timer:1000,
    });
    verCarrito();
}




const verCarrito = () =>{
    const mostrar = document.querySelector(`.modal .modal-body`);
    mostrar.innerHTML = ""
    for (prod of carrito){
        const {id,name,stock,price,img} = prod;
        mostrar.innerHTML += `<div class="col" style="max-width: 540px;">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="./assets/img/${img}" class="img-fluid rounded-start" alt="...">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${name}</h5>
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <p>Cantidad :${stock}</p>
              <p>Precio: ${price}</p>
              <button onclick="eliminarProducto(${id})" class="btn btn-danger">Eliminar producto</button>  
            </div>
          </div>
        </div>
      </div>`;
    }
    guardarStorage()
}

function eliminarProducto(id){
    const juegoId = id;
    carrito = carrito.filter((juego)=> juego.id !== juegoId)
    verCarrito();
}

function guardarStorage(){
    localStorage.setItem("carrito", JSON.stringify(carrito))
}




