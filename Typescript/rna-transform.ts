export function toRna(dnaStrand: string) {
  let rnaStrand = new String('') ;

  for (let sequence of dnaStrand) {
    if (DnatoRna.has(sequence)) {
      rnaStrand += DnatoRna.get(sequence)!;
    } else {
      throw ('Invalid input DNA.');
    }
  }

  return rnaStrand;
}

const DnatoRna = new Map<string, string>();
DnatoRna.set('G', 'C');
DnatoRna.set('C', 'G');
DnatoRna.set('T', 'A');
DnatoRna.set('A', 'U');