type Producto = { producto: string; precio: number; cantidad: number };

export const CarritoCompras = () => {
  // Calcula el subtotal de un producto según precio y cantidad.
  const calcularSubtotal = (precio: number, cantidad: number): number => precio * cantidad;
  // Calcula el IVA del dieciséis por ciento.
  const calcularIVA = (subtotal: number): number => subtotal * 0.16;
  // Suma el IVA al subtotal para obtener el total a pagar.
  const calcularTotal = (subtotal: number): number => subtotal + calcularIVA(subtotal);
  // Convierte un número a una cadena con signo de pesos y dos decimales.
  const formatearPrecio = (precio: number): string => `$${precio.toFixed(2)}`;
  const carrito: Producto[] = [
    { producto: 'Laptop', precio: 15000, cantidad: 1 },
    { producto: 'Mouse', precio: 350, cantidad: 2 },
    { producto: 'Teclado', precio: 800, cantidad: 1 },
  ];
  // Acumula el subtotal de todos los productos del carrito.
  const subtotal = carrito.reduce((acumulado: number, item: Producto): number => acumulado + calcularSubtotal(item.precio, item.cantidad), 0);
  return <section className="card"><h3>10. Carrito de compras</h3>
    {carrito.map((item: Producto) => <p className="result flex items-center justify-between gap-3" key={item.producto}><span>{item.producto} × {item.cantidad}</span><strong>{formatearPrecio(calcularSubtotal(item.precio, item.cantidad))}</strong></p>)}
    <hr className="my-4 border-slate-200" /><p className="result">Subtotal: {formatearPrecio(subtotal)}</p>
    <p className="result">IVA (16%): {formatearPrecio(calcularIVA(subtotal))}</p>
    <p className="rounded-lg bg-indigo-50 px-3 py-3 font-bold text-indigo-800">Total: {formatearPrecio(calcularTotal(subtotal))}</p></section>;
};
