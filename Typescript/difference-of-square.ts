export class Squares {
  count: number = 0;
  constructor(count: number) {
    this.count = count;
  }

  get sumOfSquares(): number {
    let sumOfSquare = 0;
    for (let index = 1; index <= this.count; index++) {
      sumOfSquare += (index*index);
    }
    
    return sumOfSquare;
  }

  get squareOfSum(): number {
    let squareOfSums = 0;
    for (let index = 1; index <= this.count; index++) {
      squareOfSums += index;
    }

    return (squareOfSums*squareOfSums);
  }

  get difference(): number {
    return this.squareOfSum - this.sumOfSquares;
  }
}
