/*
Santa Claus 🎅 quiere enmarcar los nombres de los niños buenos para decorar su taller 🖼️, pero el marco debe cumplir unas reglas específicas. Tu tarea es ayudar a los elfos a generar este marco mágico.

Reglas:

- Dado un array de nombres, debes crear un marco rectangular que los contenga a todos.
- Cada nombre debe estar en una línea, alineado a la izquierda.
- El marco está construido con * y tiene un borde de una línea de ancho.
- La anchura del marco se adapta automáticamente al nombre más largo más un margen de 1 espacio a cada lado.

Ejemplo de funcionamiento:
createFrame(['midu', 'madeval', 'educalvolpz'])

// Resultado esperado:
***************
* midu        *
* madeval     *
* educalvolpz *
***************

createFrame(['midu'])

// Resultado esperado:
********
* midu *
********

createFrame(['a', 'bb', 'ccc'])

// Resultado esperado:
*******
* a   *
* bb  *
* ccc *
*******

createFrame(['a', 'bb', 'ccc', 'dddd'])
*/

function createFrame(names: string[]): string {
  // Code here
  const sortedNames = [...names].sort((a, b) => a.length - b.length);
  const higherLength = sortedNames[names.length - 1].length;
  const lateralsLength = 4;
  const widthLength = higherLength + lateralsLength;
  let output = `${"*".repeat(widthLength)}\n`;
  for (const name of names) {
    output += `* ${name.padEnd(higherLength, " ")} *\n`;
  }
  output += `${"*".repeat(widthLength)}`;
  return output;
}

console.log(createFrame(["madeval", "educalvolpz", "midu"]));
