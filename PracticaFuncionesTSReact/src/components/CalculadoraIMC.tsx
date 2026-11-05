export const CalculadoraIMC = () => {
  // Calcula el índice de masa corporal con peso en kg y altura en metros.
  const calcularIMC = (peso: number, altura: number): number => altura <= 0 ? 0 : peso / (altura * altura);
  // Clasifica el IMC en una categoría según los rangos indicados.
  const clasificarIMC = (imc: number): string => imc < 18.5 ? 'Bajo peso' : imc < 25 ? 'Normal' : imc < 30 ? 'Sobrepeso' : 'Obesidad';
  const peso = 70;
  const altura = 1.75;
  const imc = calcularIMC(peso, altura);
  return <section className="card"><h3>3. Calculadora de IMC</h3><p className="result">Peso: {peso} kg | Altura: {altura} m</p>
    <p className="result">IMC: {imc.toFixed(2)}</p><p className="result">Clasificación: <strong>{clasificarIMC(imc)}</strong></p>
    <p className="text-xs text-slate-500">Cálculo orientativo para practicar funciones; no sustituye una valoración médica.</p></section>;
};
