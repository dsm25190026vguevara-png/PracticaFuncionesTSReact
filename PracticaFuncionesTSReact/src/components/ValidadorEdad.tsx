export const ValidadorEdad = () => {
  // Indica si una persona tiene 18 años o más.
  const esMayorDeEdad = (edad: number): boolean => edad >= 18;
  // Devuelve el mensaje correspondiente a la edad recibida.
  const obtenerMensaje = (edad: number): string => esMayorDeEdad(edad) ? 'Puede votar' : `Le faltan ${18 - edad} años`;
  const edades: number[] = [15, 18, 25, 12];
  return <section className="card"><h3>4. Validador de edad</h3>{edades.map((edad: number) =>
    <p className="result" key={edad}>Edad {edad}: {obtenerMensaje(edad)}</p>)}</section>;
};
