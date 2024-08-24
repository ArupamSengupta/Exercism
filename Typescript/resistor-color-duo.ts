export function decodedValue(colornames: string[]): number {
  let bandColours: string[] =['black','brown','red','orange','yellow','green','blue','violet','grey','white'];
  
  return Number(
  (bandColours.findIndex((color: string) => color === colornames[0])) + ""
  + (bandColours.findIndex((color: string) => color === colornames[1]))
  );
}
