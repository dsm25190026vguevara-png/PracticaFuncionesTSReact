export const ConversorTemperatura = () => {
  // Convierte grados Celsius a Fahrenheit.
  const celsiusAFahrenheit = (c: number): number => c * 9 / 5 + 32;
  // Convierte grados Fahrenheit a Celsius.
  const fahrenheitACelsius = (f: number): number => (f - 32) * 5 / 9;
  const temperatura = 25;
  return <section className="card"><h3>2. Conversor de temperaturas</h3>
    <p className="result">{temperatura}°C = {celsiusAFahrenheit(temperatura)}°F</p>
    <p className="result">100°F = {fahrenheitACelsius(100).toFixed(2)}°C</p></section>;
};
