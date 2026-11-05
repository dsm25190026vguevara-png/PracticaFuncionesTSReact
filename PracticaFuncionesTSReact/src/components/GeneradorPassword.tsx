export const GeneradorPassword = () => {
  // Genera una contraseña aleatoria con letras y, opcionalmente, números y símbolos.
  const generarPassword = (longitud: number, incluirNumeros: boolean, incluirSimbolos: boolean): string => {
    if (longitud <= 0) return '';
    const letras = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numeros = '0123456789';
    const simbolos = '!@#$%^&*()_+';
    let caracteres = letras;
    if (incluirNumeros) caracteres += numeros;
    if (incluirSimbolos) caracteres += simbolos;
    let password = '';
    for (let i = 0; i < Math.floor(longitud); i++) {
      password += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
    return password;
  };
  return <section className="card"><h3>7. Generador de contraseñas</h3>
    <p className="result">Básica (8): <code>{generarPassword(8, false, false)}</code></p>
    <p className="result">Media (12): <code>{generarPassword(12, true, false)}</code></p>
    <p className="result">Fuerte (16): <code>{generarPassword(16, true, true)}</code></p>
    <p className="text-xs text-slate-500">Los ejemplos cambian al actualizar la página. Para cuentas reales, utiliza un generador seguro.</p></section>;
};
