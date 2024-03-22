function calcularIva (productos: Producto[]) {
  let total = 0;
  productos.forEach(({precio})) => {
    total += precio;
  }
  return [total, total*0.15];
}

//class producto
class Producto {
  precio:number;
}
