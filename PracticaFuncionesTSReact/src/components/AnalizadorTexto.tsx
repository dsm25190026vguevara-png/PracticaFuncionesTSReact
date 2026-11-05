export const AnalizadorTexto = () => {
  // Cuenta las palabras separadas por uno o más espacios.
  const contarPalabras = (texto: string): number => texto.trim() === '' ? 0 : texto.trim().split(/\s+/).length;
  // Cuenta las vocales, incluyendo vocales acentuadas, sin distinguir mayúsculas.
  const contarVocales = (texto: string): number => (texto.match(/[aeiouáéíóúü]/gi) ?? []).length;
  // Invierte el orden de los caracteres de un texto.
  const invertirTexto = (texto: string): string => texto.split('').reverse().join('');
  const texto = 'Hola mundo desde TypeScript';
  return <section className="card"><h3>5. Analizador de texto</h3><p className="result">Texto: “{texto}”</p>
    <p className="result">Palabras: {contarPalabras(texto)}</p><p className="result">Vocales: {contarVocales(texto)}</p>
    <p className="result break-words">Invertido: {invertirTexto(texto)}</p></section>;
};
