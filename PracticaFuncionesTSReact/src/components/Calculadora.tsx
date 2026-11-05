export const Calculadora = () => {
  // Suma dos números y devuelve el resultado.
  const sumar = (a: number, b: number): number => a + b;
  // Resta el segundo número al primero.
  const restar = (a: number, b: number): number => a - b;
  // Multiplica dos números.
  const multiplicar = (a: number, b: number): number => a * b;
  // Divide dos números; devuelve cero si el divisor es cero.
  const dividir = (a: number, b: number): number => b === 0 ? 0 : a / b;
  const a = 15;
  const b = 4;
  return <section className="card"><h3>1. Calculadora básica</h3>
    <p className="result">{a} + {b} = {sumar(a, b)}</p><p className="result">{a} - {b} = {restar(a, b)}</p>
    <p className="result">{a} × {b} = {multiplicar(a, b)}</p><p className="result">{a} ÷ {b} = {dividir(a, b).toFixed(2)}</p>
    <p className="text-xs text-slate-500">Caso especial: 15 ÷ 0 = {dividir(15, 0)}</p></section>;
};
