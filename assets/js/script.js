
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
    new Productos (0,"botas",400,1,"botas.PNG"),
    new Productos (1,"sandalias",300,0,"sandalias.PNG"),
    new Productos (2,"bolso",1000,2,"bolso.PNG"),
    new Productos (3,"brazalete",500,1,"brazalete.PNG")
]
const carrito = [];


for (elem of Stock){
    let card = document.createElement("div");
    card.innerHTML = `<div class="card text-center border-success mb-3 " style="width: 18rem;">
        <img class="card-img-top mt-2" src="./assets/img/${elem.img}" alt="Card image cap">
        <div class="card-body">
        <h5 class="card-title">${elem.name}</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <input type="button" onclick="agregaCarrito(${elem.id})" class="btn btn-primary bg-success mb-3" value="Comprar">
        </div>
        </div>`;
    document.body.append(card)
}

class ObjCarrito {
    constructor(producto,cant){
        this.producto=producto,
        this.cantidad=cant;
    }
    sumaStock(){
        this.cantidad =  this.cantidad + 1
    }
}
function agregaCarrito(prod){
    let existeEnCarrito = carrito.find(e => e.producto == prod);
    if(existeEnCarrito != undefined){
        let posicion = carrito.findIndex(elem => elem.producto == existeEnCarrito.producto);
        carrito[posicion].sumaStock()
        console.table(carrito)

    }
    else{
        const alCarrito = new ObjCarrito (prod, 1);
        carrito.push(alCarrito);
        console.table(carrito)
    }
}



function verCarrito(){
    document.body.innerHTML="";
    for(item of carrito){
        let card = document.createElement("div");
        let datosProd = Stock.find(elem => elem.id == item.producto);
        card.innerHTML=`<div class="card text-center" style="width: 18rem;">
                <img class="card-img-top" src="./assets/img/${datosProd.img}" alt="Card image cap">
                <div class="card-body">
                <h5 class="card-title">${datosProd.name}</h5>
                <p class="card-text">Te llevas ${item.cantidad}</p>
                </div>
                </div>`
        document.body.append(card)
    }
    const carroJson = JSON.stringify(carrito)
    console.log(carroJson)
    localStorage.setItem("carrito",carroJson)
    

}




