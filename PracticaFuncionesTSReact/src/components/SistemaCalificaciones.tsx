type Alumno = { nombre: string; califs: number[] };

export const SistemaCalificaciones = () => {
  // Calcula el promedio de las calificaciones o cero si no hay notas.
  const calcularPromedio = (calificaciones: number[]): number => calificaciones.length === 0 ? 0 : calificaciones.reduce((total: number, nota: number): number => total + nota, 0) / calificaciones.length;
  // Convierte el promedio a una letra según la escala de la actividad.
  const obtenerLetra = (promedio: number): string => promedio >= 90 ? 'A' : promedio >= 80 ? 'B' : promedio >= 70 ? 'C' : promedio >= 60 ? 'D' : 'F';
  // Determina si el promedio es suficiente para aprobar.
  const estaAprobado = (promedio: number): boolean => promedio >= 70;
  const alumnos: Alumno[] = [
    { nombre: 'Ana', califs: [95, 88, 92] },
    { nombre: 'Luis', califs: [70, 65, 72] },
    { nombre: 'María', califs: [85, 90, 88] },
  ];
  return <section className="card"><h3>9. Sistema de calificaciones</h3>{alumnos.map((alumno: Alumno) => {
    const promedio = calcularPromedio(alumno.califs);
    const aprobado = estaAprobado(promedio);
    return <p className="result" key={alumno.nombre}>{alumno.nombre}: Promedio {promedio.toFixed(1)} - Letra {obtenerLetra(promedio)} - {aprobado ? 'Aprobado' : 'Reprobado'}</p>;
  })}</section>;
};
