let carroDeCompras = [];
let productos = ["botas","texanas","sandalias bajas","sandalias altas","bolso negro","bolso blanco"];
alert(`¡Hola!, estos son los productos que estan a la venta: ${productos}.`)

compras = ()=>{
    while(true){ 
        let producto = prompt("Que producto quiere agregar al carrito?")
            if(productos.includes(producto)){
                for(let i = 0;i < productos.length;i++){
                    if(producto == productos[i]){
                        carroDeCompras.push(productos[i]);
                        alert(`Su producto: ${producto}, se agrego correctamente al carrito.`);
                        }             
                    }
                repetir = prompt("¿Desea hacer otra compra");
                if(repetir == "si" || repetir == "SI"){
                        true
                    }
                else if(repetir == "no" || repetir== "NO"){
                        break
                    }
                else{
                    alert("Porfavor eliga entre si o no.")
                }       
                }
            else{
                alert("Error: Porfavor ingrese un producto existente")
            }
        }
}
compras();

let total = `Su carrito de compras tiene:<b style=color:red>${carroDeCompras}</b>.`;
document.write(total)