
class Productos {
    constructor(nombre,precio,cantidad){
        this.name=nombre;
        this.price=precio;
        this.stock=cantidad;
    }
}
const Stock = [
    new Productos ("botas",400,1),
    new Productos ("sandalias",300,0),
    new Productos ("bolso",1000,2),
    new Productos ("brazalete",500,1)
]

const costo = [];
const carrito = [];


funcion = ()=>{
    let mensaje = ""
    for(let p of Stock){mensaje += `- ${p.name} (${p.stock} disponibles) - ${p.price}$ la unidad\n`}
    alert(`Hola, a continuacion te mostramos nuestra lista de productos:\n\n${mensaje}`)
    
    while(true){  
        let seleccion = prompt("Que producto quiere agregar al carrito?");    
        for(let h = 0;h < Stock.length;h++){  
            if(Stock[h].name == seleccion && Stock[h].stock > 0){
                switch(seleccion){
                    case Stock[h].name:
                    carrito.push(Stock[h].name);
                    costo.push(Stock[h].price)
                    costoTotal = costo.reduce((acc, p)=> acc + p, 0);
                    alert(`Su producto: ${seleccion}, se agrego correctamente al carrito.`);
                    break
                }
                repetir = prompt("¿Desea agregar otro producto al carro?");
                if(repetir == "si" || repetir == "SI"){
                    true
                }
                else if(repetir == "no" || repetir == "NO"){
                    carrito.join(" - ")
                    document.write(`Su carrito de compras tiene los siguientes productos:<b style=color:red>${carrito}</b>.<br>
                    El precio total es de: <b style=color:blue>${costoTotal}$</b>`)
                    break
                }                      
            }
            else if(Stock[h].name == seleccion && Stock[h].stock == 0){
                alert("No hay mas stock de este producto") 
            }         
        }
        if(repetir == "no" || repetir == "NO"){
            break
        }
    }
}

funcion();

