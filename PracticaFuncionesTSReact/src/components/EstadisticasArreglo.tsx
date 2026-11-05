export const EstadisticasArreglo = () => {
  // Calcula el promedio; devuelve cero si el arreglo está vacío.
  const calcularPromedio = (nums: number[]): number => nums.length === 0 ? 0 : nums.reduce((acumulado: number, numero: number): number => acumulado + numero, 0) / nums.length;
  // Encuentra el valor máximo o devuelve cero si no hay elementos.
  const encontrarMaximo = (nums: number[]): number => nums.length === 0 ? 0 : Math.max(...nums);
  // Encuentra el valor mínimo o devuelve cero si no hay elementos.
  const encontrarMinimo = (nums: number[]): number => nums.length === 0 ? 0 : Math.min(...nums);
  const numeros: number[] = [8, 3, 15, 7, 22, 11, 4];
  return <section className="card"><h3>6. Estadísticas de arreglo</h3><p className="result">Números: [{numeros.join(', ')}]</p>
    <p className="result">Promedio: {calcularPromedio(numeros).toFixed(2)}</p><p className="result">Máximo: {encontrarMaximo(numeros)}</p>
    <p className="result">Mínimo: {encontrarMinimo(numeros)}</p></section>;
};
