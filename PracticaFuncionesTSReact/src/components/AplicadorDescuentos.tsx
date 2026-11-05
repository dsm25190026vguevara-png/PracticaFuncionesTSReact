export const AplicadorDescuentos = () => {
  // Aplica una estrategia de descuento y devuelve el precio final.
  const aplicarDescuento = (precio: number, calcularDescuento: (precio: number) => number): number => precio - calcularDescuento(precio);
  // Calcula un descuento del diez por ciento.
  const descuento10 = (p: number): number => p * 0.10;
  // Calcula un descuento del veinticinco por ciento.
  const descuento25 = (p: number): number => p * 0.25;
  // Calcula un descuento de estudiante del quince por ciento.
  const descuentoEstudiante = (p: number): number => p * 0.15;
  const precio = 1000;
  return <section className="card"><h3>8. Aplicador de descuentos</h3><p className="result">Precio original: ${precio.toFixed(2)}</p>
    <p className="result">Con 10% off: ${aplicarDescuento(precio, descuento10).toFixed(2)}</p>
    <p className="result">Con 25% off: ${aplicarDescuento(precio, descuento25).toFixed(2)}</p>
    <p className="result">Descuento estudiante: ${aplicarDescuento(precio, descuentoEstudiante).toFixed(2)}</p></section>;
};
