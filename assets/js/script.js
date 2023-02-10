
let productos = []
let carroDeCompras = [];

class ingProductos {
    constructor(nombre,precio,stockD){
        this.name=nombre;
        this.price=precio;
        this.stock=stockD;
        this.agregarS=function(s){
            this.stock += s  
        }
        this.agregarVidr=function(){
            if(this.stock > 0){
                productos.push(this)
            }
        }

    }
}
const producto0 = new ingProductos ("botas",400,1)
const producto1 = new ingProductos ("sandalias",300,0)
const producto2 = new ingProductos ("bolso",1000,2)
const producto3 = new ingProductos ("brazalete",500,1)

producto0.agregarS(1)
producto0.agregarVidr()
producto1.agregarVidr()
producto2.agregarVidr()
producto3.agregarVidr()

carrito = ()=>{
    let listaProductos = productos.map((Producto2)=> Producto2.name + " " + Producto2.price + "$");
    alert("Hola, a continuacion te mostramos nuestra lista de productos:")
    alert(listaProductos.join(" - "))
    while(true){ 
        let seleccion = prompt("Que producto quiere agregar al carrito?")
        if(listaProductos.includes(seleccion)){
            for(let i = 0;i <= listaProductos.length;i++){
                if(seleccion == listaProductos[i] && productos[i].stock > 0){
                    carroDeCompras.push(listaProductos[i]);
                    alert(`Su producto: ${seleccion}, se agrego correctamente al carrito.`);
                    productos[i].stock -= 1;
                }
                else if(productos[i].stock == 0){
                    alert("No hay mas stock de este producto")
                }        
            }
            repetir = prompt("¿Desea agregar otro producto al carro?");
            if(repetir == "si" || repetir == "SI"){
                true
            }
            else{
                let total = `Su carrito de compras tiene los siguientes productos:<b style=color:red>${carroDeCompras}</b>.<br>`;
                document.write(total)
                break
            }    
        }
        else{
            alert("Error: Porfavor ingrese un producto existente")
        }
    }
}

carrito();
